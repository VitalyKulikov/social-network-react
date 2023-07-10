/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import pss from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={pss.wrapper}>
      {true && (
        <div className={pss.status}>
          <span onDoubleClick={activateEditMode}>
            {' '}
            {props.status || 'У вас еще нет статуса'}
          </span>
        </div>
      )}
      {editMode && (
        <div className={pss.statusValue}>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
