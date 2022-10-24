//import express and mongdo db
require('dotenv').config(); //attach env variables to the process object
const express = require('express');
const mongoose = require('mongoose');


//register the express app
const app = express();

app.get("/",(req,res)=>{
    res.json({msg:"hello"})
})

app.listen(process.env.PORT,()=>{
    console.log("Connected",process.env.PORT);
});

