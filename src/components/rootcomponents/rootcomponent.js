import React from 'react';
import Header from './header/header';
import SideBar from './sidebar/links';
import ProfilePage from '../profilepage/profilepage';
import DialogsPage from '../dialogpage/dialogspage';
import Photos from '../PhotosPage/PhotosPage';
import s from './rootcomponent.module.css';

const RootComponent = (props) => {
  let store = props.store;
  let image = store.getState().image;
  let path = props.path;

  return (
    <div>
      <Header />
      <div className={s.content_wrapper}>
        <div className={s.sidebar_block}>
          <SideBar />
        </div>
        <div>
        <img className={s.main_photo} src={image.src} alt = 'nature'/>
          {(() => {
            switch (path) {
              case 'profile':
                return <ProfilePage store={store}/>

              case 'messages':
                return <DialogsPage store={store}/>

              case 'photos':
                return <Photos store={store} imagesUrls={store.getState().components.photos} />
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


