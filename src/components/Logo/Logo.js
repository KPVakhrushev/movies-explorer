import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';


const  Logo = ( {addClass=''}) => {
  return (
    <Link to="/" title='На главную'><div className={"logo " + addClass} /></Link>
  )
}
export default Logo;
