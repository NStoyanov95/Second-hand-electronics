const Electronics = require('../models/Electronics');


exports.getAll = () => Electronics.find();

exports.getOne = (electronicsId) => Electronics.findById(electronicsId);

exports.create = (electronicsData) => Electronics.create(electronicsData);