const Electronics = require('../models/Electronics');


exports.getAll = () => Electronics.find();

exports.create = (electronicsData) => Electronics.create(electronicsData);