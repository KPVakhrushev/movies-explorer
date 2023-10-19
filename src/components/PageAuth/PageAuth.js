import React from 'react';
import { useLocation } from 'react-router-dom';
import {schemaRegistration, schemaLogin} from '../../utils/validation';

import Link from '../Link/Link';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';

import './PageAuth.css';


function PageAuth({handleSubmit}){
  const location = useLocation();
  const fieldTitle = {title:'Имя', name:"name", placeholder:"Имя" };
  const fieldEmail = {title:'Email', name:"email", placeholder:"email@mail.ru"};
  const fieldPswd  = {title:'Пароль',name:"password", type:"password", placeholder:"Пароль", autoComplete:"off"};

  const pageConfigs = {
    '/signin':{
      title: "Рады видеть!",
      question: "Ещё не зарегистрированы?",
      linkTitle: 'Регистрация',
      link: '/signup',
      form: { title: 'Войти', handleSubmit, fields:[ fieldEmail, fieldPswd], validation: schemaLogin }
    },
    '/signup': {
      title: 'Добро пожаловать!',
      question: 'Уже зарегистрированы?',
      linkTitle: 'Войти',
      link: '/signin',
      form: {title: 'Зарегистрироваться', handleSubmit, fields:[fieldTitle, fieldEmail, fieldPswd], validation:schemaRegistration }
    }
  }
  const pageConfig = pageConfigs[location.pathname];
  if(!pageConfig) return '';
  return (
    <main className='page-auth'>
      <Logo/>
      <Title level='1' type='page' className='page-auth__title'>{pageConfig.title}</Title>
      <Form {...pageConfig.form} className='page-auth__form'/>
      <p className='page-auth__subtitle'>
        {pageConfig.question}
        <Link colored={true} to={pageConfig.link}>{pageConfig.linkTitle}</Link>
      </p>
    </main>
  );
}
export default  PageAuth;
