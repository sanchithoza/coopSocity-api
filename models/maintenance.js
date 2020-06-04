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
        type:mongoose.Types.ObjectId,
        required:true
    },
    building:{
        type:mongoose.Types.ObjectId
    },
    flat:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    person:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    fromMonth:{
        type:Date,
        required:true
    },
    toMonth:{
        type:Date,
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
