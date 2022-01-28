const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const beerSchema = new Schema({
    beerName: String,
    description: String,
    imageURL: String,
    abv: {
        type: Number,
        required: true
    },
    alcoholFree: Boolean, 
    beerType: String
});

// 'Beer' is the name of the collection that will be entered into mongo db (but will add an s)
const Beer = model('Beer', beerSchema);

module.exports = {'Beer' : Beer};