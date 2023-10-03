import React from 'react';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
import './SearchForm.css';

const  SearchForm = ( ) => {
  return (
    <form className='search-form'>
      <div className='search-form__search'>
        <input name='search' placeholder='Фильм' className='search-form__input' />
        <button type='submit' className='search-form__submit'>Найти</button>
      </div>
      <label className='search-form__filter'>
        Короткометражки
        <FormCheckbox name='short' title='Только короткометражки' className='search-form__short'/>
      </label>
    </form>
  )
}
export default SearchForm;
