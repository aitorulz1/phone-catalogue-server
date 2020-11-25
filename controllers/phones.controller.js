const Phones = require('../models/Phones');

module.exports.list = async (req, res, next) => {

    try {
        const phones = await Phones.find()
        res.json(phones)
    } catch (error) {
        res.json({message: error})
    }

}