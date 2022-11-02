import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
    return <nav className = {n.nav}>
    <div className = {n.item}>
      <a href='/profile'>Profile</a>
    </div>
    <div className = {n.item}>
      <a href='/dialogs'>Messages</a>
    </div>
    <div className = {n.item}>
      <a>News</a>
    </div>
    <div className = {n.item}>
      <a>Music</a>
    </div>
    <div className = {n.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar;