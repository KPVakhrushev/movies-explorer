import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import AccountButton from '../AccountButton/AccountButton';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { MENU as menuLinks } from '../../utils/constants';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css';

const  Header = ( {theme='', className=''} ) => {
  const user = React.useContext(CurrentUserContext);
  const logged = Boolean(user?.email);
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })
  const [menuOpened, setMenuOpened] = useState(false);
  const handleCloseMenu = ()=> setMenuOpened(false);

  let buttons, menu;

  if(logged){
    if(isMobile){
      buttons = <button className={'header__burger' + (theme?` header__burger_theme_${theme}`:'')} onClick={()=>setMenuOpened(true)} type='button'/>
      menu = <MobileMenu opened={menuOpened} onClose={handleCloseMenu}/>
    }
    else{
      buttons = <AccountButton theme={theme}/>
      menu = <nav className='header__menu'> {menuLinks.map(item=><Link to={item.link} key={item.link} className='header__link' activeClassName='header__link_active' >{item.title}</Link>)} </nav>
    }
  }
  else{
    buttons =
    <div className='header__signup'>
      <Link to="/signup" className='header__link'>Регистрация</Link>
      <Link to="/signin" className='header__signin'>Войти</Link>
    </div>;
  }

  return (
    <header className={`header ${theme?`header_theme_${theme}`:''} ${className}`}>
      <Logo/>
      {menu}
      {buttons}
    </header>
  )
}
export default Header;

