import React from 'react';
import p from './ProfileInfo.module.css';
import avatarPhoto from '../../../assets/image/avatarPhoto.png'

const ProfileInfo = (props) => {

  return (
    <div className={p.profileInfo}>
      <div className={p.avatar}>
        <img src={avatarPhoto} />
      </div>
      <div className={`${p.item} ${p.heading}`}>
        Vitaliy Kulikov
      </div>
    </div>
  )
}

export default ProfileInfo;