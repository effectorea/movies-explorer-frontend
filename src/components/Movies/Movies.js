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
  checkbox,
  filteredMovies
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
      {movies.length === 0 || isSearchValue === '' ? <NoSearch/> : <MoviesCardList
        movies={!isShortMovie ? filteredMovies : movies}
        filteredMovies={filteredMovies}
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
