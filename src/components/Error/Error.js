import React from 'react';
import './Error.css';
import Button from '../Button/Button';

const Error = ( {error, handleClose} ) => {
  return (
    <div className={`error ${error?'error__visible':''}`}>
      {error}
      <Button className='error__close' type='button' onClick={handleClose}/>
    </div>
  )
}
export default Error;

