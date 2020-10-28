const mongoose = require('mongoose');
const Phones = require('../models/Phones');

module.exports.list = (req, res, next) => {
    Phones.find()
    .then(phones => {
        res.json(phones)
    })
    .catch(err => {
        res.json(err)
    })
}