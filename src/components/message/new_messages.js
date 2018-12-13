import React, { Component } from 'react';
// import Message from './message';

let messages = [
    {
         text: 'hello',  name: 'Andrey'
    },

    {
        text: 'hello',  name: 'Sveta'
    },

    {
       text: 'hello',  name: 'Sasha'
    },

    {
         text: 'hello',  name: 'Kevin'
    }

]

const Dialog = (props) => {

    let messagesComponents = messages.map ((elem) => {
        return <Messages  data = {elem} />

    });

    return (
        {messagesComponents}
    )
    
}

export default Dialog;