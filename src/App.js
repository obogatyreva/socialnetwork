import React from 'react';
import { Route } from 'react-router';
import RootComponent from './components/rootcomponents/rootcomponent';
import Login from './components/authorization/login/login';
import './App.css';

// Load the config file.
import store from './config/store'

const App = (props) => {
  return (
    <div>
      <Route path = '/login'  exact render={() => <Login />} />
      <Route path='/profile' render={() => <RootComponent store={store} path={'profile'} />} />
      <Route path='/messages' render={() => <RootComponent store={store} path={'messages'} />} />


    </div>
  );
}

export default App;
