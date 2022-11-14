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


/* **********SESSIONS FRAMEWORK********* */
//All changes to Server.js are below this line
//Please do NPM install. New packages were used.

const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const User = require('./models/userModel');

//Database for saving the user session
const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: 'mySessions',
})

//check if user is logged in
const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
        //TODO: Redirect the user to the log-in page if user is not signed in
    }

}

//Set up the session cookie
app.use(session({
    secret: 'test', //Str that will sign the cookie 
    resave: false, //New session for every request t/f
    saveUninitialized: false, //save if session is unmodified t/f 
    store: store, //Save session to Database
}))


/*

//For backend sessions testing  
app.get("/", (req, res) => {
    //Temp for allowing access
    req.session.isAuth = true; 
    res.send("Testing sessions");
});

*/