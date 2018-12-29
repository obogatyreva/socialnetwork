import React, { Component } from 'react';
import { Route } from 'react-router';
import RootComponent from './components/rootcomponents/rootcomponent';
import Login from './components/authorization/login/login';
import './App.css';

// Load the config file.
import config from './config/config.json';


const App = () => {
  return (
    <div>
      <Route path = '/login'  exact render={() => <Login />} />
      <Route path='/profile' render={() => <RootComponent config={[config, 'profile']} />} />
      <Route path='/messages' render={() => <RootComponent config={[config, 'messages']} />} />
      {/* <Route path='/login' render={() => <RootComponent config={[config, 'login']} />} /> */}
      {/* <Route path='/profile' render={() => <RootComponent config={[config, 'profile']} />} /> */}
      {/* <Route path='/profile' render={() => <ProfilePage config={[config, 'aaaa']} />} /> */}
      {/* <Route path='/messages' render={() => <DialogsPage config={config} />} /> */}

    </div>


  );
}

export default App;
