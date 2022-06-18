import React, { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';

function Movies({ openBurgerMenu, burgerMenu, closeBurgerMenu }) {
  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm />
      <MoviesCardList />
      <LoadMore />
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
