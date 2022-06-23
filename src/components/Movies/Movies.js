import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import { MainApi } from '../../utils/MainApi';
import NoSearch from '../NoSearch/NoSearch';
import Preloader from '../Preloader/Preloader';

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
  onSearchMovies,
  onFilter,
  isPreloader,
  checkbox
}) {
  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm
        isShortMovie={isShortMovie}
        setIsShortMovie={setIsShortMovie}
        isSearchValue={isSearchValue}
        setIsSearchValue={setIsSearchValue}
        onSearchMovies={onSearchMovies}
        onFilter={onFilter}
        checkbox={checkbox}
      />
      {isPreloader ? <Preloader/> : ""}
      {movies.length === 0 ? <NoSearch/> : <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onMovieLike={onMovieLike}
        onMovieDelete={onMovieDelete}
      />}
      {movies.length === 100 ? "" : <LoadMore/>}
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
