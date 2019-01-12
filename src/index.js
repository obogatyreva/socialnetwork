import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './config/store';

store.subscribe =(() => {
  renderAllPage();
});

let renderAllPage = () => {
  ReactDOM.render(
    <BrowserRouter>
      <div>
        <App store={store}/>
      </div>
    </BrowserRouter>, document.getElementById('root'));
}
renderAllPage();

serviceWorker.unregister();
