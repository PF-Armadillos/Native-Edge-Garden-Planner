//import user model
const db = require('../models/userModel');

const userController = {};

// helper function to create fileController error objects
// return value will be the object we pass into next, invoking global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in userController.${method}. Check server logs for more details.`,
    },
  };
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const values = [username, password];
  const createUserQuery =
    'INSERT INTO users (username, password) VALUES($1, $2)';

  db.query(createUserQuery, values)
    .then(() => {
      res.locals.messsage = { message: 'User created successfully' };
      return next();
    })
    .catch((error) => {
      return next(
        createErr({
          method: 'createUser',
          type: 'DB Insertion',
          err: error,
        })
      );
    });
};

userController.loginUser = (req, res, next) => {};
//SELECT * FROM users WHERE username = 'passedin username' -> if this fails it means they aren't a user
// -> set a res.locals variable to false

userController.showTable = (req, res, next) => {
  const pullTable = 'SELECT * FROM users'; // need table name.
  db.query(pullTable)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((error) => {
      return next(
        createErr({
          method: 'showTable',
          type: 'DB retrieval',
          err: error,
        })
      );
    });
};

module.exports = userController;

//username unique, can't be more than fifty characters
// users need and increment with each user added id increments

//usr,psswrd,pk:id,
//id : first column,
// next colmns
//usr, email, psswd

// Need to add id
// How to do id increment logic ? set global variable that holds that and go from that ?
