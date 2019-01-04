import React from 'react';
import Header from './header/header';
import SideBar from './sidebar/links';
import ProfilePage from '../profilepage/profilepage';
import DialogsPage from '../dialogpage/dialogspage';


const RootComponent = (props) => {
  let store = props.store;
  let image = store.state.image;
  let path = props.path;

  return (
    <div>
      <Header />
      <div className='content-wrapper'>
        <div className='sidebar-block'>
          <SideBar />
        </div>
        <div className='content-block'>
          <img className='main-photo' src={image.src} alt = 'nature'/>
          {(() => {
            switch (path) {
              case 'profile':
                return <ProfilePage store={store} />

              case 'messages':
                return <DialogsPage store={store} />

              default:
                // do nothing;
            }
          })()}
        </div>
      </div>
    </div>
  );
}



export default RootComponent;


