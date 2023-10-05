import React, { useState } from 'react';
import Header from '../Header/Header';
import Link from '../Link/Link';
import Title from '../Title/Title';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Button from '../Button/Button';
import './PageProfile.css';

const PageProfile = ( {logout} ) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const user = React.useContext(CurrentUserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('Функционал не реализован');
    setDisabled(true);
  }
  const actions = <>
    <Link onClick={()=>setIsEditMode(true)}>Редактировать</Link>
    <Link className='page-profile__logout' onClick={logout}>Выйти из аккаунта</Link>
  </>;
  const saveButton = <Button disabled={disabled}>Сохранить</Button>

  return (
    <div className='page-profile'>
      <Header theme='light'/>
      <main>
        <section>
          <Title className='page-profile__title' type='page'>Привет, {user?.name}</Title>
          <form className='page-profile__form' onChange={()=>setDisabled(false)} onSubmit={handleSubmit}>
              <label>
                Имя
                <input className="" value={name} disabled={!isEditMode} onChange={(v)=>setName(v.target.value)} placeholder='Имя' required={true}  minLength={1} maxLength={200}/>
              </label>

              <label>
                E-mail
                <input className="" value={email} disabled={!isEditMode} onChange={v=>setEmail(v.target.value)} placeholder='Email' required={true} minLength={1} maxLength={20}/>
              </label>

              <div className='page-profile__actions'>
                {error && <p className='page-profile__error'>{error}</p>}
                {isEditMode? saveButton :actions}
              </div>
          </form>
        </section>
      </main>
    </div>
  )
}
export default  PageProfile;
