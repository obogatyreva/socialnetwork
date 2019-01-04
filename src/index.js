import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './config/store';

let toggleMessage = (message) => {
  message.enable = !message.enable;
  renderAllPage();
}

store.toggleMessage = toggleMessage;

let addMessage = (post) => {
  if (post.avka === '') {
    post.avka = 'https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png';
  }
  // Add new post to existence.
  store.state.components.posts = [post, ...store.state.components.posts];
  renderAllPage();
}
store.addMessage = addMessage;

let renderAllPage = () => {
  ReactDOM.render(
    <BrowserRouter>
      <div>
        <App store ={store}/>
      </div>
    </BrowserRouter>, document.getElementById('root'));
}

renderAllPage();

serviceWorker.unregister();
