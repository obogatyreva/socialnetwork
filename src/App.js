import React from 'react';
import { Route } from 'react-router';
import RootComponent from './components/rootcomponents/rootcomponent';
import Login from './components/authorization/login/login';
import './App.css';

const App = (props) => {
  let store = props.store;
  return (
    <React.Fragment>
      <Route path = '/login'  exact render={() => <Login />} />
      <Route path='/profile' render={() => <RootComponent store={store} path={'profile'} />} />
      <Route path='/messages' render={() => <RootComponent store={store} path={'messages'} />} />
      <Route path='/photos' render={() => <RootComponent store={store} path={'photos'} /> } />
    </React.Fragment>
  );
}

export default App;
