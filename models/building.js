const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// model definatino
/*
    "name":"A wing",
    "socityId":"123we53"
*/
const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    socity:{
        type: mongoose.Types.ObjectId, ref: 'socity' 
    }
})
const Building = mongoose.model('building',schema);

module.exports = Building;