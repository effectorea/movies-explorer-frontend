import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/film1.svg';
import movie2 from '../../images/film2.svg';
import movie3 from '../../images/film3.svg';

function MoviesCardList() {
  return (
    <section className='movies'>
      <MoviesCard movieImage={movie1} />
      <MoviesCard movieImage={movie2} />
      <MoviesCard movieImage={movie3} />
      <MoviesCard movieImage={movie1} />
      <MoviesCard movieImage={movie2} />
      <MoviesCard movieImage={movie3} />
      <MoviesCard movieImage={movie1} />
      <MoviesCard movieImage={movie2} />
      <MoviesCard movieImage={movie3} />
    </section>
  );
}

export default MoviesCardList;
