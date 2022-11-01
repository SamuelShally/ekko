import {useEffect, useState} from 'react'


const Home = () => {
    const [chats, setChats] = useState(null);

    //Get chats from the API on the backent
    useEffect(() => {
        const fetchChats = async () => {
            const response = await fetch('/api/chats');
            const json = await response.json();

            if(response.ok){
                setChats(json) 
            }
        }

        fetchChats();
    }, []);
 
    return (
        <div  className = "home">
            <div className="loadChats"> 
                {chats && chats.map((chat) => (
                    <p key={chat._id}>{chat.name}: {chat.load}</p>
                ))}
            </div>
        </div>
    )
}

export default Home;