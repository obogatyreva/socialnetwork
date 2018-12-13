import React, { Component } from 'react';
import Header from '../header/head';
import SideBar from '../sidebar/list';
import Dialogs from '../people/talk';

const DialogsPage = () => {
  return (
    <div>
      <Header />
      <div className='content-wrapper'>
        <div className='sidebar-block'>
        <SideBar />
        </div>
        <Dialogs />
      </div>
    </div>
  );

}




export default DialogsPage;