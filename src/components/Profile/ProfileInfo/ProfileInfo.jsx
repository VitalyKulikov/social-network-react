import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';
import AvatarDefolt from '../../../assets/image/avatardefolt.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={p.ProfileInfo}>
      <div className={p.avatar}>
        <img
          alt=""
          src={!props.profile.photos.small ? AvatarDefolt : Preloader}
        />
      </div>
      <div className={p.name}> {props.profile.fullName} </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
