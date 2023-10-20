import React, { useState } from 'react';
import Header from '../Header/Header';
import Link from '../Link/Link';
import Title from '../Title/Title';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Button from '../Button/Button';
import useFormValidation from '../useFormValidation/useFormValidation';
import {schemaProfile} from '../../utils/validation';

import './PageProfile.css';
import language from '../../utils/language';

const PageProfile = ( {logout, handleSubmit} ) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const user = React.useContext(CurrentUserContext);
  const [msg, setMessage] = useState({});


  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(values)
      .then(()=> {
        setMessage({msg: language.MSG_SAVE_ME, type: "info"});
        setIsEditMode(false);
      })
      .catch((e)=>setMessage({msg:e.message, type:"error"}));
  }
  const onClickEdit = ()=>{
    setIsEditMode(true);
    setMessage({});
  }
  const {values, errors, ...funcs } =  useFormValidation({}, schemaProfile);
  const actions = <>
    <Link onClick={onClickEdit}>Редактировать</Link>
    <Link className='page-profile__logout' onClick={logout}>Выйти из аккаунта</Link>
  </>;
  const oldState = JSON.stringify({name:user?.name, email:user?.email})
  const newState = JSON.stringify(values)
  const saveButton = <Button disabled={errors?.submit || oldState===newState}>Сохранить</Button>

  React.useEffect(() => {
    funcs.setValues({name:user?.name, email:user?.email});
    funcs.setErrors({});
  }, [user]);


  return (
    <div className='page-profile'>
      <Header theme='light'/>
      <main>
        <section>
          <Title className='page-profile__title' type='page'>Привет, {user?.name}</Title>
          <form className='page-profile__form' onChange={funcs.handleChange} onSubmit={onSubmit}>
              <label>
                Имя
                <input className="" value={values?.name} name='name' disabled={!isEditMode} onChange={()=>{}} placeholder='Имя'/>
                <span className='page-profile__msg page-profile__msg_type_error'>{errors?.name}</span>
              </label>

              <label>
                E-mail
                <input className="" value={values?.email} name='email' disabled={!isEditMode} onChange={()=>{}} placeholder='Email' type='email'/>
                <span className='page-profile__msg page-profile__msg_type_error'>{errors?.email}</span>
              </label>


              <div className='page-profile__actions'>
                {msg && <p className={'page-profile__msg page-profile__msg_type_'+ msg.type}>{msg.msg}</p>}
                {isEditMode? saveButton :actions}
              </div>
          </form>
        </section>
      </main>
    </div>
  )
}
export default  PageProfile;
