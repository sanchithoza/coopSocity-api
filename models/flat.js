const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// model definatino
/*
    "name":"404",
    "building":"wingA1234",
    "socity":"socityId",
    maintenancePerMonth:400
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
    },
    maintenancePerMonth: {
        type: Number,
        required: true
    }
});

//schema.pre('find', () => console.log('Hello from pre find'));


const Flat = mongoose.model('flat', schema);


module.exports = Flat;