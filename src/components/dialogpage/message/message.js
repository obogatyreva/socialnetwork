import React, { Component } from 'react';


const Message = (props) => {
    let message = props.message;
    let toggleMessage = props.toggleMessage;


    let onAvkaClick = (e) => {
        toggleMessage(message);
    }


    let spanElement = null;
    if (message.enable) {
        spanElement = <span className='message-text'>
            {message.text}?
        </span>;
    }
    return (
        <div>
            <span><img className='avka-message' src={message.avka} onClick={onAvkaClick} alt='avatar' /></span>
            {spanElement}
        </div>
    );
}

export default Message;