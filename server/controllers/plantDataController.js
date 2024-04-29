const model = require('../models/plantModel');

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
    const location = req.params.location;
    const data = await model.find({ State: location });
    if (!data) throw 'Did not find plants';
    res.locals.plants = data;
    return next();
  } catch (err) {
    return next(
      createErr({
        log: `plantDataController.getPlants: Error: ${err}`,
        status: 503,
        message: {
          err: 'Error occurred in fetching plant data in plantDataController. Check server logs for more details.',
        },
      })
    );
  }
};
