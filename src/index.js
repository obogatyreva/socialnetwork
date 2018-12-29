import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config/config.json';


let toggleMessage = (message) => {
    message.enable = !message.enable;
    renderAllPage();
}

config.toggleMessage = toggleMessage;

let renderAllPage = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App config={config} />
        </BrowserRouter>, document.getElementById('root'));
}

renderAllPage();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
