import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import movie1 from '../../images/film1.svg';
import movie2 from '../../images/film2.svg';
import movie3 from '../../images/film3.svg';

function MoviesCardList() {
  const location = useLocation();
  return (
    <>
      <section className='movies'>
        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie1} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie2} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie3} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie1} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie2} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie3} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie1} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie2} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie3} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie1} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie2} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie3} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie1} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie2} alt='Фильм первый' className='movie__image' />
        </article>

        <article className='movie'>
          <div className='movie__container'>
            <div className='movie__block'>
              <h2 className='movie__name'>33 слова о дизайне</h2>
              <p className='movie__duration'>1ч 47м</p>
            </div>
            <button className='movie__like'></button>
          </div>
          <img src={movie3} alt='Фильм первый' className='movie__image' />
        </article>
      </section>
      {location.pathname !== '/saved-movies' ? (
        <button className='movies__button' type='button'>
          Ещё
        </button>
      ) : (
        ''
      )}
    </>
  );
}

export default MoviesCardList;
