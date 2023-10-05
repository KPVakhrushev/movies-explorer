import React from 'react';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './Form.css';

function Login({title, onSubmit, fields, className, ...props}){
  return (
    <form className={`form ${className}`} name="login" action="/" method="post" onSubmit={onSubmit} {...props}>
      <fieldset className="form__fieldset">
        {fields.map( item => <FormInput {...item} key={item.name} />) }
        <span className='form__error-msg form__error-msg_visible'>Что-то пошло не так...</span>
      </fieldset>
      <Button>{title}</Button>
    </form>
  );
}
export default Login;
