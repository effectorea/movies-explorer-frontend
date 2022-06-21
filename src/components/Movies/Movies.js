import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import { MainApi } from '../../utils/MainApi';

function Movies({
  openBurgerMenu,
  burgerMenu,
  closeBurgerMenu,
  loggedIn,
  isShortMovie,
  setIsShortMovie,
  isSearchValue,
  setIsSearchValue,
  movies,
  savedMovies,
  onMovieLike,
  onMovieDelete,
}) {
  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm
        isShortMovie={isShortMovie}
        setIsShortMovie={setIsShortMovie}
        isSearchValue={isSearchValue}
        setIsSearchValue={setIsSearchValue}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onMovieLike={onMovieLike}
        onMovieDelete={onMovieDelete}
      />
      <LoadMore />
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
