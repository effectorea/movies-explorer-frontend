import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
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
  filteredMovies,
  renderedMovies,
  onLoadMore,
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
      {isPreloader ? <Preloader /> : ''}
      {renderedMovies.length === 0 || isSearchValue === '' ? (
        <NoSearch />
      ) : (
        <MoviesCardList
          movies={!isShortMovie ? filteredMovies : renderedMovies}
          savedMovies={savedMovies}
          onMovieLike={onMovieLike}
          onMovieDelete={onMovieDelete}
        />
      )}
      {renderedMovies.length < movies.length && isSearchValue !== '' ? (
        <LoadMore onLoadMore={onLoadMore} />
      ) : (
        ''
      )}
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
