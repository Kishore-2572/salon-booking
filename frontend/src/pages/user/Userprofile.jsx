import React, { useEffect, useParams } from 'react';
import Logo from '../../assets/logo-black.png';
import Userhistorycard from '../../componnents/Userhistorycard';

const Userprofile = () => {
  const submitHandler = (e) => {
    e.preventdefault();
  };
  return (
    <div className="userprofile">
      <div className="userprofile-left">
        <div className="profile-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJblmG352FTrVDWaSGC-e67GuM0_WnY5WgEQ&usqp=CAU"
            alt=""
          />
          <div className="profile-img-blur">
            <p>Edit </p>
            <i class="fa-solid fa-pen"></i>
          </div>
        </div>
        <div className="userprofile-user-details">
          <div className="userprofile-inputs-left">
            <h3>NAME</h3>
            <h3>Mobile</h3>
            <h3>CITY</h3>
            <h3>PINCODE</h3>
          </div>
          <div className="userprofile-inputs-right">
            <div
              className="userprofile-text-input"
              contenteditable="true"
              onInput={(e) => {
                console.log(e.target.textContent);
              }}
            >
              Kishore
            </div>
            <div
              className="userprofile-text-input"
              contenteditable="true"
              onInput={(e) => {
                console.log(e.target.textContent);
              }}
            >
              1234567890
            </div>
            <div
              className="userprofile-text-input"
              contenteditable="true"
              onInput={(e) => {
                console.log(e.target.textContent);
              }}
            >
              Erode
            </div>
            <div
              className="userprofile-text-input"
              contenteditable="true"
              onInput={(e) => {
                console.log(e.target.textContent);
              }}
            >
              638102
            </div>
          </div>
        </div>
        <button className='userdetails-save-btn'> <img src={Logo} /> SAVE</button>
      </div>
      <div className="userprofile-right">
        <h1>History</h1>
        <div className="userhistory-cards">
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
          <Userhistorycard/>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
