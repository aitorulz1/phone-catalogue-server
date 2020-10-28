const mongoose = require('mongoose');
require('dotenv/config');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/phones';

// Connect to mongoose
mongoose.connect( process.env.MONGODB_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log(`Conectado perfectamente a ${MONGODB_URI}`))
.catch( err => console.log(`Hubo un error al intentar conectarse a ${MONGODB_URI}`))
