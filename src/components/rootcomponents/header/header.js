import React from 'react';
import s from './Header.module.css';
import logo from '../../images/ball.png';
import NavLink from 'react-router-dom/NavLink';

const Header = () => {
  return (
    <header>
      <div className={s.header_wrapper}>
        <img className={s.logo} src={logo} alt='logo' />
        <NavLink className={s.log_button} to='/login'>Log in</NavLink>
      </div>
    </header>
  );
}

export default Header;