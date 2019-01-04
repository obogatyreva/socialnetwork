import React from 'react';
import Profile from '../profilepage/profile/profile';
import Posts from './profile/notes/posts';

const ProfilePage = (props) => {
  let store = props.store;

  return (
    <div>
      <Profile store={store} />
      <Posts store={store} />
    </div>
  );
}

export default ProfilePage;
