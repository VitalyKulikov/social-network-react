import React from 'react';
import dialogs from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = './' + props.id;

  return (
    <div className={dialogs.dialog}>
      <NavLink
        to={path}
        className={(dialogLink) =>
          dialogLink.isActive ? dialogs.active : dialogs.item
        }
      >
        {' '}
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
