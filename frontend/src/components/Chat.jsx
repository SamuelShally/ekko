import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// const Chat = () => {
//     return (
//         <div>
//             <div className='p-6 text-left'>
//                 <h1 className='text-4xl'>Chats</h1>
//                 <p className='text-center mt-52 text-3xl'>.. see you next week!</p>
//             </div>
            
//         </div>
//     )
// }

// export default Chat;


const Chat = () => {

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
            <div className='p-6 text-left'>
                <h1 className='text-3xl'>Chats</h1>
            </div>

            <div className='grid gap-y-4 my-10'>
                {
                    room.map(
                        (elemnet, idx) => {
                            return(<div className="relative" key={idx}>
                                <div className="chatcard card border-1 border-black rounded-3xl bg-neutral left-1/2 -translate-x-1/2 shadow-2xl
                                                w-3/5 max-w-sm">
                                    <div className="card-body items-center text-center text-primary">
                                        <h2 className="card-title text-2xl mt-8">Room {elemnet.roomid}</h2>
                                        <Link to={"/chat/"+elemnet.roomid}> {/* change it to chatroom */}
                                            <button className="btn align-middle my-8 rounded-full 
                                                                bg-primary text-neutral text-lg font-light">
                                                Start
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)   
                        }
                    )
                }
            </div>

        </div>
    )
}

export default Chat;
