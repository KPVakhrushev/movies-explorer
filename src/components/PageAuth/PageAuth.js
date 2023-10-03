import React from 'react';
import { useLocation } from 'react-router-dom';

import Link from '../Link/Link';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import './PageAuth.css';


function PageAuth(props){
  const location = useLocation();
  let data;
  switch(location.pathname){
    case '/signin':
      data = {
        title: "Рады видеть!",
        quyestion: "Ещё не зарегистрированы?",
        linkTitle: 'Регистрация',
        link: '/signup',
        form: {
          title: 'Войти',
          onSubmin: (e)=>{ e.preventDefault() },
          fields:[
            {title:'Email', name:"name", minLength:1, maxLength:200, required: true, placeholder:"Имя"},
            {title:'Пароль',name:"password", minLength:6, maxLength:"20", required:true, type:"password"}
          ]
        }
      };
      break;
    case '/signup':
        data = {
          title: 'Добро пожаловать!',
          quyestion: 'Уже зарегистрированы?',
          linkTitle: 'Войти',
          link: '/signin',
          form: {
            title: 'Зарегистрироваться',
            onSubmin: (e)=>{ e.preventDefault() },
            fields:[
              {title:'Email', name:"name", minLength:1, maxLength:200, required: true, placeholder:"Имя"},
              {title:'Пароль',name:"password", minLength:1, maxLength:"200", required:true}
            ]
          }
        };
        break;
    default: return <></>;
  }

  return (
    <main className='page-auth'>
      <Logo/>
      <Title level='1' type='page' className='page-auth__title'>{data.title}</Title>
      <Form {...data.form} className='page-auth__form'/>
      <p className='page-auth__subtitle'>
        {data.quyestion}
        <Link colored={true} to={data.link}>{data.linkTitle}</Link>
      </p>
    </main>
  );
}
export default  PageAuth;
