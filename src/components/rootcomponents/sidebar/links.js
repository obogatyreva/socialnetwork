import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';


const SideBar = () => {
  return (
    <div className='list-item'>
      <ul>
        <li>
          <NavLink to ='/Profile'>
          Profile
          </NavLink>
      </li>
        <li>
          <NavLink to ='/Messages'>
          Messages
          </NavLink>
      </li>
        <li>
          <NavLink to ='/News'>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to ='/Music'>
          Music
          </NavLink>
        </li>
        <li>
          <NavLink to ='/Settings'>
          Settings
          </NavLink>
          </li>
      </ul>
    </div>

  );
}

export default SideBar;