const Room = require('../models/roomModel');
const mongoose = require('mongoose');
const express = require("express");
const validator = require("validator");
var md5 = require('md5');

//for external api calls
const request = require('request');

const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session)

const router = express.Router();

router.get('/getRooms',(req,res)=>{
    Room.find({}, (err, rooms) => {
        if (err) {
            res.status(400).json({error: err.message});
        }
        res.status(200).json(rooms);
    });
});

router.post('/createRoom',(req,res)=>{
    // console.log(User);
    const newRoom = new Room({
        firstUser: req.firstUser,
        secondUser: req.secondUser
    })

    newRoom.save((err, res) => {
        if (err) res.status(400).json({error: err.message});
        else res.status(200).json(res);
    });
});

module.exports = router;

