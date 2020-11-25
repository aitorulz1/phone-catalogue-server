const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv/config');
require('./config/db');


//CORS on ExpressJS | cross origin problems
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});


app.use(bodyParser.json());
app.use(express.json());


// Import routes
const router = require('./routes/phones');
app.use('/', router);


// Listen
const port = (process.env.PORT || '4001');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
