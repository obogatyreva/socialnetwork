import React, { Component } from 'react';

const DialogsGroup = (props) => {
  let groups = props.config.data.components.dialogs.map((item) =>{
    return <li>{item.name}</li>;
  });

  return (
    <div className = 'group-list'>
      <ul>
        {groups}
      </ul>
    </div>
  )
}

export default DialogsGroup;