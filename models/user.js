const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    doB : {
        type : String
    },
    role : {
        type : String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);