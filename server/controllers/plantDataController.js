const Plant = require('../models/plantModel');
require('dotenv').config();

// const MONGO_URI = process.env.MONGO_URI;

const plantDataController = {};

// helper function to create fileController error objects
// return value will be the object we pass into next, invoking global error handler
// const createErr = (errInfo) => {
//   const { method, type, err } = errInfo;
//   return {
//     log: `plantDataController.${method} ${type}: ERROR: ${
//       typeof err === 'object' ? JSON.stringify(err) : err
//     }`,
//     message: {
//       err: `Error occurred in plantDataController.${method}. Check server logs for more details.`,
//     },
//   };
// };

plantDataController.getPlants = async (req, res, next) => {
  try {
    const location = req.query.location;
    console.log('Location is', location);
    const data = await Plant.find({ State: location });
    console.log('Data is', data);

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
