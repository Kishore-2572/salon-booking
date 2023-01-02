import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { store } from '../../store';
import logo from '../../assets/logo.png';
import Auth from '../../assets/undraw_my_password_re_ydq7.svg';

const Signup = () => {
  const { state, dispatch } = useContext(store);
  const { user } = state;

  const submitHandler = (e) => {
    e.preventdefault();
  };

  useEffect(() => {
    if (user) window.location.href = '/';
  }, [user]);
  return (
    <div className="signup">
      <div className="signup-form-container">
        <div className="signup-header">
          <h1>SIGN UP</h1>
          <p>
            Already a user?{' '}
            <Link to="/login" className="signup-to-login-link">
              Login here
            </Link>{' '}
          </p>
        </div>
        <div className="signup-form-div">
          <div className="signup-form-labels">
            <p className="signup-form-label">NAME</p>
            <p className="signup-form-label">MOBILE</p>
            <p className="signup-form-label">CITY</p>
            <p className="signup-form-label">PIN CODE</p>
            <p className="signup-form-label">PASSWORD</p>
            <p className="signup-form-label">CONFIRM-PASSWORD</p>
            <p className="signup-form-label">OTP <button className='otp-btn'>Send OTP</button></p>
          </div>
          <div className="signup-form-inputs">
            <form
              id="signup-form"
              className="signup-form"
              onSubmit={submitHandler}
            >
              <input
                className="signup-input"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                className="signup-input"
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                required
              />
              <input
                className="signup-input"
                type="text"
                name="city"
                placeholder="Enter your city"
                required
              />
              <input
                className="signup-input"
                type="number"
                name="pincoe"
                placeholder="Enter your PIN code"
                required
              />
              <input
                className="signup-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <input
                className="signup-input"
                type="password"
                name="cpassword"
                placeholder="Retype the password"
                required
              />
              <input
                className="signup-input"
                type="number"
                name="otp"
                placeholder="Enter the OTP"
                required
              />
            </form>
          </div>
        </div>
        <div className="signup-btn-div flex-center">
          <button form="signup-form" type="submit" className="signup-btn">
            <i class="fa-solid fa-arrow-right "></i>Signup
          </button>
        </div>
      </div>
      <div className="signup-img-container">
        <img className="signup-logo" src={logo} alt="" />
        <img className="signup-svg" src={Auth} alt="" />
      </div>
    </div>
  );
};

export default Signup;
