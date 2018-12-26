import React, { Component } from 'react';

const Post = (props) => {
    let note = props.note;
    return (
        <div>
            <img className='post-image' src={note.avka} alt='hi' />
            {note.message}
            <div>Like</div>
            {note.likes}
        </div>
    )
}

export default Post;