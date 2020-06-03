const mongoose = require('mongoose');

// model defenation
/*
    "name":"sanchit",
    "email":"sanchithoza@gmail.com",
    "password":"socity@1",
    "mobile":"9427343884",
    "flatid":"1234",
    "role":"member"
*/
const Person = mongoose.model('person',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    flat:{
        type:String
    },
    role:{
        type:String
    }
});

module.exports = Person;
