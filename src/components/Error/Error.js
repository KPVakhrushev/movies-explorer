import React from 'react';
import './Error.css';
import Button from '../Button/Button';
import language from '../../utils/language';

const Error = ( {className='', error, popup=false, handleClose} ) => {
  if(!error) return '';
  const  msg = typeof error==='string'? error: error.message?? language.ERROR_UNDEFINED;

  let fullClass = `error ${error?'error__visible':''} ${className}` + (popup?' error__type_popup':'')

  return (
    <span className={fullClass}>
      {msg}
      {popup && <Button className='error__close' type='button' onClick={handleClose}/>}
    </span>
  )
}
export default Error;

