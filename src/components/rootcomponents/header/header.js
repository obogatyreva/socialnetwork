import React from 'react';
import logo from '../../images/ball.png';
import NavLink from 'react-router-dom/NavLink';

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <img className='logo' src={logo} alt='logo' />
        <NavLink className='log-button' to='/login'>Log in</NavLink> 
      </div>
    </header>
  );
}

export default Header;