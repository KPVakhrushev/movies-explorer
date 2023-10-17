import React, { useState } from 'react';
import './FormCheckbox.css';


const  FormCheckbox = ( {name, title, checked, id, onChange, className=''} ) => {
  return (
    <span className={'form-checkbox ' + (checked?' form-checkbox_checked ':' ') + className}>
      <input
        type='checkbox'
        name={name}
        checked={checked}
        title={title}
        id={id}
        className='form-checkbox__checkbox'
        onChange={onChange}
      />
    </span>
  )
}
export default FormCheckbox;
