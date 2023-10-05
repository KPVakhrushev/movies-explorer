import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';


const Link = ( {colored, activeClassName='', children, className='', ...props} ) => {
  const fullClassName = ({isActive}) => `link${colored?' link_colored':''}${isActive?` link_active ${activeClassName}`:''} ${className??''}`.trim();
  return (
    <NavLink className={fullClassName} {...props}>
      {children}
    </NavLink>
  )
}
export default Link;

