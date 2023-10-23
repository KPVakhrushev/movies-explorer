import { apiMain } from '../classess/ApiMain';
import { apiMovies } from '../classess/ApiMovies';
import {DURATION_SHORT_MOVIES} from '../utils/constants';
import Movie from './Movie';
class MoviesFactory {
  static #loaded;
  static #userId;

  #isSavedOnly;
  #filter;
  #restored;
  #restoredFilter;
  #filtered;
  #listeners;

  constructor (isSavedOnly, userId){
    if(MoviesFactory.#loaded && MoviesFactory.#userId!==userId){
      MoviesFactory.#loaded = null;
    }
    MoviesFactory.#userId = userId;
    this.#isSavedOnly = isSavedOnly;
    this.#filter = {phrase:'', short:false};
    this.#listeners = {update:()=>{}, error:(e)=>{}}
    if(isSavedOnly){
      if(!MoviesFactory.#loaded) this.#load();
      else this.#applyFilter();
    }
    else{
      this.#loadStateFromStorage();
    }
  }
  subscribe(update, error){
    this.#listeners = {
      update,
      error
    }
    return this.#filtered;
  }
  getState(){
    return [this.#filtered, this.#filter];
  }
  getFilter(){
    return this.#filter;
  }
  setFilter({phrase, short}){
    if(phrase===undefined && short===undefined ) return;
    this.#filter.short = short??this.#filter.short;
    this.#filter.phrase = phrase??this.#filter.phrase;
    /* не будем загружать если фильтруются сохраненные данные только по хронометражу */
    const needLoad = (this.#restored && this.#filter.phrase===this.#restoredFilter.phrase && this.#restoredFilter.short===false) ? false : !MoviesFactory.#loaded;

    if(needLoad) return this.#load();
    else this.#applyFilter();
  }
  toggleLike(movie){
    (movie.id ? this.deleteMovie(movie) : this.saveMovie(movie)).catch(this.#listeners.error);
  }

  saveMovie(movie){
    const {id, ...payload} = movie;
    return apiMain.addMovie(payload)
      .then((saved)=>{
        movie.id = saved._id;
        this.#applyFilter();
      })
  }
  deleteMovie(movie){
    return apiMain.deleteMovie(movie.id)
      .then(()=>{
        movie.id = null;
        this.#applyFilter();
      })
  }
  #applyFilter(){
    const items = MoviesFactory.#loaded??this.#restored;
    const filtered = items.filter(item=>{
      const phraseLc = this.#filter.phrase.toLowerCase();
      const matchPhrase = !phraseLc || item.nameRU.toLowerCase().includes(phraseLc) || item.nameEN.toLowerCase().includes(phraseLc);
      const matchShort = !this.#filter.short || item.duration <= DURATION_SHORT_MOVIES;
      const matchSaved = !this.#isSavedOnly || item.id;
      return matchPhrase && matchSaved && matchShort;
    })

    this.#setResult(filtered)
    return filtered;
  }
  #load (){
    this.#filtered = null;
    Promise.all([apiMovies.get(), apiMain.getMovies()])
    .then(([movies, savedMovies])=> {
      const map = {};
      this.#restored = null;
      savedMovies.forEach(movie => {map[movie.movieId] = movie._id });
      MoviesFactory.#loaded = movies.map( movie => this.#createMoviefromApiData(movie, map[movie.id]) );
      this.#applyFilter();
      return this.#filtered;
    })
    .catch((e)=>{
        this.#setResult(undefined);
        this.#listeners.error(e);
    })
  }
  #setResult(items){
    this.#filtered = items;
    if(!this.#isSavedOnly){
      this.#saveStateToStorage();
    }
    this.#listeners.update(items);
  }
  #loadStateFromStorage(){
    if(this.#isSavedOnly) return;
    try{
      const storedMovies = JSON.parse (localStorage.getItem('movies') );
      const storedFilter = JSON.parse ( localStorage.getItem('filter') );
      if(Array.isArray(storedMovies)){
        this.#filter = storedFilter;
        this.#restoredFilter = {...storedFilter};
        this.#restored = storedMovies.map(movie=>new Movie(movie));
        this.#applyFilter();
      }
    }
    catch(e){}
  }
  #saveStateToStorage(){
    if(this.#isSavedOnly) return;
    localStorage.setItem('movies', JSON.stringify(this.#filtered));
    localStorage.setItem('filter', JSON.stringify(this.#filter));
  }
  #createMoviefromApiData(movie, mainId){
    const {image, created_at, updated_at, id, ...payload} = movie;

    return new Movie({
      ...payload,
      thumbnail: apiMovies.getThumbUrl(movie),
      image: apiMovies.getImageUrl(movie),
      movieId: movie.id,
      id: mainId??null
    })
  }

}
export default MoviesFactory;
