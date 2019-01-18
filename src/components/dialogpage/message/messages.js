import React from 'react';
import Message from './message';

const Messages = (props) => {
  let state = props.store.getState();
  let dialogs = state.components.dialogs.map((message) => {
    return <Message message={message} key ={message.id} store={props.store}/>;
  });

  return (
    <div>
      {dialogs}
    </div>
  );
}

export default Messages;