//EDITING USER MODEL TO USE MONGODB INSTEAD OF SQL DATABASE
//SQL CODE COMMENTED OUT

const db = require('../models/userModel');

const userController = {};

// helper function to create fileController error objects
// return value will be the object we pass into next, invoking global error handler
// const createErr = (errInfo) => {
//   const { method, type, err } = errInfo;
//   return {
//     log: `userController.${method} ${type}: ERROR: ${
//       typeof err === 'object' ? JSON.stringify(err) : err
//     }`,
//     message: {
//       err: `Error occurred in userController.${method}. Check server logs for more details.`,
//     },
//   };
// };
userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  // const values = [username, password];
  // const createUserQuery =
  //   "INSERT INTO users (username, password) VALUES($1, $2)";

  // db.query(createUserQuery, values)
  //   .then(() => {
  //     res.locals.messsage = { message: "User created successfully" };
  //     return next();
  //   })
  //   .catch((error) => {
  //     next(error);
  //   });
    db.create({
      username: username,
      password: password
    })
    .then(newUser => 
        {res.locals.user=newUser})
    .catch(err =>  {
        console.log(err);
        return next({
          log: 'Express error handler caught in createuser middleware',
          status: 500,
          message: { err: 'Cannot create new user' },
        });
      });

};

userController.findUser = (req, res, next) => {
  const { username, password } = req.body;
      db.find({
      firstName: firstName      
    })
    .then(foundUser => 
        {res.locals.user=foundUser})
    .catch(err =>  {
        console.log(err);
        return next({
          log: 'Express error handler caught in finduser middleware',
          status: 500,
          message: { err: 'Cannot create new user' },
        });
      });

};


userController.loginUser = (req, res, next) => {
  const { username, password } = req.body;
  const values = [username, password];
  const loginUserQuery =
    "SELECT * FROM users WHERE username = $1 AND password = $2";

  db.query(loginUserQuery, values)
    .then((data) => {
      if (data.rows.length === 1) {
        // need to confirm if this is correct
        res.locals.user = data.rows[0];
        return next();
      } else {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
    })
    .catch((error) => {
      next(error);
    });
};

userController.showTable = (req, res, next) => {
  const pullTable = "SELECT * FROM users"; // need table name.
  db.query(pullTable)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = userController;

