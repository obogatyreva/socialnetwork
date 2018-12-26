import React, { Component } from 'react';
import Messages from './message/messages';
import DialogsGroup from './dialogsGroup';

const DialogsPage = (props) => {
  let config = props.config;
  return (
    <div>
      <div className='dialogs-wrapper'>
        <DialogsGroup config={config} />
        <Messages config={config} />
      </div>
    </div>
  );
}

export default DialogsPage;