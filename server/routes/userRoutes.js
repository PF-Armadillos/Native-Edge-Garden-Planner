const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

//user routes:
//create user
// EXPECT THE FOLLOWING FOR SIGNUP LOGIN
// { username: 'username', password: 'password' }
userRouter.post('/signup', userController.createUser, (req, res) => {
  //redirect to creategarden page (frontend)
  res.status(200).json(res.locals.message);
});

//add a route for login
userRouter.post('/login', userController.loginUser, (req, res) => {
  //check if username and password exist on db if not return to sign up page
  res.status(200).json();
});

//update password

//userRouter.put('/', userControllers.updatePassword);

//test routes ""
//test A : Show full Database Table
userRouter.get('/', userController.showTable, (req, res) => {
  res.sendStatus(200);
});

module.exports = userRouter;

//
