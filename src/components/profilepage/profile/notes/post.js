import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    let note = props.note;
    return (
        <div>
            <img className={s.post_image} src={note.avka} alt='hi' />
            {note.message}
            <div>Like</div>
            {note.likes}
        </div>
    )
}

export default Post;