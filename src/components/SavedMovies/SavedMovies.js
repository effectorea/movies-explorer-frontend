import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ openBurgerMenu, burgerMenu, closeBurgerMenu }) {
  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default SavedMovies;
