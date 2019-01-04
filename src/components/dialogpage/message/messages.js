import React from 'react';
import Message from './message';

const Messages = (props) => {
  let dialogs = props.store.state.components.dialogs.map((message, index) => {
    return <Message message={message} key ={index} toggleMessage={props.store.toggleMessage} />;
  });

  return (
    <div>
      {dialogs}
    </div>
  );
}

export default Messages;