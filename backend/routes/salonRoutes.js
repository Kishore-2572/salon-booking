const salonRouter = require('express').Router();
const Salon = require('../models/Salonmodel');
const bcrypt = require('bcryptjs');
const { generateSalonToken, isAuth } = require('../utils');

salonRouter.get('/', async (req, res) => {
  try {
    const salons = await Salon.find({});
    res.status(200).send(salons);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

salonRouter.post('/', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;
    const services = req.body.services.split(',');
    const hashPassword = bcrypt.hashSync(req.body.password);
    const salon = new Salon({
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      services: services,
      password: hashPassword,
    });
    const newSalon = await salon.save();
    const { password, ...salonData } = newSalon._doc;
    res.status(200).send({ salonData, token: generateSalonToken(salonData) });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

salonRouter.post('/signin', async (req, res) => {
  try {
    const mobile = req.body.mobile;
    const bodyPassword = req.body.password;
    const salon = await Salon.findOne({ mobile: mobile }).select('+password');
    if (salon) {
      if (bcrypt.compareSync(bodyPassword, salon.password)) {
        const { password, ...salonData } = salon._doc;
        res.status(200).send({
          salon: salonData,
          token: generateSalonToken(salonData),
        });
      } else {
        res.status(401).send({ message: 'Invalid Password' });
      }
    } else {
      res.status(401).send({ message: 'User not found' });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});



salonRouter.put('/:salonid', isAuth, async (req, res) => {
  try {
    const salon = await Salon.findById(req.params.salonid).select('+password');
    salon.name = req.body.name || salon.name;
    salon.email = req.body.email || salon.email;
    salon.mobile = req.body.mobile || salon.mobile;
    salon.address = req.body.address || salon.address;
    salon.city = req.body.city || salon.city;
    salon.state = req.body.state || salon.state;
    salon.pincode = req.body.pincode || salon.pincode;
    if (req.body.services) {
      salon.services = req.body.services.split(',');
    }
    if (req.body.password) {
      salon.password = bcrypt.hashSync(req.body.password);
    }
    const updatedSalon = await salon.save();
    const { password, ...salonData } = updatedSalon._doc;
    res.status(200).send({ salonData, token: generateSalonToken(salonData) });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = salonRouter;
