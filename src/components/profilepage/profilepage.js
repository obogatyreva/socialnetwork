import React, { Component } from 'react';



import RootComponent from '../rootcomponents/rootcomponent';
import Profile from '../profilepage/profile/profile';

const ProfilePage = (props) => {
      let config = props.config;

      return (
        <div>
          <RootComponent config={config}/>
          <Profile config={config}/>
        </div>
      );
    }



export default ProfilePage;
