const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// model defenation
/*
    "name":"Sanchit",
    "address":"navsari",
    "regDate":"05/26/1992"
*/

 const schema = new Schema( {
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    regDate: {
        type: Date,
        required: true
    }
});
const Socity = mongoose.model('socity',schema);

module.exports = Socity