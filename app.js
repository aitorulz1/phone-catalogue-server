const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');



// Import routes
const indexRoute = require('./routes/index');

app.use('/', indexRoute);


// Connect to mongoose
mongoose.connect(
    process.env.MONGODB_URI,  { useNewUrlParser: true, useUnifiedTopology: true }, () => 
    console.log('connected to MONGO DB')
    );


// Listen
app.listen(3001);
