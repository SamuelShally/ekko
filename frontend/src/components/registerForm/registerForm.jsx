import { useState } from 'react';
import React from 'react';

const RegisterForm = () =>{

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);

    const submitForm = async (e)=>{
        e.preventDefault();
        const user = {username,email,password};
        

        const response = await fetch('http://localhost:4000/api/users',{
            method:'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type' : "application/json"
            }
        });
        console.log(response);
        const json = await response.json();
        
        if(!response.ok){
            console.log(json.error);
            setError(json.error);
        }
        if(response.ok){
            setUsername('');
            setEmail('');
            setPassword('');
            setError(null);
            console.log("New user added");
        }

    }
 


    return (
        <div>
            <h1>Welcome to our app! Please sign up with your username, email and password </h1>
            <form className = "createForm" onSubmit = {submitForm}>
                <label> Username</label>
                <input 
                
                type="text"
                value={username} 
                onChange={(e)=>setUsername(e.target.value)}
                />

                <label> Email </label>
                <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} />

                <label> Password</label>
                <input 
                type ="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} />

                <button> Sign up </button>
                { error && <div className="error">{error}</div>}
            </form>
        </div>

    )

}

export default RegisterForm;