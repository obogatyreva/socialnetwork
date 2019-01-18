import React from 'react'
import s from './Login.module.css'

const Login = () => {
  return (
    <form method='post' name='login' action=''>
      <div className = {s.login_wrapper}>
        <div className= {s.loginBlock}>
          <input className ={`${s.loginBlock} ${s.input}`} name='email' type='text' size='30' placeholder='Email' />
          <input className={`${s.loginBlock} ${s.input}`}name='pass' type='password' size='30' placeholder='Password' />
        </div>
        <div className={s.loginButton}>
          <div>
            <input type = 'checkbox' /><label>keep me logged in</label>
          </div>
          <button className={`${s.loginButton} ${s.logButton}`}>Log in</button>
        </div>
      </div>
    </form>
  );
}

export default Login;