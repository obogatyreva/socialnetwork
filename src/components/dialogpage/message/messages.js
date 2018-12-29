import React, { Component } from 'react';
import Message from './message';

const Messages = (props) => {

    let dialogs = props.config.data.components.dialogs.map((message, id) => {
        // debugger;
        return <Message message={message} key ={id} toggleMessage={props.config.toggleMessage} />;
    });

    return (
        <div>
            {dialogs}
        </div>
    );
}

export default Messages;