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


/* **********SESSIONS FRAMEWORK********* */
//All changes to Server.js are below this line
//Please do NPM install. New packages were used.

/*
    How this works (I think): 
    
    We will set a cookie on the front end that will remember 
    if we're logged in or not - or whatever else we want it to remember.

    This cookie will then compare against an identical copy saved to our mongoDB 
    database. If it exists and isAuth = true, we can be logged in as that user
*/

const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const User = require('./models/userModel');

//Database for saving the user session
const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: 'mySessions',
})


//check if user is logged in, if not: redirect to log in page
const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
        // TODO: Redirect the user back to log in page

          /*
            Remark: I don't know where to redirect to right now. 
            I need to understand the combination between front and backend better
        */
    }

}

//Set up the session cookie
app.use(
    
    session({
        secret: 'samuel_test', //Str that will sign the cookie 
        resave: false, //New session for every request t/f
        saveUninitialized: true, //save if session is unmodified t/f 
        store: store //Save session to Database
        console.log("got here");
    })
);


app.use('/api/users', userRoutes);

/*
//For backend sessions testing  
app.get("/", (req, res) => {
    //Temp for allowing access
    req.session.isAuth = true; 
    res.send("Testing sessions");
});
*/

