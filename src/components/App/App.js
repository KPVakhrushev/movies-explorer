import React, {useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import Lending from '../PageLanding/PageLending.js';
import Page404 from '../Page404/Page404.js';
import PageMovies from '../PageMovies/PageMovies.js';
import PageProfile from '../PageProfile/PageProfile.js';
import PageAuth from '../PageAuth/PageAuth.js';
import Error from '../Error/Error.js';

import './App.css';
import { apiMain } from '../../classess/ApiMain.js';

function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleError = (e)=>{
    setError(<Error error={e} popup="true" handleClose={()=>setError('')}/>)
  }
  const getUser   = function(){
    apiMain.getMe().then((answer)=>{
      setUser(answer);
    })
    .catch((er)=>{
      setUser({});
      handleError(er);
      localStorage.clear();
      logout();
    });
   }
  const logout = (e) => {
    if(e) e.preventDefault();
    apiMain.logout().then(()=>{
      setUser({});
      navigate('/', { replace: true });
    })
    .catch(e=>handleError(e))
    localStorage.clear();
  }

  const handleSignIn= (user)=>{
    return handleAuth(user, apiMain.signIn)
  }
  const handleSignUp = (user)=>{
    return handleAuth(user, apiMain.signUp)
  }
  const handleAuth = function(user, method){
      return method.bind(apiMain)(user)
      .then((answer)=>{
        setUser(answer);
        navigate('/movies',{ replace: true });
      });
  }
  const handleUpdateMe = (values)=>{
    return apiMain.updateMe(values).then(()=>{ {setUser(values) }});
  }
  React.useEffect(()=>{
    if(user===undefined){
      getUser();
    }
  }, [user]);

  const authorized = user===undefined?undefined:Boolean(user?.email);
  return (
    <CurrentUserContext.Provider value={user}>
      <Routes>
        <Route path="/"             element={<Lending/>}/>
        <Route path="/movies"       element={<ProtectedRoute condition={authorized} element={<PageMovies  key='movies' handleError={handleError} /> }  />}/>
        <Route path="/saved-movies" element={<ProtectedRoute condition={authorized} element={<PageMovies  key='saved-movies' handleError={handleError} isSavedOnly={true} /> }/>}/>
        <Route path="/profile"      element={<ProtectedRoute condition={authorized} element={<PageProfile logout={logout} handleSubmit={handleUpdateMe} />}/>}  />

        <Route path="/signin"       element={<ProtectedRoute condition={!authorized} otherwiseRedirectTo='/profile' element={<PageAuth handleSubmit={handleSignIn}/>} /> }  />
        <Route path="/signup"       element={<ProtectedRoute condition={!authorized} otherwiseRedirectTo='/profile' element={<PageAuth handleSubmit={handleSignUp}/>} /> } />
        <Route path="*"             element={<Page404/>} />
      </Routes>
      {error}
    </CurrentUserContext.Provider>
  );
}

export default App;
