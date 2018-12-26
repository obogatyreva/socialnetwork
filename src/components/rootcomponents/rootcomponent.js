import React, { Component } from 'react';
import Header from './header/header';
import SideBar from './sidebar/links';
import ProfilePage from '../profilepage/profilepage';
import DialogsPage from '../dialogpage/dialogspage';

const RootComponent = (props) => {

    let config = props.config[0];
    let image = config.data.image;
    let path = props.config[1];

    return (
        <div>
            <Header />
            <div className='content-wrapper'>
                <div className='sidebar-block'>
                    <SideBar />
                </div>
                <div className='content-block'>
                    <img className='main-photo' src={image.src} alt='photo' />
                    {(() => {
                        switch (path) {
                            case 'profile':
                                return <ProfilePage config={config} />

                            case 'messages':
                                return <DialogsPage config={config} />
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}



export default RootComponent;


