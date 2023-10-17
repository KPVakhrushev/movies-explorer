import React, { useEffect, useState } from 'react';
import './MovieCard.css';
import Preloader from '../Preloader/Preloader';

const  MoviesCard = ({movie, handleLike} ) => {
  const saved = Boolean(movie.id);
  const durationMin =  movie.duration % 60;
  const durationHour = (movie.duration-durationMin) / 60;
  const duration = durationHour ? `${durationHour}ч ${durationMin}м`:`${durationMin}м`;
  const handleClick = () => window.open(movie.trailerLink, '_blank', 'noopener,noreferrer');

  return (
      <li className='movie-card'>
        <img src={movie.thumbnail} alt={movie.nameRU} className='movie-card__image' onClick={handleClick}/>
        <h2 className='movie-card__title'>{movie.nameRU}</h2>
        <span className={'movie-card__save '+ (saved? 'movie-card__save_saved':'')} onClick={()=>handleLike(movie)} />
        <span className="movie-card__duration">{duration}</span>
      </li>
  )
}
export default MoviesCard;
