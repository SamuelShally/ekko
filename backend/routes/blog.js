const Blog = require('../models/blogModel');
const mongoose = require('mongoose');
const express = require("express");
const validator = require("validator");
var md5 = require('md5');

//for external api calls
const request = require('request');

const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session)

const router = express.Router();

//Get all blog posts associated with user name, sorted by date
router.post('/retrieve', (req, res) => {
    let {username} = req.body;

    Blog.find({ username: username }, function (err, docs) {

        if(err){
            res.status(400).json({error: err.message});
        }

        res.status(200).json(docs);

    }).sort({date:-1}); 

});

//Create a new blog post under userName, returns error or the created blog post
router.post("/add", (req, res) => {
    let {username, post} = req.body;

      //Validate
      if(!username || !post){
        res.status(400).json({error:"all fields need to be filled"});
        // return;
    }

    Blog.create( {username, post}, (err, post) => {

        if(err){
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({post});

    }); 

});

//Update a blog post via id
router.patch("/update/:id", (req, res) => {
    const {id} = req.params;

});

//Delete a blog post by id
router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;

});


module.exports = router;