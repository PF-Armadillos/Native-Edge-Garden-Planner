// const Plant = require('../models/plantModel');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const plantSchema = new Schema({});

const Plant = mongoose.model('plant', plantSchema, 'plants6');

const plantDataController = {};

// helper function to create fileController error objects
// return value will be the object we pass into next, invoking global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `plantDataController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in plantDataController.${method}. Check server logs for more details.`,
    },
  };
};

plantDataController.getPlants = async (req, res, next) => {
  try {
    //get specific data
    const location = req.query.location;
    const data = await Plant.find({ State: location });
    console.log(data);
    // if (data.length === 0)
    //   throw createErr({
    //     method: 'getPlants',
    //     type: 'DB',
    //     err: 'Entry Not found',
    //   });
    res.locals.plants = data;
    return next();
  } catch (err) {
    return next(
      createErr({
        method: `getPlants`,
        type: 'DB',
        err: err,
      })
    );
  }
};

module.exports = plantDataController;
