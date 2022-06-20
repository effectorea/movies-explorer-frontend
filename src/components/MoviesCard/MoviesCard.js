import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './MoviesCard.css';

function MoviesCard({ movie, onCardLike }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    onCardLike(movie);
    console.log(movie)
    setIsLiked(!isLiked);
  }

  const handleMovieDelete = (e) => {
    const el = e.target.parentElement;
    el.parentElement.remove();
  }

  return (
    <article className='movie'>
      <div className='movie__container'>
        <div className='movie__block'>
          <h2 className='movie__name'>{movie.nameRU}</h2>
          <p className='movie__duration'>{movie.duration}</p>
        </div>
        <button
          className={
            location.pathname !== '/movies'
              ? 'movie__like_delete'
              : isLiked ? 'movie__like_active' : 'movie__like'
          }
          onClick={location.pathname === '/movies' ? handleLikeClick : handleMovieDelete}
        ></button>
      </div>
      <a
        className="movie__trailer-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className='movie__image' />
      </a>
      
    </article>
  );
}

export default MoviesCard;
