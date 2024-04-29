const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    // sets the name of the DB that our collections are part of
    dbName: 'plants_test_database',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const plantSchema = new Schema({
  state: String,
  species: String,
  common_name: String,
  duration: String,
  habit: String,
  light: String,
  water: String,
  thumb: String,
});

const Plant = mongoose.model('plant', plantSchema, 'plants6');
module.exports = Plant;
