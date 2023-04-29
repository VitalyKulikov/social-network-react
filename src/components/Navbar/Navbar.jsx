import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';

const Navbar = () => {
    return <nav className = {n.nav}>
    <div className = {n.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? n.active : n.item } >Profile</NavLink>
    </div>
    <div className = {n.item}>
      <NavLink to='/dialogs' className = { navData => navData.isActive ? n.active : n.item } >Messages</NavLink>
    </div>
    <div className = {n.item}>
      <NavLink to='/users' className = { navData => navData.isActive ? n.active : n.item } >Users</NavLink>
    </div>
    <div className = {n.item}>
      <NavLink to='/news' className = { navData => navData.isActive ? n.active : n.item } >News</NavLink>
    </div>
    <div className = {n.item}>
      <NavLink to='/music' className = { navData => navData.isActive ? n.active : n.item } >Music</NavLink>
    </div>
    <div className = {n.item}>
      <NavLink to='settings' className = { navData => navData.isActive ? n.active : n.item } >Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;