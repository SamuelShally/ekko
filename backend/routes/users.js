const User = require('../models/userModel');
const mongoose = require('mongoose');
const express = require("express");
const validator = require("validator");
var md5 = require('md5');

//for external api calls
const request = require('request');

const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session)

const router = express.Router();

router.get('/getUsers',(req,res)=>{
    // console.log(User);
    User.find({}, (err, users) => {
        if (err) {
            res.status(400).json({error: err.message});
        }
        res.status(200).json(users);
    });
  
    
});

router.get('/getUser/:id',(req,res)=>{
   
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"User not found"})
    }
    const user = User.findById(id,(err,oneUser)=>{
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        
        res.status(200).json(oneUser)
    })
    if(!user){
        return res.status(404).json({error:"No such user"});
    }
    
});

router.post('/signup', (req,res)=>{
  
    const {username,email,password} = req.body;
   
    //validation
    if(!username ||!email ||!password ){
        
        res.status(400).json({error:"all fields need to be filled"});
        return;
    }

    if(!validator.isEmail(email)){
        res.status(400).json({error:"Email is not valid"})
        return;
    }

    
    if(!validator.isStrongPassword(password)){
        res.status(400).json({error:'Password not strong enough,password needs upper,lowercase, symbols and numbers'});
        return;
    }

    User.findOne({username:username},(err,user)=>{
        if(err){
            res.status(400).json({error:err.message});
            
            return;
        }
        if(user){
         
           res.status(400).json({error:"User already in use"});
           return;
        }

        User.findOne({email:email},(err,user)=>{
            if(err){
                res.status(400).json({error:err.message});
                
                return;
            }
            if(user){
               res.status(400).json({error:"Email already in use"});
               return;
            }

            //encrypt the password before saving it
            let encrypedPW = md5(password);
        
            
            //save a new user with encrypted password
            User.create({username,email, password: encrypedPW}, (err, user) => {
                if (err) {
                    res.status(400).json({error: err.message});
                    return;
                }
                console.log(user);
                
                res.status(200).json({user});

            });  
    
        })

         

    })

    

});

router.delete('/getUser/:id',(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"User not found"})
    }
    const user = User.findOneAndDelete({_id:id},(err,oneUser)=>{
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        
        res.status(200).json(oneUser);

    });

    if(!user){
        return res.status(404).json({error:"No such user"});
    }


});


//TODO: Need to encrypt the password when it is updated
router.patch('/getUser/:id',(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"User not found"})
    }

    const data = {
        _id: id,
    }
    if(req.body.username) {
        data.username = req.body.username;
    }
    if(req.body.email) {
        data.email = req.body.email;
    }
    if(req.body.password) {
        data.password = md5(req.body.password);
    }

    const user = User.findOneAndUpdate(
        {_id:id},
        data,(err,data)=>{
            if(err){
                res.status(400).json({error: err.message});
                return;
            }
            res.status(200).json(data);

        });
    
    if(!user){
            return res.status(404).json({error:"No such user"});
    }



})

/* 
**Log user in to the system**

    For testng purpose
    username : lime
    password : 123Nyu@321
*/

router.post('/login', async(req, res) => {
    let {username, password} = req.body;
  
    const user = await User.findOne({username});

    if(!user){
        res.status(400).json({error:"user not found"});
        return;
    }

    if(user.password !== md5(password)) {
        res.status(400).json({error:"password incorrect"});
        return;
    }

    //User is logged in -> set usAuth 
    req.session.isAuth = true;
    req.session.userName = username;

    res.status(200).json({hello: 'test'});
});


//get name from session
router.get("/name", async (req, res) => {
    try{
        console.log(req.session.name);
        req.send({message: req.session.name});
    }catch (error){
        console.log(error);
    }
});


//Pass: The name of a topic
//Returns: JSON list of articles relating to that topic 
router.post("/articles", async(req, res) => {
    let {topic} = req.body;

    const apiKey = 'fbc4d6586ae548d68923b9b732c10ee9';
    const url = `https://newsapi.org/v2/everything?q=${topic}&from=2022-10-21&sortBy=publishedAt&apiKey=${apiKey}`;

    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type' : "application/json"
        }
    });

    const json = await response.json();

    //fetch ten articles
    let articles = [];
    for(let x = 0; x<10; x++){
        articles.push(json.articles[x]);
    }

    res.status(200).json(articles);
});


//Log out of the app (destroy the cookie)
router.post('/logout', (req, res) => {

    // req.session.destroy((err) => {
    //     if(err) throw err;

    //     /*
    //         Remark: I don't know where to redirect to right now. 
    //         I need to understand the combination between front and backend better
    //     */

    //     res.redirect('/'); 
    // })

}) 




module.exports = router;