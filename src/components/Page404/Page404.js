import React from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '../Link/Link';
import './Page404.css';
import Title from '../Title/Title';
import language from '../../utils/language';


const  Header = ( ) => {
  const navigate = useNavigate();
  return (
    <main className='page404'>
      <Title level={1} className='page404__title'>404</Title>
      <Title level={2} className='page404__subtitle'>{language.ERROR_404}</Title>
      <Link colored={true} onClick={()=>navigate(-1)}>{language.UI_BACK}</Link>
    </main>
  )
}
export default Header;

