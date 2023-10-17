import React, {useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import Lending from '../PageLanding/PageLending.js';
import Page404 from '../Page404/Page404.js';
import PageMovies from '../PageMovies/PageMovies.js';
import PageProfile from '../PageProfile/PageProfile.js';
import PageAuth from '../PageAuth/PageAuth.js';
import  Error from '../Error/Error.js';

import './App.css';
import { apiMain } from '../../utils/constants.js';
import languge from '../../utils/language.js';

function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const getUser   = function(){
    apiMain.getMe().then((answer)=>{
      setUser(answer);
    })
    .catch((er)=>{
      setUser({});
      if(er.status!==404) handleError(er, languge.ERROR_AUTH);
      localStorage.clear();
    })
   }
  const logout = (e) => {
    e.preventDefault();
    apiMain.logout().then(()=>{
      setUser({});
      navigate('/', { replace: true });
    }).catch(handleError)
    localStorage.clear();
  }
  const handleError = (e, message='')=>{
    if(message)setError(message);
    if(process.env.NODE_ENV==="development") console.log(e);
  }
  const handleSignIn= (user)=>{
    return handleAuth(user, apiMain.signIn)
  }
  const handleSignUp = (user)=>{
    return handleAuth(user, apiMain.signUp)
  }
  const handleAuth = function(user, method){
    return  new Promise((resolve, reject)=>{
      method.bind(apiMain)(user)
      .then((answer)=>{
        setUser(answer);
        resolve();
        navigate('/movies',{ replace: true });

      }).catch( ()=> reject(languge.ERROR_AUTH) )
    });
  }
  const handleUpdateMe = (values)=>{
    return apiMain.updateMe(values)
      .then(()=>setUser(values))
      .catch((e)=>handleError(e));
  }
  React.useEffect(()=>{
    if(user===undefined){
      getUser();
    }
  }, [user]);
  return (
    <CurrentUserContext.Provider value={user}>
      <Routes>
        <Route path="/"             element={<ProtectedRoute element={<Lending/>}/>}/>
        <Route path="/movies"       element={<ProtectedRoute element={<PageMovies handleError={handleError}/> } key='movies'/>} />
        <Route path="/saved-movies" element={<ProtectedRoute element={<PageMovies handleError={handleError}  key='saved-movies' isSavedOnly={true}  /> }/>} />
        <Route path="/profile"      element={<ProtectedRoute element={<PageProfile logout={logout} handleSubmit={handleUpdateMe} />}/>} />

        <Route path="/signin"       element={<PageAuth handleSubmit={handleSignIn}/>} />
        <Route path="/signup"       element={<PageAuth handleSubmit={handleSignUp}/>} />
        <Route path="*"             element={<Page404/>} />
      </Routes>
      <Error error={error} handleClose={()=>setError('')}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
