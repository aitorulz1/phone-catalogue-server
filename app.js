const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv/config');
require('./config/db');


//CORS on ExpressJS | cross origin problems
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// Import routes
const phonesRoute = require('./routes/phones');
app.use('/phones', phonesRoute);


// Listen
const port = (process.env.PORT || '4001');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
