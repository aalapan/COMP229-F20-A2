let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "lists"
});
module.exports = mongoose.model('List', contactModel)