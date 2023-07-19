import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import AvatarDefolt from '../../../assets/image/avatardefolt.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>;
  }
  return (
    <div className={p.ProfileInfo}>
      <div className={p.avatar}>
        <img
          alt=""
          src={!profile.photos.small ? AvatarDefolt : Preloader}
        />
      </div>
      <div className={p.name}> {profile.fullName} </div>
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
