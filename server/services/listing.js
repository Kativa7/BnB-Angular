const Listing = require('../models/Listing');

async function getAll(){
    return Listing.find({}).lean();
}

async function getById(id){
    return Listing.findById(id).lean();
}


module.exports = {
    getAll,
    getById
}