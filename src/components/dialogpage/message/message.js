import React, { Component } from 'react';


const Message = (props) => {
    let message = props.message;

    return (
        <div>
            <span><img className='avka-message' src={message.avka} alt='avatar' /></span>
            <span className='message-text'>{message.name}, {message.text}?</span>
        </div>
    );
}

export default Message;