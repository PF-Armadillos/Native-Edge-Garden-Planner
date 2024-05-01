
const db = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

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

// userController.loginUser = (req, res, next) => {
//   const { username, password } = req.body;
//   const values = [username, password];
//   const loginUserQuery =
//     "SELECT * FROM users WHERE username = $1 AND password = $2";

//   db.query(loginUserQuery, values)
//     .then((data) => {
//       if (data.rows.length === 1) {
//         // need to confirm if this is correct
//         res.locals.user = data.rows[0];
//         return next();
//       } else {
//         return res
//           .status(401)
//           .json({ message: "Invalid username or password" });
//       }
//     })
//     .catch((error) => {
//       next(error);
//     });
// };

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

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.findOne({ username });
    if(!user) {
      return res.redirect('/signup');  //assuming we have a signup endpoint
    }

    const match = await user.validatePassword(password);
    if (!match) {
      return res.redirect('/signup');
    }

    res.local.user = user;

    return next();
  } catch (err) {
    console.log('Error', err)
    return next({
      log: 'Express error handler caught unknown middleware error for getplants',
      status: 500,
      message: { err: 'An error occurred in getting plants' },
  });
  }
}

module.exports = userController;
