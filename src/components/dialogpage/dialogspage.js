import React from 'react';
import Messages from './message/messages';
import DialogsGroup from './dialogsGroup';

const DialogsPage = (props) => {
  let store = props.store;
  return (
    <div>
      <div className='dialogs-wrapper'>
        <DialogsGroup store={store} />
        <Messages store={store} />
      </div>
    </div>
  );
}

export default DialogsPage;