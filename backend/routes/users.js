const User = require('../models/userModel');
const mongoose = require('mongoose');
const express = require("express");
const validator = require("validator");
const jwt = require('jsonwebtoken');
var md5 = require('md5');
const requireAuth = require("../middleware/requireAuth");


//function to create a web token 
const createToken = (_id) =>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn: '1d'})
}

//for external api calls
const request = require('request');


const router = express.Router();


router.post('/signup', (req,res)=>{
  
    const {username,email,password} = req.body;
    const worldview = undefined
    const intro = undefined
   
    //validation
    if(!username ||!email ||!password ){
        
        res.status(400).json({error:"All fields need to be filled"});
        return;
    }

    if(!validator.isEmail(email)){
        res.status(400).json({error:"Email invalid"})
        return;
    }

    
    if(!validator.isStrongPassword(password)){
        res.status(400).json({error:'Password not strong enough: must include upper, lowercase, symbols, and numbers'});
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
            User.create({username,email, password: encrypedPW,worldview,intro}, (err, user) => {
                if (err) {
                    res.status(400).json({error: err.message});
                    return;
                }
                console.log(user);
                const token = createToken(user._id);
                
                res.status(200).json({user,token});

            });  
    
        })

         

    })

});

router.post('/login', async(req, res) => {
    let {username, password} = req.body;
    console.log(req.headers);
  
    const user = await User.findOne({username});

    if(!user){
        res.status(400).json({error:"User not found"});
        return;
    }

    if(user.password !== md5(password)) {
        res.status(400).json({error:"Password incorrect"});
        return;
    }

    const token = createToken(user._id);

    res.status(200).json({user,token});
});



//router.use(requireAuth); //protecting all the APIS


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

router.post("/worldview",(req,res)=>{
    let {username,worldview}= req.body;
     User.findOneAndUpdate({username},{worldview},{ new: true },(err,u)=>{
        if(err){
            res.status(400).json(err.message);
        }else{
            res.status(200).json(u)
        }
     })

})

router.post("/interests",(req,res)=>{
    let {username,interests} = req.body
    User.findOneAndUpdate({username},{interests},{ new: true },(err,user)=>{
        if(err){
            res.status(400).json(err.message);
        }else{
            res.status(200).json(user)
        }

    })
 
})

router.post("/intro",(req,res)=>{
    let {username,intro} = req.body
    console.log(username,intro);
    User.findOneAndUpdate({username},{intro},{ new: true },(err,user)=>{
        if(err){
            res.status(400).json(err.message);
        }else{
            console.log(user)
            res.status(200).json(user)
        }

    })

})

router.get("/recommend/:id",async (req,res)=>{

    const allUsers = await User.find({}).count(); //get num of all users in the database
    const {id} = req.params; //id of the current user
    
    const user = await User.findById({_id:id}); //find the current user

    
   const userWorldView = user.worldview; //get current user's worldview
   const query = {worldview:{$ne: userWorldView}}; //query all users whose worldviws are different from that of the current user
   let random = Math.floor(Math.random()*allUsers)
   console.log(random)
   const users = await User.find(query).limit(5).skip(random/4); //find all users by the query. limit to 5 random users at a time

    res.status(200).json(users) 
    
 
})



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






module.exports = router;