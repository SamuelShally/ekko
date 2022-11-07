//File to define our routs
const express = require('express');
const router = express.Router();
const Chats = require('../modles/chatModel');

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

router.post('/login', async(req, res) => {
    const {name, password} = req.body;

    res.status(200).json({name, password});
}); 

//export the router
module.exports = router;

