import React from 'react';
import { useState } from 'react';
import Logo from '../../assets/logo-black.png';
import Switch from 'react-switch';

const Salonprofile = () => {
  const [openTime, setOpentime] = useState('08:00');
  const [closeTime, setClosetime] = useState('20:00');
  const [checked, setChecked] = useState(true);

  return (
    <div className="salonprofile">
      <div className="sp-contents d-flex">
        <div className="sp-left">
          <div className="sp-user-details d-flex">
            <div className="sp-inputs-left flex-column">
              <h3>SHOP NAME</h3>
              <h3>EMAIL</h3>
              <h3>MOBILE</h3>
              <h3>ADDRESS</h3>
              <h3>CITY</h3>
              <h3>STATE</h3>
              <h3>PINCODE</h3>
              <h3>OPENING TIME</h3>
              <h3>CLOSING TIME</h3>
              <h3>SERVICES PROVIDED</h3>
            </div>
            <div className="sp-inputs-right flex-column">
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                Kishore
              </div>
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                Kishore@gmail.com
              </div>
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                1234567890
              </div>
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                84, lakshmipuram, Rayapalayam, Chithode
              </div>
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                Erode
              </div>
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                Tamil Nadu
              </div>
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                638102
              </div>
              <input
                className="sp-text-input"
                type="time"
                value={openTime}
                onChange={(e) => {
                  setOpentime(e.target.value);
                }}
              />

              <input
                className="sp-text-input"
                type="time"
                value={closeTime}
                onChange={(e) => {
                  setClosetime(e.target.value);
                }}
              />
              <div
                className="sp-text-input"
                contenteditable="true"
                onInput={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                Hair cutting, Shaving, Trimmining, Hair Smoothining, Fire cutting, Grooming,
              </div>
            </div>
          </div>
        </div>
        <div className="sp-right">
          <div className="ss-right-toogle flex-center">
            <h1>Is shop opened today ? </h1>
            <Switch checked={checked} onChange={(val) => setChecked(val)} />
          </div>
          <div className="gallery">
            <h1>GALLERY</h1>
            <div className="salonphotos-div">
              <h2>SALON PHOTOS</h2>
              <div className="salonphotos">
                <div className="salonphoto">

                </div>
                <div className="salonphoto">
                  
                </div>
                <div className="salonphoto">
                  
                </div>
                <div className="salonphoto-add flex-center">
                <i className="fa-solid fa-circle-plus"></i>
                </div>
              </div>
            </div>
            <div className="salonphotos-div">
              <h2>STYLIST PHOTOS</h2>
              <div className="salonphotos">
                <div className="stylistphoto">

                </div>
                <div className="stylistphoto">
                  
                </div>
                <div className="stylistphoto">
                  
                </div>
                <div className="stylistphoto-add flex-center">
                <i className="fa-solid fa-circle-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center" style={{ margin: '1rem auto' }}>
        <button className="sp-btn flex-center">
          <img src={Logo} />
          <h3>SAVE CHANGES</h3>
        </button>
      </div>
    </div>
  );
};

export default Salonprofile;
