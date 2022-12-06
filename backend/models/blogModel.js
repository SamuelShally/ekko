const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(

    {
        username:{
            type: String,
            required: true 
        },
        title:{
            type: String,
            required: true 
        },
        post:{
            type: String,
            required: true 
        },
        img:{
            type: String,

        }

    }, 

    { timestamps: true }

);

module.exports = mongoose.model('Blog', blogSchema); //Blog collection
