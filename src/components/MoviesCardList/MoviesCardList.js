import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onCardLike, savedMovies }) {
  return (
    <section className='movies'>
      {movies && movies.map((element) => {
            return (
              <MoviesCard
                movie={element}
                key={element.id}
                onCardLike={onCardLike}
                savedMovies={savedMovies}
              />
            );
          })}
    </section>
  );
}

export default MoviesCardList;
