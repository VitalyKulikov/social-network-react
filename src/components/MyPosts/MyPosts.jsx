import React from 'react';
import my_post from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postElements = 
  props.postsData.map(post => <Post message={post.message} like={post.like} />)

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch({type: 'ADD-POST'});
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
}

  return (
    <div className={my_post.myPost}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange = { onPostChange } ref= {newPostElement}
          value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={my_post.post}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;