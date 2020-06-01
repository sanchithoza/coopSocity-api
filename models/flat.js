const mongoose = require('mongoose');
// model definatino
/*
    "name":"404",
    "buildingId":"wingA1234"
*/
const Flat = mongoose.model('flat',{
    name:{
        type:String,
        required:true
    },
    buildingId:{
        type:String,
    }
});

module.exports = Flat;