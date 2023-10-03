import React from 'react';
import './FormInput.css';

const  FormInput = ( {title, ...props} ) => {
  const [value, setValue] = React.useState('');
  return (
    <label className="form-input">
      {title}
      <input className="form-input__input" {...props} value={value}  onChange={(e)=>setValue(e.target.value)}/>
    </label>
  )
}
export default FormInput;
