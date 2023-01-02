const express = require('express');
const app = express();
require('dotenv').config();
const core = require('cors');
const userRouter = require('./routes/userRoutes.js');
const salonRouter = require('./routes/salonRoutes.js');
const bookingRouter = require('./routes/bookingRoutes.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
}).catch(e => console.log(e))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(core());

app.use('/api/user', userRouter);
app.use('/api/salon', salonRouter);
app.use('/api/booking', bookingRouter);
