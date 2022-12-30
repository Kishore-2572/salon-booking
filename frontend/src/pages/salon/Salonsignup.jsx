import React from 'react';
import ss from '../../assets/ss.svg'
import logo from '../../assets/logo.png'

const Salonsignup = () => {
  const submitHandler = (e) => {
    e.preventdefault();
  };

  return (
    <div className="salon-signup">
      <h1>Salon Registration</h1>
      <div className="ss">
        <div className="ss-left">
          <div className="ss-salon-details">
            <h2>Enter Your Salon Details Below</h2>

            <div className="ss-form-div">
              <div className="ss-form-labels">
                <p className="ss-form-label">SHOP NAME</p>
                <p className="ss-form-label">EMAIL</p>
                <p className="ss-form-label">MOBILE</p>
                <p className="ss-form-label">ADDRESS</p>
                <p className="ss-form-label">CITY</p>
                <p className="ss-form-label">STATE</p>
                <p className="ss-form-label">PIN CODE</p>
                <p className="ss-form-label">PASSWORD</p>
                <p className="ss-form-label">CONFIRM PASSWORD</p>
                <p className="ss-form-label">SERVICES PROVIDED</p>
              </div>
              <div className="ss-form-inputs">
                <form id="ss-form" className="ss-form" onSubmit={submitHandler}>
                  <input
                    className="ss-input"
                    type="text"
                    name="name"
                    placeholder="Enter your shop name"
                  />
                  <input
                    className="ss-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="ss-input"
                    type="tel"
                    name="mobile"
                    pattern="[0-9]{10}"
                    placeholder="Enter your mobile number"
                  />
                  <input
                    className="ss-input"
                    type="text"
                    name="address"
                    placeholder="Enter your address line 1"
                  />
                  <input
                    className="ss-input"
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                  />
                  <input
                    className="ss-input"
                    type="text"
                    name="state"
                    placeholder="Enter your State"
                  />
                  <input
                    className="ss-input"
                    type="number"
                    name="pincoe"
                    placeholder="Enter your PIN code"
                  />
                  <input
                    className="ss-input"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <input
                    className="ss-input"
                    type="password"
                    name="cpassword"
                    placeholder="Retype the password"
                  />
                  <input
                    className="ss-input"
                    type="text"
                    name="state"
                    placeholder="Comma separated values (i.e Shaving, Facial,)"
                  />
                </form>
              </div>
            </div>
            <div className="ss-btn-div">
              <button form="ss-form" type="submit" className="ss-btn">
                <i class="fa-solid fa-arrow-right "></i>
                <p>Signup</p>
              </button>
            </div>
          </div>
        </div>
        <div className="ss-right">
            <img className='ss-logo' src={logo} alt="" />
            <img className='ss-img' src={ss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Salonsignup;
