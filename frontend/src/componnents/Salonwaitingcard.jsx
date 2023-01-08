import React, { useEffect, useState } from 'react';

const Salonwaitingcard = () => {
  const [suggestTime, setSuggestTime] = useState('3');

  return (
    <div className="salonwaitingcard">
      <div className="swcard-left">
        <div className="swcard-header">
          <h3>Kishore </h3>
          <a href="tel:+6379306614" className="historycard-call">
            <i className="fa-solid fa-phone"></i>
            6379306614
          </a>
        </div>
        <div className="swcard-content">
          <div>
            <h5>Requested Time</h5>
            <p>25/07/2022</p>
            <p>05:10 PM</p>
          </div>
          <div className="reject-msg">
            <label for="reason">Choose a option to reject </label>
            <select
              name="reason"
              id="reason"
              onChange={(e) => setSuggestTime(e.target.value)}
            >
              <option value="0">Salon Closed</option>
              <option value="1">Request earlier</option>
              <option value="2">Request later</option>
              <option value="3" selected>
                Suggest time
              </option>
            </select>
            {suggestTime === '3' && (
              <input
                className="swcard-input"
                type="time"
                name="suggestedDate"
              />
            )}
          </div>
        </div>
      </div>
      <div className="swcard-right">
        <button className="swcard-btn primary-btn" >
          <i className="fa-solid fa-circle-check"></i> Accept
        </button>
        <button className="swcard-btn secondary-btn" >
          <i className="fa-solid fa-circle-xmark"></i> Reject
        </button>
      </div>
    </div>
  );
};

export default Salonwaitingcard;
