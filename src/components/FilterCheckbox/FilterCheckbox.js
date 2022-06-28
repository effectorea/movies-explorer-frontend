import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortMovie, setIsShortMovie, checkbox }) {
  const toggleCheckbox = () => {
    if (checkbox.current.checked) {
      setIsShortMovie(true);
    } else {
      setIsShortMovie(false);
    }
  };

  return (
    <div className='filter'>
      <label
        className={
          isShortMovie ? 'filter__checkbox_active' : 'filter__checkbox'
        }
      >
        <input
          onChange={toggleCheckbox}
          ref={checkbox}
          checked={isShortMovie}
          type='checkbox'
          className='filter__input'
        />
      </label>
      <p className='filter__subtitle'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
