const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(

    {
        username:{
            type: String,
            required: true 
        },
        post:{
            type: String,
            required: true 
        }

    }, 

    { timestamps: true }

);

module.exports = mongoose.model('Blog', blogSchema); //Blog collection
