import React, { useState } from 'react';
import './MovieCard.css';
import {apiMovies} from '../../utils/constants';

const  MoviesCard = ({movie} ) => {
  const durationMin =  movie.duration % 60;
  const durationHour = (movie.duration-durationMin) / 60;
  const duration = durationHour ? `${durationHour}ч ${durationMin}м`:`${durationMin}м`
  return (
      <li className='movie-card'>
        <img src={apiMovies.getThumbUrl(movie)} alt={movie.nameRU} className='movie-card__image'/>
        <h2 className='movie-card__title'>ыыыыыыыыыыы ыыыыыыыыыыы ыыыыыыыыыыыыыы {movie.nameRU}</h2>
        <span className={'movie-card__save '+ (movie.id%2? '': 'movie-card__save_saved')} />
        <span className="movie-card__duration">{duration}</span>
      </li>
  )
}
export default MoviesCard;
