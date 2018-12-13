import React, { Component } from 'react';
import RootComponent from '../rootcomponents/rootcomponent';
import Messages from './message/messages';



const DialogsPage = (props) => {
  let config = props.config;
  return (
    <div>
      <RootComponent config={config} />
      <Messages config={config} />
    </div>
  );

}




export default DialogsPage;