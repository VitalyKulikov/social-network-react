import React from "react";
import h from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={h.header}>
      <div className={h.headerLogo}>
        <div>
          <h2>Clicq</h2>
        </div>
      </div>
      <div className={h.loginBlock}>
        {props.isAuth ? (
          <div>
            <div>{props.login}</div>
            <div>
              <button onClick={props.logout}>Log out</button>
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}>login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
