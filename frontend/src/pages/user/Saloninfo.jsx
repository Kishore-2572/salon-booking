import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Servicessvg from '../../assets/services.svg';
import Logo from '../../assets/logo-black.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { toast } from 'react-toastify';
import moment from 'moment';

const Saloninfo = () => {
  // const params = useParams();
  // const { salonid } = params;

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const openTime='08:00';
  const closeTime='20:00';

  const handleClose = (e) => {
    setOpen(false);
    if (e.target.name === 'ok') {
      console.log(date + '  ' + time);
      toast.success('Slot booked check history for details');
    } else {
      toast.error('Booking Canceled');
    }
  };

  const getMinDate = () => {
    return moment(new Date()).format('YYYY-MM-DD');
  };
  // useEffect(() => {

  // }, []);

  return (
    <div className="saloninfo">
      <div className="saloninfo-header">
        <div className="book-now">
          <h1>Hello Salon</h1>
          <div className="saloninfo-btn-div">
            <button className="saloninfo-btn" onClick={handleClickOpen}>
              <img src={Logo} />
              BOOK NOW
            </button>
          </div>
        </div>
        <p>84, Lakshmipuram, Rayapalayam, Chithode, Erode - 638102</p>
      </div>
      <div className="services-provided">
        <h1>Services Provided</h1>
        <div className="services">
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Haircut
          </p>
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Beard
            Shaving
          </p>
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Beard
            Triming
          </p>
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Facial
          </p>
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Hair Wash
          </p>
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Pedicure
          </p>
          <p className="service">
            {' '}
            <img className="services-svg" src={Servicessvg} alt="" /> Haircut
          </p>
        </div>
      </div>
      <div className="saloninfo-photos">
        <div className="salon-photos">
          <h1>Gallery</h1>
          <div className="salon-images">
            <div className="salon-image">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
                alt=""
              />{' '}
            </div>
            <div className="salon-image">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
                alt=""
              />{' '}
            </div>
            <div className="salon-image">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
                alt=""
              />{' '}
            </div>
            <div className="salon-image">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
                alt=""
              />{' '}
            </div>
          </div>
        </div>
        <div className="stylist-photo">
          <h1>Stylist</h1>
          <div className="stylist-images">
            <div className="stylist-image">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
                alt=""
              />{' '}
            </div>
            <div className="stylist-image">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzy7W-nyDgS5joDyB9l_OSmByMXwRDJG5Qw&usqp=CAU"
                alt=""
              />{' '}
            </div>
          </div>
        </div>
      </div>
      {/* =============== POPUP FORM ========================== */}
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <DialogContentText className='dialog-text' >
              Please fill out the date and time to book your slot
            </DialogContentText>
            <DialogContentText className='dialog-text' >
              Shop timings 08:00 AM to 08:00 PM 
            </DialogContentText>
            <div className="dialog-inputs">
              <input
                type="date"
                className="dialog-input"
                min={getMinDate()}
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                type="time"
                className="dialog-input"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              className="saloninfo-dialog-btn"
              name="cancel"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button className="saloninfo-dialog-btn" name="ok" onClick={handleClose}>
              Book
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Saloninfo;
