const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are homeee');
});


module.exports = router;