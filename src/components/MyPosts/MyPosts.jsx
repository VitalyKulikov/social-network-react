import React from 'react';
import my_post from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Return</button>
      </div>
      <div className={my_post.posts}>
      <Post message ='He, how are you?' like = '15' />
      <Post message ="It's my first post" like = '20' />
      </div>
    </div>
  )
}

export default MyPosts;