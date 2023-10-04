import React from 'react';
import { menu } from '../../utils/constants';
import Link from '../Link/Link';
import AccountButton from '../AccountButton/AccountButton';
import './MobileMenu.css';

const MobileMenu = ( {opened, onClose} ) => {
  const links = [{ link: '/', title: 'Главная' }].concat(menu) ;

  return (
    <div className={'mobile-menu '+ (opened?'mobile-menu_opened':'')}  onClick={onClose}>
      <nav className={`mobile-menu__container ${opened?'mobile-menu__container_opened':''}`}>
        <button className='mobile-menu__close-button'  onClick={onClose}/>
        {links.map(item=>( <Link to={item.link} key={item.link} activeClassName = 'mobile-menu__active'> {item.title} </Link>) )}
        <AccountButton theme='light' className='mobile-menu__account-button'/>
      </nav>

    </div>
  )
}
export default MobileMenu;

