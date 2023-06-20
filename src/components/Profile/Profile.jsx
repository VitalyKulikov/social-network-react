import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "../MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
         debugger;
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
