const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email : String,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    planStartDate: Date,
    planEndDate: Date,
    paymentDetails: {
        cardNumber: String,
        cvc: String,
        expiryDate: String,
    },
}, { versionKey: false, timestamps: true } );

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;