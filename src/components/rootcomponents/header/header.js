import React, { Component } from 'react';
import logo from '../../images/ball.png';

const Header = () => {
    return (
      <header>
        <div className='header-wrapper'>
          <img className='logo' src={logo} alt='logo' />
        </div>
      </header>
  
    );
  }


export default Header;