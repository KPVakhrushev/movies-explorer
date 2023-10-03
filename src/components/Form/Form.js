import React from 'react';
import FormInput from '../FormInput/FormInput';
import './Form.css';

function Login({title, onSubmit, fields, className}){
  return (
    <form className={`form ${className}`} id="" name="login" action="" method="post" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        {fields.map( item => <FormInput {...item} key={item.name} />) }
        <span className='form__error-msg form__error-msg_visible'>Что-то пошло не так...</span>
      </fieldset>
      <button type="submit" className="form__button" title="" >{title}</button>
    </form>
  );
}
export default Login;
