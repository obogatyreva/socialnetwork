import React, { Component } from 'react';



const Login = () => {
    return (
      <form action =''>
  
        <div className='login'>
          <span><h4>Login</h4></span>
          <span><h4>Registration</h4></span>
          <p>Email</p>
          <input type ='email'  placeholder='Email' />
          <p>Password</p>
          <input type ='password' name ='pass' placeholder='Password' />
          <input type ='checkbox' name ='memory' />
          <span><h4>Login</h4></span>
  
        </div>
      </form>
    );
  }
  

  export default Login;