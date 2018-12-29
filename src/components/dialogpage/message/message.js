import React, { Component } from 'react';


const Message = (props) => {
    let message = props.message;
    let toggleMessage = props.toggleMessage;

    let onAvkaClick = (e) => {
        toggleMessage(message);
    }

    let spanElement = message.enable ? <span className='message-text'>{message.id} - {message.text}</span> : null;
    return (
        <div>
            <span>
                <img className='avka-message' src={message.avka} onClick={onAvkaClick} alt='avatar' />
            </span>
            {spanElement}
        </div>
    );
}

export default Message;