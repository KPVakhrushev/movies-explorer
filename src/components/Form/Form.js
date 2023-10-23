import React, { useState } from 'react';
import Button from '../Button/Button';
import Error from '../Error/Error';
import FormInput from '../FormInput/FormInput';
import useFormValidation from '../useFormValidation/useFormValidation';

import './Form.css';

function Form({title, handleSubmit, fields, className, validation, ...props}){
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values)
      .catch((e)=>funcs.setErrors({submit: <Error className='form__error-msg form__error_position_submit' error={e} /> }));
  };
  const {values, errors, ...funcs } =  useFormValidation({}, validation);
  React.useEffect(() => {
    funcs.setValues({});
    funcs.setErrors({});
  }, []);

  return (
    <form className={`form ${className}`} name="login" action="/" method="post" onSubmit={onSubmit} {...props} onChange={funcs.handleChange} noValidate>
      <fieldset className="form__fieldset">
        {fields.map( item =>
            <div key={item.name}>
              <FormInput {...item} value={values[item.name]??''} onChange={()=>{}} className={errors[item.name]?'form__error':''} />
              <span className='form__error-msg'>{errors[item.name]}</span>
            </div>
          )
        }
      </fieldset>
      {errors?.submit}
      <Button disabled={errors?.submit??true}>{title}</Button>
    </form>
  );
}
export default Form;
