import React, { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import { moviesApi } from '../../utils/MoviesApi';
import { MainApi } from '../../utils/MainApi';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from '../../utils/useLocalStorage';

function Movies({ openBurgerMenu, burgerMenu, closeBurgerMenu, loggedIn }) {
  const location = useLocation();
  const [movies, setMovies] = useLocalStorage("movies", []);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [isSearchValue, setIsSearchValue] = useState("");
  const jwt = localStorage.getItem("jwt");

  React.useEffect(() => {
    if (jwt) {
      moviesApi.getMovies()
      .then((res) => {
        console.log(res)
        setMovies(res)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  }, [loggedIn, jwt, setMovies]);

  function handleCardLike(movie) {
    MainApi.saveMovie(movie, jwt)
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm isShortMovie={isShortMovie} setIsShortMovie={setIsShortMovie} isSearchValue={isSearchValue} setIsSearchValue={setIsSearchValue} />
      <MoviesCardList movies={movies} savedMovies={savedMovies} onCardLike={handleCardLike} />
      <LoadMore />
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
