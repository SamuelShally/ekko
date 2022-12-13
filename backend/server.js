//import express and mongdo db
require('dotenv').config(); //attach env variables to the process object
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const http = require('http');
const sio = require('socket.io');
const userRoutes = require("./routes/users");
const roomRoutes = require("./routes/rooms")
const blogRoutes = require("./routes/blog");


//register the express app
const app = express();

//config the socket io
const server = http.createServer(app)
const io = sio(server, {
    cors: {
        origin: ["https://ekko-frontend.herokuapp.com", "http://localhost:3000"],
        credentials: true,
    }
});

//middleware
app.use(cors()); //request from any dom.
app.use(express.json()); //getting access to req.body
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/blog',blogRoutes)


//show req.path and req.mothod of the request.
// app.use((req, res, next) => {
//     // console.log("middleware")
//     // console.log(req.path, req.method);
//     next();
// })

const router = express.Router();

router.get("/hi", (req, res) => {
    res.status(200).json({ msg: "Ekko" });
})

app.use('/', router)

app.use('/api/users', userRoutes);

app.use('/api/rooms', roomRoutes);



//connecting to mongo db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(process.env.PORT, () => {
            console.log("Connected to db and listening on port", process.env.PORT);
            console.log("Socket listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("Bad news! Something went wrong");
        console.log(error);
});

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

const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const User = require('./models/userModel');

//Database for saving the user session
const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: 'mySessions',
})

//Set up the session cookie to req objects

app.use(
    
    session({
        secret: 'test_user_key', //Str that will sign the cookie 
        resave: false, //New session for every request t/f
        saveUninitialized: false, //save if session is unmodified t/f 
        store: store, //Save session to Database
        cookie: {
            sameSite: "none",
            secure: false, 
            maxAge: 100*60*60,
        }
    })
);

// handle the socket event
io.on('connection', socket => {
    let room = socket.handshake.query.room;
    socket.join(room);
    socket.on('text-message', message => {
        io.to(room).emit('text-message', message)
    });
});
