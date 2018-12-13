import React, { Component } from 'react';

import Header from '../header/head';
import SideBar from '../sidebar/list';
import Profile from '../info/profile';

const ProfilePage = () => {
      return (
        <div>
          <Header/>
          <div className='content-wrapper'>
            <div className='sidebar-block'>
             <SideBar/>
            </div>
           <Profile/>
          </div>
        </div>
      );
    }



export default ProfilePage;
