import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
 return < div className={h.header}>
  <div className={h.headerLogo}> <h2>Social Network</h2> </div>
  <div className={h.loginBlock}>{props.isAuth 
  ? props.login
  : <NavLink to={'/login'}>login</NavLink>}</div>
  </div>
}

export default Header;