import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import s from './Sidebar.module.css';

const SideBar = () => {
  return (
    /*<div className={`${s.div}${s.sidebar_block} ${s.list_item} ${s.ul}`}>*/
    <div className = {s.list_item}>
      <nav>
        <ul>
          <li>
            <NavLink to='/profile'>
              Profile
          </NavLink>
          </li>
          <li>
            <NavLink to='/messages'>
              Messages
          </NavLink>
          </li>
          <li>
            <NavLink to='/news'>
              News
          </NavLink>
          </li>
          <li>
            <NavLink to='/photos'>
              Photos
          </NavLink>
          </li>
          <li>
            <NavLink to='/settings'>
              Settings
          </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;