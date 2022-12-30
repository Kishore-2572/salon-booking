import React from 'react';
import { Link } from 'react-router-dom';

const Saloncard = () => {
  return (
    <>
      <div className="salon-card">
        <Link to="/saloninfo/1qaz2wsx">
          <div className="salon-card-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="salon-card-details">
            <h1>Hello Salon</h1>
            <p>84, Lakshmipuram, Rayapalayam, Chithode,</p>
            <p>Erode - 638 102</p>
          </div>
        </Link>
        <a href="tel:+6379306614" className="call-link">
        <i class="fa-solid fa-phone-volume"></i>
          <p>6379306614</p>
        </a>
      </div>
    </>
  );
};

export default Saloncard;
