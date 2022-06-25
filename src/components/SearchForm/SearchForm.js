import React from 'react';
import './SearchForm.css';
import search from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useForm } from 'react-hook-form';

function SearchForm({
  isShortMovie,
  setIsShortMovie,
  isSearchValue,
  setIsSearchValue,
  onSearchMovies,
  onFilter,
  checkbox,
}) {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const handleValueChange = (e) => {
    setIsSearchValue(e.target.value);
  };

  return (
    
    <section className='search'>
      <div className='search__section'>
        <div className='search__block'>
          <img src={search} alt='Лупа' className='search__image' />
          <form
            className='search__form'
            onSubmit={onSearchMovies}
            noValidate
          >
            <fieldset className='search__field'>
              <input
                {...register('searchText', {
                  required: 'Нужно ввести ключевое слово',
                })}
                className='search__input'
                name='searchText'
                type='text'
                placeholder='Фильм'
                value={isSearchValue}
                onChange={handleValueChange}
                autoComplete='off'
              />
              <button
                className={!isValid ? 'search__submit search__submit_disabled' : 'search__submit'}
                type='submit'
                value=''
                disabled={!isValid}
              />
            </fieldset>
          </form>
        </div>
        <FilterCheckbox
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          onFilter={onFilter}
          checkbox={checkbox}
        />
      </div>
      <span className="search__no-text">{errors?.searchText && errors.searchText.message}</span>
    </section>
  );
}

export default SearchForm;
