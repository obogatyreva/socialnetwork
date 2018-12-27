import React, { Component } from 'react';
import Post from './post';

const Posts = (props) => {
    let posts = props.config.data.components.posts.map((elem) => {
        return <Post note={elem} />;
    });
    return (
        <div className='posts'>
            <h3 className='header-post'>My posts</h3>
            <p><textarea className='post-area' name='text' rows='40' cols='20' placeholder='What is new...'></textarea></p>
            <button className='submit-button'>Submit</button>
            <div className='post-message'>
                {posts}
            </div>
        </div >
    )
}

export default Posts;