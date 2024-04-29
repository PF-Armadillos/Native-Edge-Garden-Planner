const express = require('express');
const userControllers = require('../controllers/userController');

const userRouter = express.Router();

//user routes: 
    //create user
userRouter.post('/', userControllers.createUser, (req,res) =>{
    res.status(200).json(res.locals.message);
})
    //update password
//userRouter.put('/', userControllers.updatePassword);


//test routes 
//test A : Show full Database Table
userRouter.get('/',userControllers.showTable);

module.exports = userRouter;
