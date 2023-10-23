import React, { useState } from 'react';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
import Button from '../Button/Button';
import language from '../../utils/language.js';
import './SearchForm.css';

const  SearchForm = ( {handleSearch, handleChange, className='', initial} ) => {
  const [values, setValues] = useState(initial);
  const [error, setError]   = useState('');
  const onChange = (event) => {
    const newValues = { ...values, [event.target.name]: event.target.type==='checkbox'?event.target.checked:event.target.value };
    handleChange(newValues, event.currentTarget);
    setValues(newValues);
    setError(null)
  };
  const onSubmit= (e)=>{
    e.preventDefault();
    if(!values.phrase)
      setError(language.MSG_KEYWORD_IS_EMPTY)
    else
      handleSearch(values);
  }
  return (
    <form className={`search-form ${className}`} noValidate={true} onSubmit={onSubmit} >
      <div className='search-form__search'>
        <input name='phrase' placeholder={language.FILM} className={`search-form__input ${error?'search-form__input_error':''}`} minLength={3} required={true} value={values.phrase} onChange={onChange} />
        <Button className='search-form__button'>Найти</Button>
        <span className='search-form__error'>{error}</span>
      </div>
      <label className='search-form__filter'>
        Короткометражки
        <FormCheckbox name='short' title='Только короткометражки' className='search-form__short' checked={values.short} onChange={onChange} />
      </label>
    </form>
  )
}
export default SearchForm;
