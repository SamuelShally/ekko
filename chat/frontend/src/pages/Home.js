import {useEffect, useState} from 'react'

import ChatForm from "../components/form";

const GetChats = () => {
    const [chats, setChats] = useState(null);
    let count = 0;

    //Get chats from the API on the backent
    useEffect(() => {

            const fetchChats = async () => {
                const response = await fetch('/api/chats');
                const json = await response.json();

                if(response.ok){
                    setChats(json) 
                }
        };
                fetchChats();
        }, []);

    return chats;
}

const Home = () => {
    let chats = GetChats();
    
    return (
        <div  className = "home">
            <div className="loadChats"> 
                {chats && chats.map((chat) => (
                    <p key={chat._id}>{chat.name}: {chat.load}</p>
                ))}
            </div>
            <ChatForm /> 
        </div>
    )
}

export default Home;