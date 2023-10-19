import { useEffect, useRef, useState } from 'react';
import MoviesFactory from '../../classess/MoviesFactory';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/Movies';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'

import language from '../../utils/language.js';
import config from '../../utils/config';
import './PageMovies.css';


const PageMovies = ({isSavedOnly=false, handleError}) => {
  const getCountCards = ()=> config.COUNT_CARDS_BY_WIDTH.find(param => window.innerWidth < param[2]);
  useEffect(() => {
    const handleWindowResize = () => setMoviesOnPage(getCountCards()[0]);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const [, refresh] = useState();
  const [moviesOnPage, setMoviesOnPage] = useState(getCountCards()[0]);
  const moviesFactory = useRef( );
  moviesFactory.current = moviesFactory.current?? new MoviesFactory(isSavedOnly);
  moviesFactory.current.subscribe(refresh, (e)=>handleError(e, language.ERROR_API_MOVIES))
  const [movies, filter] = moviesFactory.current.getState();

  const handleLike = (movie)=> moviesFactory.current.toggleLike(movie);
  const handleSearch = (filter) => moviesFactory.current.setFilter(filter);
  const handleChange = (filter, target) => target.name==='short' && moviesFactory.current.setFilter(filter) ;
  const handleDisplayMore = ()=> setMoviesOnPage(old => old + getCountCards()[1]);


  const display = movies===null? <Preloader/>:

  movies===undefined? '':
    !movies.length? language.MSG_NOT_FOUND:
    (
      <>
        <MoviesCardList movies={movies.slice(0, moviesOnPage)} handleLike={handleLike}/>
        {moviesOnPage < movies.length && <button className='page-movies__more-button' onClick={handleDisplayMore} type='button'>Еще</button> }
      </>
    )

  return (
    <div className='page-movies'>
      <Header theme='light'/>
      <main>
        <section>
          <SearchForm className='page-movies__search-form' handleSearch={handleSearch} handleChange={handleChange}  initial={filter} />
        </section>
        <section>
          {display}
        </section>
      </main>
      <Footer className='page-movies__footer'/>
    </div>
  )
}

export default PageMovies;
