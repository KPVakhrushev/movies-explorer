import React  from 'react';
import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';

const  Movies = ({movies, handleLike, className=''}) => {
  return (
    <ul className={`movies ${className}`}>
      {movies.map((movie) => <MovieCard movie={movie} key={movie.movieId} handleLike={handleLike}/> )}
    </ul>
  )
}
export default Movies;
