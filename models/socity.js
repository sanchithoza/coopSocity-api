const mongoose = require('mongoose');
// model defenation
/*
    "name":"Sanchit",
    "address":"navsari",
    "regDate":"05/26/1992"
*/
const Socity = mongoose.model('socity', {
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

module.exports = Socity