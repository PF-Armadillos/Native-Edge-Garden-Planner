require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const PG_URI = process.env.PG_URI;

const SALT_WORK_FACTOR = 10;

// create a new pool here using the connection string above (connects us to db)
// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: 'lallah.db.elephantsql.com',
//   database: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   port: 5432,
// });


const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

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

const User = mongoose.model('user', userSchema);
module.exports = User;