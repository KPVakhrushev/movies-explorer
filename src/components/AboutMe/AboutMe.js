import React from 'react';
import Link from '../Link/Link';
import Title from '../Title/Title';
import photo from '../../images/photo.png';
import './AboutMe.css';

const  AboutMe = ( ) => {
  const name = "Виталий"
  const desc = "Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы."
  const prof = "Фронтенд-разработчик, 30 лет"
  return (
    <section className='about-me'>
        <Title level='2' type='section'>Студент</Title>

        <img className='about-me__photo' src={photo} alt={name}></img>
        <Title level='3' className='about-me__name'>{name}</Title>
        <Title level='4' className='about-me__profession'>{prof}</Title>

        <p className='about-me__desc'>{desc}</p>
        <Link className='about-me__git' to='https://github.com/KPVakhrushev/' target='_blank'>Github</Link>

        <h3  className='about-me__portfolio-title'> Портфолио </h3>
        <ul className='about-me__portfolio'>
          <li  className='about-me__portfolio-item'>
            <Link to='https://kpvakhrushev.github.io/how-to-learn/' target='_blank'> Статичный сайт  </Link>
          </li>
          <li  className='about-me__portfolio-item'>
            <Link to='https://kpvakhrushev.github.io/russian-travel/' target='_blank' >Адаптивный сайт</Link>
          </li>
          <li className='about-me__portfolio-item'>
            <Link to='https://kpvakhrushev.github.io/react-mesto-auth/'  target='_blank'>Одностраничное приложение</Link>
          </li>
        </ul>
      </section>
  )
}
export default AboutMe;
