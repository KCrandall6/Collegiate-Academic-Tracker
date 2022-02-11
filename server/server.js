const path = require('path');
const express = require('express');

const apiRouters = require('./api.js');
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "../dist")));

app.use('/', apiRouters);



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
