import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from '../MyPosts/MyPosts';
import p from './Profile.module.css';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} />
    </div>
  )
}

export default Profile;