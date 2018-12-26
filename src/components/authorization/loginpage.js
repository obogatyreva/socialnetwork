import React, { Component } from 'react';
import Login from './login/login';
import NavLink from 'react-router-dom/NavLink';



const LoginPage = () => {
      return (
        <div>
          <NavLink to = '/'>
          </NavLink>
          <Login />
        </div>
      );
    }
    
    
    export default LoginPage;