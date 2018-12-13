import React, { Component } from 'react';
import Header from './header/header';
import SideBar from './sidebar/links';




const RootComponent = (props) => {

    let image = props.config.data.image;

    return (
        <div>
            <Header />
            <div className='content-wrapper'>
                <div className='sidebar-block'>
                    <SideBar />
                </div>
            </div>
            <div className='main-photo'>
                <img src={image.src} alt='photo' />
            </div>
        </div>
    );
}



export default RootComponent;


