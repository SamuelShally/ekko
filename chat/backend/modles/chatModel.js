const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    load: {
        type: String, 
        required: true
    }
}, {timestamps: true});


//name of model = workout, second argument = schema -> this is how we interact with the dc for chats
module.exports = mongoose.model('Chat', chatSchema);
