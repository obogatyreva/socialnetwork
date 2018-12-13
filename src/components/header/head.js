import React, { Component } from 'react';
import logo from '../../ball.png';

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