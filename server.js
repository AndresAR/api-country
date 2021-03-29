const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const db = require('./db')
const v1route = require('./routes/v1/routes');

const app = express();
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
const port = 3002;

app.listen(port, () => console.log(`Server running... ${ port }`));