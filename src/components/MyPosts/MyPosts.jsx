import React from 'react';
import my_post from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import {
  maxLenghtCreator,
  required,
} from '../../helpers/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

class MyPosts extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     nextProps !== this.props || nextState !== this.setState
    // }

    render() {
        let postElements = this.props.post.map((post) => (
            <Post message={post.message} like={post.like} key={this.props.id}/>
        ));

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        };

        return (
            <div className={my_post.myPost}>
                <h3>My post</h3>
                <div>
                    <AddPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div className={my_post.post}>{postElements}</div>
            </div>
        );
    }
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="my_post.formWrapper">
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLenghtCreator(30)]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: 'ProfileAddPostForm' })(
  AddNewPostForm,
);

export default MyPosts;
