import React from 'react';
import DialogsItem from './DialogsItem';

const DialogsGroup =(props) => {
  let state = props.store.getState();
  let people = state.components.dialogs.map((item, index)=> {
    return <DialogsItem item={item} key={index} store={props.store}/>
  });
  return (
    <div>
      {people}
    </div>
  )
}

export default DialogsGroup;