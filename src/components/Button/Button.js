import React from 'react';
import './Button.css';

const  Button = ( {type='submit', theme='', className='', children, ...props} ) => {
  const fullClass = 'button ' + (theme ?` button_theme_${theme} ` : ' ') + className;
  return (
    <button type={type} className={fullClass} {...props}>{children}</button>
  )
}
export default Button;

