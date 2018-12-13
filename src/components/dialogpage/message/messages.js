import React, { Component } from 'react';
import Message from './message';

const Messages = (props) => {
    let dialogs = props.config.data.components.dialogs.map((el) => {
        return <Message message={el} />;
    });

    return (
        <div>
            {dialogs}
        </div>
    );
}


export default Messages;