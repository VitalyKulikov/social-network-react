import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-page-reducer'; 
 
const MyPostsContainer = (props) =>  {

  let state = props.store.getState();

let addPost = () => {
  props.store.dispatch(addPostActionCreator());
} 

let onPostChange = (text) => {
  let action = updateNewPostTextActionCreator(text);
  props.store.dispatch(action); 
}
 
  return (<MyPosts updateNewPostText = {onPostChange} 
    addPost={addPost} 
    post={state.profilePage.postsData} 
    newPostText={state.profilePage.newPostText}/>)
} 
export default MyPostsContainer; 