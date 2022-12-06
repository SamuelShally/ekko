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



router.get('/getPosts',(req,res)=>{
    Blog.find({},(err,docs)=>{
        if(err){
            res.status(400).json({error: err.message});
        }
        res.status(200).json(docs);

    })
})

//Create a new blog post under userName, returns error or the created blog post
router.post("/add", (req, res) => {
    let {username, post, title,img} = req.body;

    console.log(username);
    console.log(post);
    console.log(title);


      //Validate
      if(!username || !post || !title){
        res.status(400).json({error:"all fields need to be filled"});
        return;
    }

    Blog.create( {username, post, title,img}, (err, post) => {

        if(err){
            res.status(400).json({error: err.message});
            return;
        }
    
        res.status(200).json({post});

    }); 

});

//Update a blog post via id
//Returns updated porst
router.patch("/update/:id", (req, res) => {
    const {id} = req.params;

     //Validate ID
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Blog post does not exist"})
    }

    const data = {
        _id: id,
    }
    if(req.body.username) {
        data.username = req.body.username;
    }
    if(req.body.post) {
        data.post = req.body.post;
    }
    if(req.body.title){
        data.title = title;
    }

    //Update the blog post
    let doc = Blog.findOneAndUpdate({_id:id}, data, {
        returnOriginal: false
      }, (err,data)=>{
            if(err){
                res.status(400).json({error: err.message});
                return;
            }

            res.status(200).json(data);
        }
    );

    if(!doc){
        res.status(200).json({error: "Blog post does not exist"});
    }
});

//Delete a blog post by id
router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;

    //Validate ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Blog post does not exist"})
    }

    //Remove from DB
    const post = Blog.findOneAndDelete({_id:id},(err, onePost)=>{
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json(onePost);
    });

    //If user does not exist
    if(!post){
        return res.status(404).json({error:"Blog post does not exist"});
    }

});

module.exports = router;