import { Link } from 'react-router-dom';
import ekkoO from '../img/ekko-o-512.png';
import { useState } from 'react';
import React from 'react';

const RegisterForm = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const submitForm= async(e) =>{
        e.preventDefault();
        const user = {username,email,password};
        const response = await fetch("http://localhost:4000/api/users",{
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
        }
        if(response.ok){
            setUsername('');
            setEmail('');
            setPassword('');
            console.log("New User Added");
        }

    }



    return (
        <div>
            {/* <div className="relative z-20"><img src={ekkoO} className="relative z-10 w-1/4 place-content-center ml-4 mt-4"/></div> */}
            <div className="relative z-0 grid w-screen h-screen gap-y-16 place-content-center">
                <h1 className="text-3xl font-semibold">Get started</h1>
                <form  className="grid gap-6">
                    <div className="form-control w-3/4 max-w-xs">
                        <label className="label"/>
                    <input type="text" placeholder="Username"
                            className="input w-full max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                    </div>
                    <div className="form-control w-72 max-w-xs">
                        <label className="label"/>
                    <input type="text" placeholder="Email address"
                            className="input w-full max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"/>
                        <input type="text" placeholder="Set password"
                            className="input w-full max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <Link to="/profile">
                    <button
                        className="text-lg text-white rounded-full bg-primary
                        px-20 w-80 btn-md md:btn-lg lg:btn-lg"
                        onClick={submitForm}
                    >
                        Create an account
                    </button>
                </Link>
                </form>
               
                
            </div>
        </div>
    )

}

export default RegisterForm;