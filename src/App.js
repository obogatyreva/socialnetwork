import React, { Component } from 'react';
import { Route } from 'react-router';
import RootComponent from './components/rootcomponents/rootcomponent';
import ProfilePage from './components/profilepage/profilepage';
import DialogsPage from './components/dialogpage/dialogspage';
import {NavLink} from 'react-router-dom';
import './App.css';

// Load the config file.
import config from './config/config.json';

const App = () => {
  return (
    <div>

      <Route path='/profile' render={() => <ProfilePage config={config} />} />
      <Route path='/messages' render={() => <DialogsPage config={config} />} />

    </div>


  );
}

export default App;
