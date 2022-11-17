import React from 'react';
import my_post from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {



  let postElements = props.postsData.map(post => <Post message={post.message} likesCount={post.like} />)

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
      <div className={my_post.post}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;