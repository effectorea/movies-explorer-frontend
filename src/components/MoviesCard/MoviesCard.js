import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './MoviesCard.css';
import { useLocalStorage } from '../../utils/useLocalStorage';

function MoviesCard({
  movie,
  savedMovies,
  onMovieLike,
  onMovieDelete,
  nameRu,
  duration,
  trailerLink,
  image,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  localStorage.setItem("likes", JSON.stringify(isLiked)); 

  const handleLikeClick = () => {
    if (!isLiked) {
      onMovieLike(movie);
      setIsLiked(true);
    } else {
      const movieElement = savedMovies.filter((el) => el.movieId === movie.id);
      onMovieDelete(movieElement[0]._id);
      setIsLiked(false);
    }
  };

  const handleMovieClick = () => {
    onMovieDelete(movie._id);
    console.log(movie._id);
  };

  return (
    <article className='movie'>
      <div className='movie__container'>
        <div className='movie__block'>
          <h2 className='movie__name'>{nameRu}</h2>
          <p className='movie__duration'>{duration}м</p>
        </div>
        <button
          className={
            location.pathname !== '/movies'
              ? 'movie__like_delete'
              : isLiked
              ? 'movie__like_active'
              : 'movie__like'
          }
          onClick={
            location.pathname === '/movies' ? handleLikeClick : handleMovieClick
          }
        ></button>
      </div>
      <a
        className='movie__trailer-link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={
            location.pathname !== '/movies'
              ? image
              : `https://api.nomoreparties.co/${image}`
          }
          alt={nameRu}
          className='movie__image'
        />
      </a>
    </article>
  );
}

export default MoviesCard;
