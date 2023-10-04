import React from 'react';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Project from '../Project/Project';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Footer from '../Footer/Footer';

import './PageLending.css';

const PageLending = () => {
  return (
    <div className='page-lending'>
      <Header className='page-lending__header'/>
      <main className='page-lending__main'>
        <Promo/>
        <Project/>
        <Techs/>
        <AboutMe/>
      </main>
      <Footer className='page-lending__footer'/>
    </div>
  )
}
export default PageLending;

