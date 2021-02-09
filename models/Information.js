const mongoose = require('mongoose'); 

const InformationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String
    },
    Address: {
        type: String
    },
    Position: {
        type: String
    },
    Salary: {
        type: String
    },
    Skype: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Information', InformationSchema);
