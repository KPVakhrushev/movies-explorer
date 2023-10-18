import React from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '../Link/Link';
import './Page404.css';
import Title from '../Title/Title';


const  Header = ( ) => {
  const navigate = useNavigate();
  return (
    <main className='page404'>
      <Title level={1} className='page404__title'>404</Title>
      <Title level={2} className='page404__subtitle'>Страница не найдена</Title>
      <Link colored={true} onClick={()=>navigate(-1)}>Назад</Link>
    </main>
  )
}
export default Header;

