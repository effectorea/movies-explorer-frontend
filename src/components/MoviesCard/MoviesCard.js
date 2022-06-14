import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './MoviesCard.css';

function MoviesCard({ movieImage }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLikeClick = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  const handleMovieDelete = (e) => {
    const el = e.target.parentElement;
    el.parentElement.remove();
  }

  return (
    <article className='movie'>
      <div className='movie__container'>
        <div className='movie__block'>
          <h2 className='movie__name'>33 слова о дизайне</h2>
          <p className='movie__duration'>1ч 47м</p>
        </div>
        <button
          className={
            location.pathname !== '/movies'
              ? 'movie__like_delete'
              : isLiked ? 'movie__like_active' : 'movie__like'
          }
          onClick={location.pathname === '/movies' ? toggleLikeClick : handleMovieDelete}
        ></button>
      </div>
      <img src={movieImage} alt='Фильм' className='movie__image' />
    </article>
  );
}

export default MoviesCard;
