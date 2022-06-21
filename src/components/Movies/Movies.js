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

function Movies({ openBurgerMenu, burgerMenu, closeBurgerMenu, loggedIn }) {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const jwt = localStorage.getItem("jwt");

  React.useEffect(() => {
    if (jwt) {
      moviesApi.getMovies()
      .then((res) => {
        console.log(res)
        setMovies(res)
    })
  }
  }, [loggedIn, jwt]);

  function handleCardLike(movie) {
    MainApi.saveMovie(movie, jwt)
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm />
      <MoviesCardList movies={movies} onCardLike={handleCardLike} savedMovies={savedMovies} />
      <LoadMore />
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
