import React from "react";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components//Navbar/Navbar.jsx";
import News from "./components/News/News.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";


const  App = () => {

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
