import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={post.item}>
        <img src="https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262265.jpg" />
        <div>{props.message}</div>
        <div>
          <span>Like {props.like}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
