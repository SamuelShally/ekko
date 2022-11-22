
import React, { Component } from 'react';
import io from 'socket.io-client'

class ChatRoom extends Component{

    constructor(props) {
        super(props);
        console.log(props);
        let { roomid } = this.props.params;
        console.log(roomid, 'roomid')
        if (!this.socket) {
            this.socket = io('http://localhost:4001', {query: {room: roomid}});
        }
        this.state = {
            inputText: '',
            chatData: []
        }
        this.onRevTextMessage = this.onRevTextMessage.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onfull = this.onfull.bind(this);
        console.log(this.state)
    }

    componentDidMount() {
        this.socket.on('message', this.onMessage);
        this.socket.on('full', this.onfull);
        this.socket.on('text-message', this.onRevTextMessage);

        this.socket.emit('find', {room:this.props.params.roomid})
    }

    componentWillUnmount() {
        this.socket.emit('leave', {room:this.props.params.roomid})
    }

    onMessage(message) {

    }

    onfull() {
        alert("this room is full!")
        window.location.href = "/chatList"
    }

    handleChange(event)  {
        this.setState({
            inputText: event.target.value
        })
    }
    
    onRevTextMessage (msg) {
        console.log('text-message', msg);
        let temp = this.state.chatData;
        temp.push(msg);
        this.setState({
            chatData: temp
        })
    }

    sendMsg () {
        this.socket.emit('text-message', this.state.inputText)
    }
    
    render() {
        return (
            <div className='chat-container'>
                <div>Chat</div>
                <ul
                    className='chatList'
                >
                    {
                        this.state.chatData.map((item, idx) => {
                            return (<div className="card w-96 bg-base-100 shadow-xl" key={idx}>
                                <div className="card-body">
                                    <h2 className="card-title">{item}</h2>
                                </div>
                            </div>)
                        })
                    }
                </ul>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value = {this.state.input}
                        onChange={this.handleChange}/>
                <button className="btn btn-active btn-accent" onClick={this.sendMsg}>Send</button>
            </div>
    
        )
    }


}

export default ChatRoom;