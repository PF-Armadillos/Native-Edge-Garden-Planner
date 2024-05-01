//EDITING USER MODEL TO USE MONGODB INSTEAD OF SQL DATABASE
//SQL CODE COMMENTED OUT

// const { Pool } = require('pg'); // pg = postgres
const mongoose = require('mongoose');
require('dotenv').config();

// const PG_URI = process.env.PG_URI;
// const MONGO_URI = process.env.MONGO_URI;

// // create a new pool here using the connection string above (connects us to db)
// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: 'lallah.db.elephantsql.com',
//   database: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   port: 5432,
// });

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true},
  password: {type: String, required: true}
})

// // Adding some notes about the database here will be helpful for future you or other developers.
// // Schema for the database can be found below:
// // https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// // We export an object that contains a property called query,
// // which is a function that returns the invocation of pool.query() after logging the query
// // This will be required in the controllers to be the access point to the database
// module.exports = {
//     query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback); //LOOK UP : userController line 13 : text = query, params = value, callback = .then
//     },
//     connect: (text, params, callback) => {},
// }

const User = mongoose.model('user', userSchema);
module.exports = User;
