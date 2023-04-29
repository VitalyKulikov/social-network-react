import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-page-reducer'; 
import { connect } from 'react-redux';
 

const mapStateToProps = (state) => {
  return {
    post: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer; 