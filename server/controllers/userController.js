
const db = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
      db.create({
      username: username,
      password: password
    })
    .then(()=>{
      res.locals.message = "User successfully created"; 
      return next(); 
    })
    .catch(err =>  {
        console.log(err);
        return next({
          log: 'Express error handler caught in createuser middleware',
          status: 500,
          message: { err: 'Cannot create new user' },
        });
      });

};


userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.findOne({ username });
    if(!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found '});  
    }

    const match = await user.validatePassword(password);
    if (!match) {
      return res.status(401).json( { message: 'Authentication failed: Incorrect password '});
    }

    req.session.userId = user._id;

    res.locals.user = user;

    return next();
  } catch (err) {
    console.log('Error', err)
    return next({
      log: 'Express error handler caught unknown middleware error for verify user',
      status: 500,
      message: { err: 'An error occurred in verifying user' },
  });
  }
};


module.exports = userController;

