import React, { Component } from 'react';
import Message from './message';

const Messages = (props) => {

    let dialogs = props.config.data.components.dialogs.map((message) => {
        return <Message message={message} toggleMessage={props.toggleMessage} />;
    });



    return (
        <div>
            {dialogs}
        </div>
    );
}


export default Messages;