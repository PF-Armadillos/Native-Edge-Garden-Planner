require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI ;
const SALT_WORK_FACTOR = 10;

//create unique connections to each database
const userConn = mongoose.createConnection(MONGO_URI,{dbName: 'userDB',});

const Schema = mongoose.Schema;
console.log(MONGO_URI);
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

const User = userConn.model('user', userSchema);
module.exports = User;