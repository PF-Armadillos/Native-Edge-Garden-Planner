const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;

const MONGO_URI = process.env.MONGO_URI;

//create unique connections to each database
plantConn = mongoose.createConnection(MONGO_URI,{dbName: 'plantDB',});

const plantSchema = new Schema({
    _id: { type: String, required: true },
    State: { type: String, required: true},
    Species: String,
    CommonName: String,
    Duration: String,
    Habit: String,
    Light: String,
    Water: String,
    Thumb: String,
});

const Plant = plantConn.model('plant', plantSchema);

module.exports = Plant;

