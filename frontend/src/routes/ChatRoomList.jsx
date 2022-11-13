import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ChatRoomList = () => {

    const [room, setRoom] = useState([]);

    useEffect(() => {
        let temp = []
        for (let index = 1; index <= 10; index++) {
            temp.push({
                roomid: index
            })
        }
        setRoom(temp);
    }, [])

    return (
        <div>
        {
            room.map(
                (elemnet, idx) => {
                    return(<div className="relative" key={idx}>
                    <div className="chatcard card card-bordered rounded-3xl bg-accent left-1/2 -translate-x-1/2 shadow-xl
                                    w-3/4 lg:card-side">
                        <div className="card-body items-center text-center text-primary">
                            <h2 className="card-title text-2xl mt-8">Room {elemnet.roomid}</h2>
                            <Link to={"/chat/"+elemnet.roomid}> {/* change it to chatroom */}
                                <button className="btn align-middle my-8 rounded-full 
                                                    bg-primary text-neutral text-xl">
                                    Chat
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>)
                    
                }
            )
        }
        </div>
    )
}

export default ChatRoomList;
