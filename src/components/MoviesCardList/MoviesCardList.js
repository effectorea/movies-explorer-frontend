import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onCardLike }) {
  return (
    <section className='movies'>
      {movies && movies.map((element) => {
            return (
              <MoviesCard
                movie={element}
                key={element.id}
                onCardLike={onCardLike}
              />
            );
          })}
    </section>
  );
}

export default MoviesCardList;
