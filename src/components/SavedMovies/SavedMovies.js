import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NoSearch from '../NoSearch/NoSearch';

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
  onSearchMovies,
  isPreloader,
  checkbox
}) {
  return (
    <>
    <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn} />
      <SearchForm
        isShortMovie={isShortMovie}
        setIsShortMovie={setIsShortMovie}
        isSearchValue={isSearchValue}
        setIsSearchValue={setIsSearchValue}
        onSearchMovies={onSearchMovies}
        checkbox={checkbox}
      />
      {isPreloader ? <Preloader /> : ''}
      {savedMovies.length === 0 ? (
        <NoSearch />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          onMovieLike={onMovieLike}
          onMovieDelete={onMovieDelete}
        />
      )}

      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default SavedMovies;
