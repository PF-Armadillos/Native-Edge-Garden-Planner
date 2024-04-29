
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
    "INSERT INTO users (username, password) VALUES($1, $2)";

  db.query(createUserQuery, values)
    .then(() => {
      res.locals.messsage = { message: "User created successfully" };
      return next();
    })
    .catch((error) => {
      next(error);
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

//username unique, can't be more than fifty characters

// Warning : I tried importing bcrypt into this file and added the functinoallity to encript the password but the code was breaking so I decided to remove it
// here is the code I used.

//createUser :
/*
userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  
  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    
    const values = [username, hashedPassword];
    const createUserQuery =
      "INSERT INTO users (username, password) VALUES($1, $2)";

    db.query(createUserQuery, values)
      .then(() => {
        res.locals.message = { message: "User created successfully" };
        return next();
      })
      .catch((error) => {
        next(error);
      });
  });
};
*/

//loginUser
/*
userController.loginUser = (req, res, next) => {
  const { username, password } = req.body;
  const values = [username];

  const loginUserQuery =
    "SELECT * FROM users WHERE username = $1";

  db.query(loginUserQuery, values)
    .then((data) => {
      if (data.rows.length === 1) {
        const user = data.rows[0];
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return res
              .status(401)
              .json({ message: "Invalid username or password" });
          } else {
            // Password matches, proceed with login
            res.locals.user = user;
            return next();
          }
        });
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
*/

// users need and increment with each user added id increments

//usr,psswrd,pk:id,
//id : first column,
// next colmns
//usr, email, psswd

// Need to add id
// How to do id increment logic ? set global variable that holds that and go from that ?

