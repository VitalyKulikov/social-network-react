import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import p from './Profile.module.css';

const Profile = () => {
  return <div>
    <div className={p.main_img}>
    <img src='https://adsmediabrokers.com/wp-content/uploads/2019/05/it-services.jpg'/>
    </div>
  <div className = {p.avatar}>
    <img src='https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png'/>
  </div>
  <div className = {`${p.item} ${p.heading}`}>
    Discription
  </div>
  <MyPosts />
</div>
}

export default Profile;