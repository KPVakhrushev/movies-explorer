import {apiMovies} from '../../utils/constants';
import { useMediaQuery } from 'react-responsive';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/Movies'
import SearchForm from '../SearchForm/SearchForm'
import './PageMovies.css';
import { useEffect, useState } from 'react';


const PageMovies = ({saved}) => {
  const isMobile = useMediaQuery({ query: '(max-width:550px)' })
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' })
  const getMoviesPerPage = ()=>{
    if(isMobile) return 5;
    if(isTablet) return 8;
    return 16;
  }

  const [movies, setMovies] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState(getMoviesPerPage());
  const displayMore = () => setMoviesOnPage((old)=> old + getMoviesPerPage());
  useEffect(()=>{
    apiMovies.get(saved).then((movies)=>{
      setMovies(movies);
      setMoviesOnPage(getMoviesPerPage())
    });
  }, [saved]);


  return (
    <div className='page-movies'>
      <Header theme='light'/>
      <main>
        <SearchForm/>
        {<MoviesCardList movies={movies.slice(0, moviesOnPage)}/>}
        {moviesOnPage < movies.length && <button className='page-movies__more-button' onClick={displayMore}>Еще</button> }
      </main>
      <Footer/>
    </div>
  )
}

export default PageMovies;
