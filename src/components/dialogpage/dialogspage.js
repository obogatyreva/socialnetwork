import React from 'react';
import s from './DialogsPage.module.css';
import Messages from './message/messages';
import DialogsGroup from './dialogsGroup';

const DialogsPage = (props) => {
  let store = props.store;
  return (
    <div>
      <div className={s.dialogs_wrapper}>
        <DialogsGroup store={store} />
        <Messages store={store} />
      </div>
    </div>
  );
}

export default DialogsPage;