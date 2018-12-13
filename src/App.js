import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import RootComponent from './components/rootcomponents/rootcomponent';
import ProfilePage from './components/profilepage/profilepage';
import DialogsPage from './components/dialogpage/dialogspage';

import './App.css';

// Load the config file.
import config from './config/config.json';


const App = () => {
  return (
    <BrowserRouter>
      <div>

        <Route path='/Profile' render={() => <ProfilePage config={config} />} />
        <Route path='/Messages' render={() => <DialogsPage config={config} />} />

      </div>
    </BrowserRouter>

  );
}


export default App;
