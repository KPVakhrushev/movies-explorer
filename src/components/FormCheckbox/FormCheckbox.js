import React, { useState } from 'react';
import './FormCheckbox.css';


const  FormCheckbox = ( {name, title, id, onChange, className=''} ) => {
  const [checked, setChecked] = useState(false);
  const change = ()=>{
    setChecked(!checked);
    if (onChange) onChange();
  }
  return (
    <span className={'form-checkbox ' + (checked?' form-checkbox_checked ':' ') + className}>
      <input
        type='checkbox'
        name={name}
        onChange={change}
        checked={checked}
        title={title}
        id={id}
        className='form-checkbox__checkbox'
      />
    </span>
  )
}
export default FormCheckbox;
