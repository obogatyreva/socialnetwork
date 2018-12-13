import React, { Component } from 'react';
import Header from '../header/head';
import SideBar from '../sidebar/list';


const NewsPage = () => {
    return (
        <div>
            <Header />
      <div className='content-wrapper'>
        <div className='sidebar-block'>
        <SideBar />
        </div>
       </div>
            <a href='#'>news</a>
        </div>
    );
}


export default NewsPage;
