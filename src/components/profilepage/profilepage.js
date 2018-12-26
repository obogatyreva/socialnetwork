import React, { Component } from 'react';
import Profile from '../profilepage/profile/profile';
import Posts from './profile/notes/posts';

const ProfilePage = (props) => {
  let config = props.config;

  return (
    <div>
      <Profile config={config} />
      <Posts config={config} />
    </div>
  );
}

export default ProfilePage;
