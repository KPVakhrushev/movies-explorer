import React from 'react';
import imgPlanetWeb from '../../images/web_planet.svg';
import Title  from '../Title/Title';
import Link from '../Link/Link';
import './Promo.css';

const  Promo = ( ) => {
  return (
    <section className='promo'>
      <img className='promo__img' src={imgPlanetWeb} alt="Планета вэб" />
      <Title className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</Title>
      <p className='promo__subtitle'>
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <Link className='promo__more-link' href='#about-project'>Узнать больше</Link>
    </section>
  )
}
export default Promo;
