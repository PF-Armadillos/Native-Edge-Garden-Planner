const mongoose = require('mongoose');
require('dotenv').config();

// const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const plantSchema = new Schema({});

const Plant = mongoose.model('plant', plantSchema, 'plants6');
module.exports = Plant;
