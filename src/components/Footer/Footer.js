import React from 'react';
import Link from '../Link/Link';
import './Footer.css';

const  Footer = ( {className=''} ) => {
  return (
    <footer className={`footer ${className}`}>
      <p className='footer__desc'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bottom'>
        <span className='footer__copyright'>© 2020</span>
        <div className='footer__links'>
          <Link to='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</Link>
          <Link to='https://github.com/KPVakhrushev' target='_blank'>Github</Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
