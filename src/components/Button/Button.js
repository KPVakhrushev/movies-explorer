import React from 'react';
import './Button.css';

const  Button = ( {theme='', className='', children, ...props} ) => {
  const fullClass = 'button ' + (theme ?` button_theme_${theme} ` : ' ') + className;
  return (
    <button type="submit" className={fullClass} {...props}>{children}</button>
  )
}
export default Button;

