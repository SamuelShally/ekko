import {useEffect, useState} from 'react'


const ChatForm = () => {
    const [name, setName] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const chat = {name, load};

        //crate post request
        const response = await fetch("/api/chats", {
            method: "POST",
            body: JSON.stringify(chat), 
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok){
            setName("");
            setLoad("");
            setError(null);
            console.log('new workout added', json);
        }
    }
    
    return (
        <form className="create" onSubmit = {handleSubmit}> 
            <h4>New Mssg </h4> 

            <label>Name</label>
            <input 
                type = "text"
                onChange = {(e) => setName(e.target.value)}
                value = {name}
           />
            <br></br>
            <label>Message</label>
            <input 
                type = "text"
                onChange = {(e) => setLoad(e.target.value)}
                value = {load}
           />       
            <br></br>
           <button>Send</button>
        </form>
    )
}

export default ChatForm;