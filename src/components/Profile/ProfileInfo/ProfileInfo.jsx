import React from 'react';
import p from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
  <div>
  <div className = {p.avatar}>
    <img src='https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png'/>
  </div>
  <div className = {`${p.item} ${p.heading}`}>
    Discription
  </div>
</div>
  )
}

export default ProfileInfo;