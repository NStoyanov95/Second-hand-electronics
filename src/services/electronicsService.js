const Electronics = require('../models/Electronics');


exports.getAll = () => Electronics.find();

exports.getOne = (electronicsId) => Electronics.findById(electronicsId);

exports.create = (electronicsData) => Electronics.create(electronicsData);

exports.buy = (electronicsId, userId) => Electronics.findByIdAndUpdate(electronicsId, { $push: { 'buyingList': userId } });

exports.delete = (electronicsId) => Electronics.findByIdAndDelete(electronicsId);

exports.update = (electronicsId, electronicData) => Electronics.findByIdAndUpdate(electronicsId, electronicData, { runValidators: true });