import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function MoviesCardList({ movies, onMovieLike, onMovieDelete, savedMovies, result }) {

  const location = useLocation();

  return (
    <section ref={result} className='movies'>
      {location.pathname === '/movies'
        ? movies &&
          movies.map((element) => {
            return (
              <MoviesCard
                movie={element}
                key={element.id}
                nameRu={element.nameRU}
                duration={element.duration}
                trailerLink={element.trailerLink}
                image={element.image.url}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                savedMovies={savedMovies}
              />
            );
          })
        : savedMovies &&
          savedMovies.map((element) => {
            return (
              <MoviesCard
                movie={element}
                key={element._id}
                nameRu={element.nameRU}
                duration={element.duration}
                trailerLink={element.trailerLink}
                image={element.image}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                savedMovies={savedMovies}
              />
            );
          })}
    </section>
  );
}

export default MoviesCardList;
