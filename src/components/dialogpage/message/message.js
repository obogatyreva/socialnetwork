import React from 'react';

const Message = (props) => {
  let message = props.message;
  let onImageClick = (e) => {
    // debugger;
    props.store.dispatch({type: 'TOGGLE-MESSAGE', message: message});
    // console.log(message);
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