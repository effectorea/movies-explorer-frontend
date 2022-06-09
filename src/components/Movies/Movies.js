import React, { useState, useEffect, useRef } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Burger from '../Burger/Burger';

function Movies() {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const openBurgerMenu = () => {
        setBurgerMenu(true);
    }

    const closeBurgerMenu = () => {
        setBurgerMenu(false)
    }


  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <SearchForm/>
      <Footer />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
    </>
  );
}

export default Movies;
