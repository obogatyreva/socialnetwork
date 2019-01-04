import React from 'react';

const Message = (props) => {
    let message = props.message;
    let toggleMessage = props.toggleMessage;
    let onImageClick = (e) => {
        toggleMessage(message);
    }
    let spanElement = message.enable ? <span className='message-text'>{message.text}</span> : null;
    return (
      <div>
        <span>
            <img className='avka-message' src={message.avka} onClick={onImageClick} alt='avatar' />
        </span>
          {spanElement}
      </div>
    );
}

export default Message;