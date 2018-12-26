import React, { Component } from 'react';



const Login = () => {
  return (
    <form method='post' name='login' action=''>
      <div className='login-wrapper'>
        <div className='login-block'>
          <input name='email' type='text' size='30' placeholder='Email' />
          <input name='pass' type='password' size='30' placeholder='Password' />
        </div>
        <div className = 'login-btn'>
        <div>
          <label for = 'item'>keep me logged in</label>
          <input id = 'item' type = 'checkbox' checked />
        </div>
        <button className='log-btn'>Log in</button>
        </div>
      </div>
    </form>
  );

}

export default Login;