import React from 'react';
import Post from './post';
import s from './Post.module.css';

const Posts = (props) => {
  let state = props.store.getState();
  let posts = state.components.posts.map((item, index) => {
    return <Post note={item} key={index} />;
  });
  let textareaInput = React.createRef();

  let addMessageButtonClick = (e) => {
    let post = {
      message: textareaInput.current.value,
      avka: '',
      likes: '0'
    };

    props.store.dispatch({type: 'ADD-MESSAGE', post: post});
    textareaInput.current.value = '';
  }
  return (
    <div className={s.posts}>
      <h3 className={s.header_post}>My posts</h3>
      <p><textarea ref={textareaInput} className={s.post_area} name='text' rows='40' cols='20' placeholder='What is new...'></textarea></p>
      <button className={s.submit_button} onClick = {addMessageButtonClick}>
        Submit
      </button>
      <div className={s.post_message}>
        {posts}
      </div>
    </div >
  )
}

export default Posts;