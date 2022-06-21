import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
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
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default SavedMovies;
