import React, { useState } from 'react';
import './SearchForm.css';
import search from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <section className='search'>
      <div className='search__section'>
        <div className='search__block'>
          <img src={search} alt='Лупа' className='search__image' />
          <form className='search__form' noValidate>
            <fieldset className='search__field'>
              <input
                className='search__input'
                type='text'
                placeholder='Фильм'
                required
              />
              <button className='search__submit' type='submit' value='' />
            </fieldset>
          </form>
        </div>
        <FilterCheckbox isChecked={isChecked} toggleCheckbox={toggleCheckbox} />
      </div>
    </section>
  );
}

export default SearchForm;
