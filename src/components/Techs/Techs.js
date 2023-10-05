import React from 'react';
import Title from '../Title/Title';
import './Techs.css';


const  Techs = ( ) => {
  return (
    <section className="techs">
      <Title level='2' type='section'>Технологии</Title>
      <Title level='3' className='techs__title'>7 технологий</Title>

      <p className='techs__about'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
        <li>Git</li>
        <li>Express.js</li>
        <li>mongoDB</li>
      </ul>
    </section>
  )
}
export default Techs;
