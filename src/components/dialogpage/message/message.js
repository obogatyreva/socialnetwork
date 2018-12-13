import React, { Component } from 'react';


const Message = (props) => {
    let message = props.message;

    return (
        <div>
            <span><img className='avka' src={message.avka} alt='avatar' /></span>
            <span>{message.name}, {message.text}?</span>
        </div>
    );
}

export default Message;