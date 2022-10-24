//import express and mongdo db
require('dotenv').config(); //attach env variables to the process object
const express = require('express');
const mongoose = require('mongoose');


//register the express app
const app = express();

//middleware
app.use(express.json); //getting access to req.body

//show req.path and req.mothod of the request.
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})


//connecting to mongo db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{fr
        app.listen(process.env.PORT,()=>{
            console.log("Connected to db and listening on port",process.env.PORT);
        });
    })
    .catch((error)=>{
        console.log("Bad news! Something went wrong");
        console.log(error);
    })





