import React from 'react';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
import Button from '../Button/Button';
import './SearchForm.css';

const  SearchForm = ( {className=''} ) => {
  return (
    <form className={`search-form ${className}`}>
      <div className='search-form__search'>
        <input name='search' placeholder='Фильм' className='search-form__input' minLength={3} required={true}/>
        <Button className='search-form__button'>Найти</Button>
      </div>
      <label className='search-form__filter'>
        Короткометражки
        <FormCheckbox name='short' title='Только короткометражки' className='search-form__short'/>
      </label>
    </form>
  )
}
export default SearchForm;
