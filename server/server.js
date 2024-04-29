const path = require('path');
const express = require('express');

//user dependancies
const userRouter = require('./routes/userRoutes');
const userController = require('./controllers/userController');
const plantDataController = require('./controllers/plantDataController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

app.use('/user', userRouter);

app.get('/plant/?location', plantDataController.getPlants, (req, res) => {
  res.status(200).json(res.locals.plants);
});

//Create a user in the database
//http://localhost:3000/user

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//404 handling
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

//Glolbal error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
