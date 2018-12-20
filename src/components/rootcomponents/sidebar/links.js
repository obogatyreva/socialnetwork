import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';


const SideBar = () => {
  return (
    <div className='list-item'>
      <ul>
        <li>
          <NavLink to ='/profile'>
          Profile
          </NavLink>
      </li>
        <li>
          <NavLink to ='/messages'>
          Messages
          </NavLink>
      </li>
        <li>
          <NavLink to ='/news'>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to ='/music'>
          Music
          </NavLink>
        </li>
        <li>
          <NavLink to ='/settings'>
          Settings
          </NavLink>
          </li>
      </ul>
    </div>

  );
}

export default SideBar;