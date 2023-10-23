import React from 'react';
import './FormInput.css';

const  FormInput = ( {title, onChange, value, className='', ...props} ) => {
  return (
    <label className={`form-input ${className??''}`}>
      {title}
      <input className="form-input__input" {...props} value={value}  onChange={onChange} />
    </label>
  )
}
export default FormInput;
