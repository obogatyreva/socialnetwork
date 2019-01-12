import React from 'react';
import Message from './message';

const Messages = (props) => {
  let state = props.store.getState();
  let dialogs = state.components.dialogs.map((message, index) => {
    return <Message message={message} key ={index} store={props.store}/>;
  });

  return (
    <div>
      {dialogs}
    </div>
  );
}

export default Messages;