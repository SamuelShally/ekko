const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }
}, {timestamps: true});


//name of model = workout, second argument = schema -> this is how we interact with the dc for chats
module.exports = mongoose.model('UserDB', userSchema);
