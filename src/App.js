import React from 'react';
import './App.css';
import Login from './components/Login/Login.jsx';
import Navbar from './components//Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="profile" element={<ProfileContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(
    connect(mapStateToProps,
        {initializeApp}))(App);
