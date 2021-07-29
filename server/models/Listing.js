const {Schema, model} = require('mongoose');

const schema = new Schema({
title: {type: String},
location: {type: String},
img: {type: String},
price: {type: Number},
category: {type: String}, //  enum: ['House', 'Apartment', 'Room']
description: {type: String}
})

module.exports = model('Listing', schema);