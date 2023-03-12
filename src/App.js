import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components//Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

const  App = (props) => {
  return (
    <BrowserRouter>

    <div className = 'app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
      <Routes>
        <Route path= '/dialogs*' element = {<DialogsContainer store={props.store}/>} /> 
        <Route path= '/profile' element = {<Profile store={props.store} />} />
        <Route path= '/news' element = {<News />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
