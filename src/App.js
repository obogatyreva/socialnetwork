import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';


import ProfilePage from './components/profile/profilepage';
// import DialogsPage from './components/dialogs/dialogspage';
import LoginPage from './components/autorization/loginpage';


import './App.css';


import DialogsPage from './components/dialogs/dialogspage';
import Setting from './components/Settingpage/setting';
// import Messages from './components/message/new_messages';
import NewsPage from './components/News/news';




const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Route path ='/LoginPage' exact render = {() => <LoginPage /> } />
      <Route path ='/Profile' render = {() => <ProfilePage /> } />
      <Route path ='/News' render = {() => <NewsPage /> } />
      <Route path ='/Settings' render = {() => <ProfilePage /> } />
      <Route path ='/Settings' render = {() => <Setting /> } />


      {/* <Route path ='/DialogsPage' render = {() => <DialogsPage/> } /> */}
      {/* <Route path ='/messages' render = {() => <Messages />} /> */}
    </div>
     </BrowserRouter>
     
  );
}


export default App;
