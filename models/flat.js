const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// model definatino
/*
    "name":"404",
    "buildingId":"wingA1234",
    "socityId":"socityId"
*/
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    building: { 
        type: mongoose.Types.ObjectId, ref: 'building' 
    },
    socity: { 
        type: mongoose.Types.ObjectId, ref: 'socity' 
    }
});

schema.pre('find', () => console.log('Hello from pre find'));


const Flat = mongoose.model('flat', schema);


module.exports = Flat;