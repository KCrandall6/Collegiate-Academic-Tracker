const path = require('path');
const express = require('express');

const coursesController = require('./courseController.js');
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', coursesController.getCourses, (req, res) => {
  res.status(200).json(res.locals.courses)
});

app.post('/', coursesController.addCourse, (req, res) => {
  res.status(200).json({});
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught, unknown middleware error',
    status: 400,
    message: { err: 'An error occured here' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});




app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});

module.exports = app;
