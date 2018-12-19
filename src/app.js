const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Routes(app);

app.listen(port);

console.log('Bittrex RESTful API started on: ' + port);