import React from 'react';
import './AccountButton.css';
import Link from '../Link/Link';

const  AccountButton = ( {theme='', className=''} ) => {
  const accountClass = 'account-button ' + (theme ?` account-button_theme_${theme} ` : ' ') + className;
  return (
      <Link className={accountClass} to='/profile'>Аккаунт</Link>
  )
}
export default AccountButton;

