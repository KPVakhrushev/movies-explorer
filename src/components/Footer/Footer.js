import React from 'react';
import './Footer.css';
import Link from '../Link/Link';

const  Footer = ( {className} ) => {
  return (
    <footer className={`footer ${className}`}>
      <p className='footer__desc'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bottom'>
        <p className='footer__copyright'>© 2020</p>
        <div className='footer_links'>
          <Link to='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</Link>
          <Link to='https://github.com/KPVakhrushev' target='_blank'>Github</Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
