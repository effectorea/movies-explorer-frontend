import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox ({ isChecked, toggleCheckbox }) {
    
    return (
        <div className='filter'>
        <label className={ !isChecked ? 'filter__checkbox filter__checkbox_active' : 'filter__checkbox' }>
          <input onClick={toggleCheckbox} type='checkbox' className='filter__input' />
        </label>
        <p className='filter__subtitle'>Короткометражки</p>
      </div>
    )
}

export default FilterCheckbox;
