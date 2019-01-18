import React from 'react';
import s from './Messages.module.css';

const Message = (props) => {
  let message = props.message;
  let onImageClick = (e) => {
    props.store.dispatch({type: 'TOGGLE-MESSAGE', message: message});
  }
  let spanElement = message.enable ? <span className={s.message_text}>{message.text}</span> : null;
  return (
    <div>
        <span>
            <img className={s.avka_message} src={message.avka} onClick={onImageClick} alt='avatar' />
        </span>
      {spanElement}
    </div>
  );
}

export default Message;