const express = require('express');
const userController = require('../controllers/userController');


const userRouter = express.Router();

// EXPECT THE FOLLOWING FOR SIGNUP LOGIN
// { username: 'username', password: 'password' }
userRouter.post('/signup', userController.createUser, (req, res) => {
  //redirect to creategarden page (frontend)
  res.status(200).json(res.locals.message);
});

//add a route for login
userRouter.post('/login', userController.verifyUser, (req, res) => {
  if (res.locals.user) {
  res.status(200).json(res.locals.user)
  } else {
    res.status(401).json({ message: 'Login Failed '})
  }
});

module.exports = userRouter;

