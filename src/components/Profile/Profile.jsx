import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from '../MyPosts/MyPosts';
import p from './Profile.module.css';

const Profile = () => {
  return <div>
    <div className={p.main_img}>
    {<img src='https://adsmediabrokers.com/wp-content/uploads/2019/05/it-services.jpg'/>}
    </div>
  <ProfileInfo />
  <MyPosts />
</div>
}

export default Profile;