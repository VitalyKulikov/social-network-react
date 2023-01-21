import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from '../MyPosts/MyPosts';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
        postsData={props.profilePage.postsData} 
        newPostText={props.profilePage.newPostText} 
        dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;