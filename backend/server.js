//import express and mongdo db
require('dotenv').config(); //attach env variables to the process object
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const http = require('http');
const sio = require('socket.io');


//register the express app
const app = express();

//config the socket io
const port = 4000;
const server = http.createServer(app).listen(port)
const io = sio(server);

//middleware
app.use(cors())
app.use(express.json()); //getting access to req.body

//show req.path and req.mothod of the request.
app.use((req, res, next) => {
    console.log("middleware")
    console.log(req.path, req.method);
    next();
})

const router = express.Router();

router.get("/hi", (req, res) => {
    res.status(200).json({ msg: "Ekko" });
})

app.use('/', router)

//connecting to mongo db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to db and listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("Bad news! Something went wrong");
        console.log(error);
    })

// handle the socket event
io.sockets.on('connection', socket => {
    console.log('connect');
    let room = '';
    // send message
    socket.on('message', message => socket.broadcast.to(room).emit('message', message));

    socket.on('text-message', message => {
        console.log(message, 'text-message');
        console.log(room, 'room');
        io.emit('text-message', message)
    });

    // leave room
    socket.on('leave', () => {
        // sending to others
        socket.broadcast.to(room).emit('hangup');
        socket.leave(room);
    });

    // find room
    socket.on('find', () => {
        const url = socket.request.headers.referer.split('/');
        room = url[url.length - 1];
        const sr = io.sockets.adapter.rooms[room];
        if (sr === undefined) {
            // no room with such name is found so create it
            socket.join(room);
            socket.emit('create');
        } else if (sr.length === 1) {
            // room only for two max
            socket.emit('join');
        } else {
            socket.emit('full', room);
        }
    });
});