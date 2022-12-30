import React from 'react';
import Salonhistorycard from '../../componnents/Salonhistorycard';
import Salonwaitingcard from '../../componnents/Salonwaitingcard';

const Salonhome = () => {
  return (
    <div className="salonhome">
      <div className="salonhome-left">
        <h1>Waiting Request</h1>
        <div className="salonwaiting-cards">
          <Salonwaitingcard key={1} />
          <Salonwaitingcard key={2} />
          <Salonwaitingcard key={3} />
          <Salonwaitingcard key={4} />
          <Salonwaitingcard />
          <Salonwaitingcard />
          <Salonwaitingcard />
          <Salonwaitingcard />
          <Salonwaitingcard />
        </div>
      </div>
      <div className="salonhome-right">
        <h1>History</h1>
        <div className="salonhistory-cards">
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
          <Salonhistorycard />
        </div>
      </div>
    </div>
  );
};

export default Salonhome;
