
const User = require('../models/userModel');
const mongoose = require('mongoose');
const express = require("express");

const router = express.Router();

router.get('/getUsers',(req,res)=>{
    // console.log(User);
    User.find({}, (err, users) => {
        if (err) {
            res.status(400).send();
        }
        
        res.status(200).json(users);
    });
});

router.get('/getUser',(req,res)=>{
    res.send("<h1>get one user</h1>");
});

router.post('/createUser',(req,res)=>{
    const {username,email,password} = req.body;
    try{
        const newUser = User.create({username,email,password});
        //conaole.log(newUser);
        res.status(200).json(newUser);
    }catch(err){
        res.status(400).json({error:error.message});
    }
    
});

module.exports = router;