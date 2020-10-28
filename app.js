const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const phonesRoute = require('./routes/phones');


require('./config/db')


app.use(bodyParser.json());

// Import routes
app.use('/phones', phonesRoute);



// Listen
app.listen(3001);
