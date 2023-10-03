import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Lending from '../PageLanding/PageLending.js';
import Page404 from '../Page404/Page404.js';
import PageMovies from '../PageMovies/PageMovies.js';
import PageProfile from '../PageProfile/PageProfile.js';
import PageAuth from '../PageAuth/PageAuth.js';
import { useState } from 'react';
import './App.js'

function App() {
  const [user, setUser] = useState({ name: 'Виталик', email: 'qwe@qwe.ru'})
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    setUser({});
    navigate('/', { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Lending/>}/>
        <Route path="/movies"  element={<PageMovies saved={false}/>} />
        <Route path="/saved-movies"  element={<PageMovies saved={true}/>} />
        <Route path="/profile" element={<PageProfile logout={logout}/>} />
        <Route path="/signin" element={<PageAuth/>} />
        <Route path="/signup" element={<PageAuth/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
