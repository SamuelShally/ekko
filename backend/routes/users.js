const User = require('../models/userModel');
const mongoose = require('mongoose');
const express = require("express");
var md5 = require('md5');

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

router.post('/', (req,res)=>{
    const {username,email,password} = req.body;

    //encrypt the password before saving it
    let encrypedPW = md5(password);
  
  
    
    //save a new user with encrypted password
    User.create({username,email, password: encrypedPW}, (err, user) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        console.log(user);
        res.status(200).json(user);

    });    
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
Log user in to the system 
(JSON response can be modified to send back some sort of user DB ID if
 login is successful and actually log in the user)
*/
router.post('/login', async(req, res) => {
    let {username, password} = req.body;
    const allUsers = await User.find({}).sort({createdAt: 1});

    let failed = true;
    //Find user via username -> hash password
    for(let x = 0; x<allUsers.length; x++){

        //If username match
        if (allUsers[x].username == username){
            let userNameExists = true;

            //hash entered password and check agaist the password in the DB
            password = md5(password);

            if(allUsers[x].encrypedPW == password){
                failed = false;
            }else{
                failed = true;
            }

            break;
        }
    }

    if(!failed){
        res.status(200).json({"status":"success"});
    }else{
        res.status(400).json({"status": "failed"});
    }
    
});


module.exports = router;