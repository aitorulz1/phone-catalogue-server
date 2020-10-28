const mongoose = require('mongoose');
require('dotenv/config');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/phones';

// Connect to mongoose
mongoose.connect( process.env.MONGODB_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log(`Perfectamente conectado a ${MONGODB_URI}`))
.catch(error => console.error(`Un error ha ocurrido intentando conectar con ${MONGODB_URI}`, error));
