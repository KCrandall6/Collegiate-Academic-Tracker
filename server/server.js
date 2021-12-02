const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const db = require('./Models');

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

// handle requests for static files

// app.use(express.static(path.resolve(__dirname, '../client')));

app.put('./')

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));