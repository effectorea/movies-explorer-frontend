import React, { useState } from 'react';
import './SearchForm.css';
import search from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ isShortMovie, setIsShortMovie, isSearchValue, setIsSearchValue, onSearchMovies, onFilter, checkbox }) {

  const handleValueChange = (e) => {
    setIsSearchValue(e.target.value)
    console.log(isSearchValue)
  }

  return (
    <section className='search'>
      <div className='search__section'>
        <div className='search__block'>
          <img src={search} alt='Лупа' className='search__image' />
          <form className='search__form' onSubmit={onSearchMovies} noValidate>
            <fieldset className='search__field'>
              <input
                className='search__input'
                type='text'
                placeholder='Фильм'
                required
                value={isSearchValue}
                onChange={handleValueChange}
              />
              <button className='search__submit' type='submit' value='' />
            </fieldset>
          </form>
        </div>
        <FilterCheckbox isShortMovie={isShortMovie} setIsShortMovie={setIsShortMovie} onFilter={onFilter} checkbox={checkbox} />
      </div>
    </section>
  );
}

export default SearchForm;
