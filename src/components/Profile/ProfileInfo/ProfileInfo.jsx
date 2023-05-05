import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profile) { return < Preloader /> }

  return (
    <div className={p.ProfileInfo}>
      <div className={p.avatar}>
       <img src={props.profile.photos.small}/>
      </div>
        <div className={p.name}> {props.profile.fullName} </div>
        <div className={p.about}> {props.profile.aboutMe} </div>
    </div>
  )
}

export default ProfileInfo;