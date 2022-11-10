import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'

const ChatRoom = () => {

    const [socket, setSocket] = useState(io('http://localhost:4000'));
    const [chatData, setChatData] = useState([]);
    const [input, inputChange] = useState("")

    const handleChange = (event) => {
        inputChange(event.target.value);
    }
    const onRevTextMessage = (msg) => {
        console.log('text-message', msg)
        chatData.push(msg);
        setChatData(chatData);
    }

    const sendMsg = (socket) => {
        socket.emit('text-message', input)
    }
    
    socket.on('text-message', onRevTextMessage);

    useEffect(() => {
        
    })

    return (
        <div className='chat-container'>
            <div>Chat</div>
            <ul
                className='chatList'
            >
                {
                    chatData.map((item, idx) => {
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{item}</h2>
                            </div>
                        </div>
                    })
                }
            </ul>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value = {input}
                    onChange={handleChange}/>
            <button className="btn btn-active btn-accent" onClick={() => sendMsg(socket)}>Send</button>
        </div>

    )
}

export default ChatRoom;