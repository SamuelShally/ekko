//File to define our routs
const express = require('express');
const router = express.Router();
const Chats = require('../modles/chatModel');
const UserDB = require('../modles/userModel');
var md5 = require('md5');

//Get all chats at this route
router.get('/', async (req,res) => {
    const allChats = await Chats.find({}).sort({createdAt: 1});
    res.status(200).json(allChats);
});

//Post new chats at this route
router.post('/', async(req,res) => {
    // res.status(200).json({mssg: "post Request"});

    //Create the workout
    const {name, load} = req.body;

    //add to db
    try{
        const mssg = await Chats.create({name, load}); 
        res.status(200).json(mssg);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

//Recives a user name and log in
router.post('/createUser', async(req, res) => {

    let {name, password} = req.body;
    const allUsers = await UserDB.find({}).sort({createdAt: 1});

    let userNameExists = false;
    //See if user name exists, if yes -> return failed
    for(let x = 0; x<allUsers.length; x++){
        if(allUsers[x].name == name){
            userNameExists = true;
        }
    }

    //hash the password
    password = md5(password);

    // username does not exist, hash password and save it to db
    if(!userNameExists){
        try{
            const saveUser = await UserDB.create({name, password});
            res.status(200).json({"status":"success"});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }else{
        res.status(400).json({"status": "failed"});
    }
}); 

//export the router
module.exports = router;


