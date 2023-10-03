import React from 'react';
import Link from '../Link/Link';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import './Profile.css';

const  Profile = ( {logout} ) => {
  const user = React.useContext(CurrentUserContext);

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user?.name}</h1>
      <dl className='profile__data'>
          <dt className="profile__field">Имя</dt>
          <dd className="profile__field profile__field_value">{user.name}</dd>

          <dt className="profile__field">E-mail</dt>
          <dd className="profile__field profile__field_value">{user.email}</dd>
      </dl>
      <nav className='profile__actions'>
        <Link>Редактировать</Link>
        <Link className='profile__logout' onClick={logout}>Выйти из аккаунта</Link>
      </nav>
    </section>
  )
}
export default Profile;
