import React from 'react';
import Saloncard from '../../componnents/Saloncard';

const Userhome = () => {
  return (
    <div className="userhome">
      <div className="userhome-header">
        <h1 className="userhome-heading">Featured Salons</h1>

        <div className="userhome-input-div">
          <i className="fa-solid fa-magnifying-glass-location search-icon"></i>
          <input
            className="userhome-input"
            type="text"
            placeholder="Search by Salon name or place"
          />
        </div>
      </div>
      <div className="salon-cards">
        <Saloncard />
        <Saloncard />
        <Saloncard />
        <Saloncard />
        <Saloncard />
        <Saloncard />
        <Saloncard />
        <Saloncard />
        <Saloncard />
      </div>
    </div>
  );
};

export default Userhome;
