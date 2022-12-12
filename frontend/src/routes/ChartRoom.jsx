
import React, { Component } from 'react';
import io from 'socket.io-client';

class ChatRoom extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        let { roomid } = this.props.params;
        console.log(roomid, 'roomid')
        if (!this.socket) {
            this.socket = io('http://localhost:4001', { query: { room: roomid } });
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
        this.getCurrentTime = this.getCurrentTime.bind(this);
        this.zeroFill = this.zeroFill.bind(this);
        console.log(this.state)
    }

    componentDidMount() {
        this.socket.on('message', this.onMessage);
        this.socket.on('full', this.onfull);
        this.socket.on('text-message', this.onRevTextMessage);

        this.socket.emit('find', { room: this.props.params.roomid })
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user) {
            alert("Please login first!")
        }
        console.log(this.user)
    }

    componentWillUnmount() {
        this.socket.emit('leave', { room: this.props.params.roomid })
    }

    onMessage(message) {

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
        console.log('text-message', msg);
        let temp = this.state.chatData;
        temp.push(msg);
        this.setState({
            chatData: temp
        })
    }

    getCurrentTime() {
        var date = new Date();
        var month = this.zeroFill(date.getMonth() + 1);
        var day = this.zeroFill(date.getDate());
        var hour = this.zeroFill(date.getHours());
        var minute = this.zeroFill(date.getMinutes());
        var second = this.zeroFill(date.getSeconds());
        
        var curTime = date.getFullYear() + "-" + month + "-" + day
                + " " + hour + ":" + minute + ":" + second;
        
        return curTime;
    }

    zeroFill(i){
        if (i >= 0 && i <= 9) {
            return "0" + i;
        } else {
            return i;
        }
    }

    sendMsg() {
        console.log(this.getCurrentTime())
        this.socket.emit('text-message', { 'user': this.user.username, 'msg': this.state.inputText, 'time': this.getCurrentTime()})
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
                                                <time className="text-xs opacity-50">{item.time}</time>
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
                                                <time className="text-xs opacity-50">{item.time}</time>
                                            </div>
                                            <div className="chat-bubble">{item.msg}</div>
                                        </div>
                                    </div>
    
                                )
                            }
                            
                        })
                    }
                </ul>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={this.state.input}
                    onChange={this.handleChange} />
                <button className="btn btn-active btn-accent" onClick={this.sendMsg}>Send</button>
            </div>

        )
    }


}

export default ChatRoom;