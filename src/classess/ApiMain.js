import Api from './Api.js'

class ApiMain extends Api{
  signUp({password, email, name}){
    return this._json('POST', '/signup', {password, email, name});
  }
  signIn({password, email}){
    return this._json('POST', '/signin',{password, email});
  }
  logout(){
    return this._fetch('POST', '/logout');
  }

  /* возвращает информацию о пользователе (email и имя) */
  getMe(){
    return this._json('GET', '/users/me');
  }
  /* обновляет информацию о пользователе (email и имя) */
  updateMe(user){
    return  this._json('PATCH', '/users/me', user);
  }

  /* возвращает все сохранённые текущим пользователем фильмы */
  getMovies(){
    //return (new Promise(resolve => setTimeout(resolve, 1000))).then(()=>this._json('GET', '/movies'));
    return  this._json('GET', '/movies');
  }
  /*
  # создаёт фильм с переданными в теле
  # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
  */
  addMovie(movie){
    return this._json('POST', '/movies', movie);
  }

  /* удаляет сохранённый фильм по id */
  deleteMovie(id){
    return this._json('DELETE', `/movies/${id}`);
  }
}

export const apiMain = new ApiMain(process.env.REACT_APP_API_MY, 'include');
export default ApiMain;
