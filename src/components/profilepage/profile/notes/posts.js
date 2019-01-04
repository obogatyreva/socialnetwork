import React from 'react';
import Post from './post';

const Posts = (props) => {
  let posts = props.store.state.components.posts.map((elem, index) => {
    return <Post note={elem} key={index} />;
  });

  let textareaInput = React.createRef();

  let addMessageButtonClick = (e) => {
    let post = {
      message: textareaInput.current.value,
      avka: '',
      likes: '0'
    };
    props.store.addMessage(post);
    textareaInput.current.value = '';
  }

  return (
    <div className='posts'>
      <h3 className='header-post'>My posts</h3>
      <p><textarea ref={textareaInput} className='post-area' name='text' rows='40' cols='20' placeholder='What is new...'></textarea></p>
      <button className='submit-button' onClick = {addMessageButtonClick}>
        Submit
      </button>
      <div className='post-message'>
        {posts}
      </div>
    </div >
  )
}

export default Posts;