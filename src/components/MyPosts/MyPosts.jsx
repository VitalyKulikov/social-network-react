import React from 'react';
import my_post from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsData = [
  {id: 1, message: `How are you?`, like: 15,},
  {id: 2, message: `It's my first post!`, like: 20,}
]

let postElements = postsData.map(post => <Post message={post.message} likesCount={post.like}/>)

  return (
    <div className={my_post.myPost}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Return</button>
        </div>
      </div>
      <div className={my_post.posts}>
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts;