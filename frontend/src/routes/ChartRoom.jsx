
import React, { Component } from 'react';
import io from 'socket.io-client';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        let { roomid } = this.props.params;
        // console.log(roomid, 'roomid');
        if (!this.socket) {
            this.socket = io(`${process.env.REACT_APP_API_URL}`, { query: { room: roomid } });
        }
        this.state = {
            inputText: '',
            chatData: []
        }
        this.onRevTextMessage = this.onRevTextMessage.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onfull = this.onfull.bind(this);
        // console.log(this.state)
    }

    componentDidMount() {
        this.socket.on('full', this.onfull);
        this.socket.on('text-message', this.onRevTextMessage);

        this.socket.emit('find', { room: this.props.params.roomid });
        this.user = JSON.parse(localStorage.getItem('user')).user;
        if (!this.user) {
            alert("Please login first!")
        };
        // console.log(this.user)

        // Extra checks if this is a private chat room between 2 users
        let users;
        try {
            users = atob(this.props.params.roomid).split(",");
        } catch {
            users = [];
        }
        if (users.length === 2 && !users.includes(this.user.username)) {
            alert("You are not allowed to be in this chat room!");
        }
    }

    componentWillUnmount() {
        this.socket.emit('leave', { room: this.props.params.roomid })
    }

    onfull() {
        alert("this room is full!")
        window.location.href = "/chatList"
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    onRevTextMessage(msg) {
        // console.log('text-message', msg);
        this.setState({
            chatData: [...this.state.chatData, msg],
        })
    }

    sendMsg() {
        // console.log("username", this.user.username);

        this.socket.emit('text-message', { 
            user: this.user.username, 
            msg: this.state.inputText,
        })
        
        this.setState({
            inputText: '',
        })

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
                            if (item.user == this.user.username) {
                                return (
                                    <div key={idx}>
                                        <div className="chat chat-end">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {item.user}
                                            </div>
                                            <div className="chat-bubble">{item.msg}</div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={idx}>
                                        <div className="chat chat-start">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {item.user}
                                            </div>
                                            <div className="chat-bubble">{item.msg}</div>
                                        </div>
                                    </div>
    
                                )
                            }
                            
                        })
                    }
                </ul>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={this.state.inputText}
                    onChange={this.handleChange} />
                <button className="btn btn-active btn-accent" onClick={this.sendMsg}>Send</button>
            </div>

        )
    }


}

export default ChatRoom;