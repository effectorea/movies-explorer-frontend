import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox ({ isShortMovie, setIsShortMovie }) {

    const toggleCheckbox = () => {
      setIsShortMovie(!isShortMovie)
      console.log(isShortMovie)
    }
    
    return (
        <div className='filter'>
        <label className={ isShortMovie ? 'filter__checkbox_active' : 'filter__checkbox' }>
          <input onClick={toggleCheckbox} type='checkbox' className='filter__input' />
        </label>
        <p className='filter__subtitle'>Короткометражки</p>
      </div>
    )
}

export default FilterCheckbox;
