import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox ({ isShortMovie, setIsShortMovie, onFilter, checkbox }) {

    const toggleCheckbox = () => {
      setIsShortMovie(isShortMovie => !isShortMovie);
      onFilter();
      console.log(isShortMovie)
      console.log(checkbox.current.checked)
    }
    
    return (
        <div className='filter'>
        <label className={ isShortMovie ? 'filter__checkbox_active' : 'filter__checkbox' }>
          <input onClick={toggleCheckbox} ref={checkbox} type='checkbox' className='filter__input' />
        </label>
        <p className='filter__subtitle'>Короткометражки</p>
      </div>
    )
}

export default FilterCheckbox;
