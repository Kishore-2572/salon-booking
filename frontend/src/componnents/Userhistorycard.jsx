import React from 'react';

const Userhistorycard = () => {
  return (
    <div className="uhcard">
      <div className="uhcard-header">
        <h3>Hello salon</h3>
        <p>State of process : Accepted</p>
      </div>
      <div className="uhcard-dates">
        <div className="uhcard-requested-dt">
          <h5>Requested Time</h5>
          <p>25/07/2022</p>
          <p>05:10 PM</p>
        </div>
        <div className="uhcard-accepted-dt">
          <h5>Accepted Time</h5>
          <p>25/07/2022</p>
          <p>05:10 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Userhistorycard;
