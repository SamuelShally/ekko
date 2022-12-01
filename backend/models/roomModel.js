const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(

    {
        firstUser:{
            type:String,
            unique:true,
            required: true
        },
        secondUser: {
            type:String,
            unique:true,
            required: true
        }
    }
);

module.exports = mongoose.model('Room',roomSchema); 