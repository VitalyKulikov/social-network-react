import React from 'react';
import my_post from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) =>  {

  let postElements = 
  props.post.map(post => <Post message={post.message} like={post.like} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    let like = (props) =>{

    }
    let dislike = (props) =>{

    }

  return (
    <div className={my_post.myPost}> 
      <h3>My post</h3> 
      <div> 
       <AddPostFormRedux onSubmit={onAddPost}/>
      </div>
      <div className={my_post.post}>
        {postElements}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
    <div>
          <Field component='textarea' name='newPostText'/>
    </div>
    <div>
        <button>Add post</button>
    </div>

    </form>
)
}

const AddPostFormRedux = reduxForm({form:'ProfileAddPostForm'})(AddNewPostForm)


export default MyPosts;