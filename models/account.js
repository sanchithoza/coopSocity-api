const mongoose = require('mongoose');
//model defination
/*
    "socity":"1",
    "building":"1",
    "flat":"1",
    "person":"1",
    "note":"May-2020",
    "date":"01-01-2020"
    "category":"maintenance"
    "amount":500,
    "remark":"no remark"
*/
const Account = mongoose.model('account', {
    socity: {
        type: mongoose.Types.ObjectId,
        ref: 'socity',
        required: true
    },
    building: {
        type: mongoose.Types.ObjectId,
        ref: 'building'
    },
    flat: {
        type: mongoose.Types.ObjectId,
        ref: 'flat',
        required: true
    },
    person: {
        type: mongoose.Types.ObjectId,
        ref: 'person',
        required: true
    },
    note: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    remark: {
        type: String
    }
});

module.exports = Account;
