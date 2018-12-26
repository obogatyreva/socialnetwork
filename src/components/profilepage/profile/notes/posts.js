import React, { Component } from 'react';
import Post from './post';

const Posts = (props) => {
    let posts = props.config.data.components.posts.map((elem) => {
        return <Post note={elem} />;
    });
    return (
        <div className='posts'>
            <h3>My posts</h3>
            <p><textarea className='post-field' name='text' rows='40' cols='20' placeholder='What is new...'></textarea></p>
            <div>
                <button className='submit-btn'>Submit</button>
            </div>
            {posts}
        </div>
    )
}

export default Posts;