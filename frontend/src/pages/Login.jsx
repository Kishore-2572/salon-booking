import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { store } from '../store';
import Auth from '../assets/undraw_secure_login_pdn4.svg';
import logo from '../assets/logo.png';

const Login = () => {
  const { state, dispatch } = useContext(store);
  const { user } = state;

  const submitHandler = (e) => {
    e.preventdefault();
  };

  useEffect(() => {
    if (user) window.location.href = '/';
  }, [user]);

  return (
    <div className="login">
      <div className="form-container">
        <div className="login-outer">
          <div className="login-inner">
            <h1>LOGIN</h1>
            <p className="login-para">SignIn to your Account</p>
            <form onSubmit={submitHandler} className="login-form">
              <label className="login-label">
                Your Email
                <input
                  className="login-input"
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                />
              </label>
              <label className="login-label">
                {' '}
                Password
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </label>
              <div className="btn-div">
                <button type="submit" className="login-btn">
                  <i class="fa-solid fa-arrow-right "></i>Login
                </button>
              </div>
            </form>
            <p>
              Forget password?{' '}
              <a className="login-fp" href="">
                click here
              </a>
            </p>
            <div className="login-ca">
              {' '}
              <Link to="/signup"> Create an Account</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className="login-logo" src={logo} alt="" />
        <img className="login-svg" src={Auth} alt="logo" />
      </div>
    </div>
  );
};

export default Login;
