const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    name: {
        type: String,
        min: 2,
        max: 15,
        required: true,
    },
    email: {
        type: String,
        min: 2,
        max: 30,
        required: true,
    }
}, { timestamps: true });

const Sub = mongoose.model('Sub', subSchema);

module.exports = Sub;