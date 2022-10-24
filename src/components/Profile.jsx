import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
  return <div className={p.content}>
    <img src='https://adsmediabrokers.com/wp-content/uploads/2019/05/it-services.jpg'/>
  <div className = {p.avatar}>
    <img src='https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png'/>
  </div>
  <div className = {p.item}>
    Discription
  </div>
  <div className = {p.item}>
    New post
  </div>
  <div className = {p.post}>
    Post 1
  </div>
  <div className = {p.post}>
    Post 2
  </div>
</div>
}

export default Profile;