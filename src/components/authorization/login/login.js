import React from 'react';

const Login = () => {
  return (
    <form method='post' name='login' action=''>
      <div className='login-wrapper'>
        <div className='login-block'>
          <input name='email' type='text' size='30' placeholder='Email' />
          <input name='pass' type='password' size='30' placeholder='Password' />
        </div>
        <div className='login-button'>
          <div>
            <input type = 'checkbox' /><label>keep me logged in</label>
          </div>
          <button className='log-button'>Log in</button>
        </div>
      </div>
    </form>
  );
}

export default Login;