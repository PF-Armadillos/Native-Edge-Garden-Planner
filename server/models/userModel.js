const { Pool } = require('pg'); // pg = postgres
require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const PG_URI = process.env.PG_URI;

const SALT_WORK_FACTOR = 10;

// create a new pool here using the connection string above (connects us to db)
const pool = new Pool({
  user: process.env.PG_USER,
  host: 'lallah.db.elephantsql.com',
  database: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: 5432,
});


const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
userSchema.pre('save', async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
    this.password = hash;
    next();
  } catch(error) {
      console.log('Error', err)
      return next({
      log: 'Express error handler caught unknown middleware error for getplants',
      status: 500,
      message: { err: 'An error occurred in getting plants' },
      });
    }
  })

  userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
  }

// module.exports = {
//     query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback); //LOOK UP : userController line 13 : text = query, params = value, callback = .then
//     },
//     connect: (text, params, callback) => {}
// }

const User = mongoose.model('user', userSchema);
module.exports = User;