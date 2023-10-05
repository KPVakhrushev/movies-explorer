import React  from 'react';
import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';

const  Movies = ({movies, className=''}) => {
  return (
    <ul className={`movies ${className}`}>
      {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/> )}
    </ul>
  )
}
export default Movies;
