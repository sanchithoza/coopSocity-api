const mongoose = require('mongoose');
//model defination
/*
    "socityId":"1",
    "buildingId":"1",
    "flatId":"1",
    "personId":"1",
    "fromMonth":"04-2020",
    "toMonth":"04-2020",
    "amount":500,
    "remark":"no remark"
*/
const Maintenance = mongoose.model('maintenance',{
    socity:{
        type:String,
        required:true
    },
    building:{
        type:String
    },
    flat:{
        type:String,
        required:true
    },
    person:{
        type:String,
        required:true
    },
    fromMonth:{
        type:String,
        required:true
    },
    toMonth:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    remark:{
        type:String
    }
});

module.exports = Maintenance;
