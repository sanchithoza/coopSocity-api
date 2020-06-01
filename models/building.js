const mongoose = require('mongoose');
// model definatino
/*
    "name":"A wing",
    "socityId":"123we53"
*/
const Building = mongoose.model('building',{
    name:{
        type:String,
        required:true
    },
    socityId:{
        type:String,
    }
});

module.exports = Building;