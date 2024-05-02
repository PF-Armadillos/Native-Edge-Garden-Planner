const Plant = require('../models/plantModel');
require('dotenv').config();
const plantDatabase = require('../../client/staticObject')
// const MONGO_URI = process.env.MONGO_URI;

const plantDataController = {};


plantDataController.getPlants = async (req, res, next) => {
  try {
    const location = req.query.location;
    console.log('Location is', location);
    const data = await Plant.find({ State: location });
    console.log('Data is', data);
    console.log('Data length is ', data.length)
    if(!data.length) {
      throw new Error('data not found')
    }

    res.locals.plants = data;
    return next();
  } catch (err) {
    console.log('Error', err)
    return next({
      log: 'Express error handler caught unknown middleware error for getplants',
      status: 500,
      message: { err: 'An error occurred in getting plants' },
  });
  }
};

module.exports = plantDataController;
