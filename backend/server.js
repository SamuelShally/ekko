//import express and mongdo db
require('dotenv').config(); //attach env variables to the process object
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");


//register the express app
const app = express();

//middleware
app.use(cors())
app.use(express.json()); //getting access to req.body

//show req.path and req.mothod of the request.
app.use((req,res,next)=>{
    console.log("middleware")
    console.log(req.path,req.method);
    next();
})



app.use('/api/users', userRoutes);

//connecting to mongo db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Connected to db and listening on port",process.env.PORT);
        });
    })
    .catch((error)=>{
        console.log("Bad news! Something went wrong");
        console.log(error);
    })
