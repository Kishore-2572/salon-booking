import React from 'react';

const Salonhistorycard = ({data}) => {

  // const [customer,setCustomer]=


  const accepted = true;
  return (
    <div
      className="salonhistory-card"
      style={{ border: accepted ? '1px solid white' : '1px solid red' }}
    >
      <div className="uhcard-header">
        <h3>Kishore </h3>
        <a href="tel:+6379306614" className="historycard-call">
        <i className="fa-solid fa-phone"></i>
          6379306614
        </a>
        {accepted ? (
          <p>
            {' '}
            <i className="fa-solid fa-circle-check"></i> Accepted
          </p>
        ) : (
          <p>
            {' '}
            <i className="fa-solid fa-ban"></i>Declined
          </p>
        )}
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

export default Salonhistorycard;
