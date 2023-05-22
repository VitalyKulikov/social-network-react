import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components//Navbar/Navbar';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';


const  App = (props) => {

  return (
    <BrowserRouter>

    <div className = 'app-wrapper'>
      <HeaderContainer/>
      <Navbar />
      <div className='app-wrapper-content'>
      <Routes>
        <Route path= '/dialogs' element = {<DialogsContainer />} />
        <Route path= 'profile/:userId' element = {<ProfileContainer />} />
        <Route path= 'profile' element = {<ProfileContainer />} />
        <Route path= '/news' element = {<News />} />
        <Route path= '/users' element = {<UsersContainer />} />
        <Route path= '/login' element = {< Login />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
