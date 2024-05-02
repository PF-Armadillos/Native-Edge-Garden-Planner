const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;

// const MONGO_URI = process.env.MONGO_URI;

const plantSchema = new Schema({
    _id: { type: String, required: true },
    State: { type: String, required: true},
    // Species: String,
    CommonName: String,
    // Duration: String,
    // Habit: String,
    // Light: String,
    // Water: String,
    // Thumb: String,
});

module.exports = mongoose.model('plant', plantSchema);

