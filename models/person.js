const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// model defenation
/*
    "socity":"socityid",
    "building":"buildingid",
    "flat":"1234",
    "name":"sanchit",
    "email":"sanchithoza@gmail.com",
    "password":"socity@1",
    "mobile":"9427343884",
    "role":"member"
*/
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    socity:{
        type: mongoose.Types.ObjectId,ref:'socity'
    },
    building:{
        type: mongoose.Types.ObjectId,ref:'building'
    },    
    flat: {
        type: mongoose.Types.ObjectId,ref:'flat'
    },
    role: {
        type: String
    }
});
const Person = mongoose.model('person', schema);

module.exports = Person;
