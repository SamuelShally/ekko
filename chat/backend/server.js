const express = require("express");
const mongoose = require('mongoose');

//Require the routes
const chatRouts = require('./routes/chats');

//Key to log into the database
let mong_uri = "mongodb+srv://samshall:Samo,123@mernapp.abfc3f9.mongodb.net/?retryWrites=true&w=majority";

//start up the express app
const app = express();

app.use((req, res, next) => {
    //log the request as they come in on ther terminal
    console.log(req.path, req.method);
    next();
});

//any requests that comes
app.use(express.json());

mongoose.connect(mong_uri)
    .then(() => {

        //Only listen for request once the app connects to the DB
        app.listen(4001, () =>{
         console.log("Connected to DB and listening on port 4001");
        });
    })
    .catch((error) => {
        console.log(error);
    });

//Routes for the server to listen to 
app.use("/api/chats", chatRouts);

