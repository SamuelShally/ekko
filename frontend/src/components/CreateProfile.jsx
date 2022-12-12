import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';
import { useAuthContext, user } from "../hooks/useAuthContext";
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import React from 'react';

const CreateProfile = () => {
    const { user } = useAuthContext()
    const [worldview,setWorldView] = useState('');
    const navigate = useNavigate();
    if(user){
        console.log("user",user.user)
    }
   
  
    

    const submitView = async(e) =>{
        e.preventDefault();
        const newUser = {username:user.user.username,worldview}
        
        console.log(newUser);

        const response = await fetch("https://ekko-backend.herokuapp.com/api/users/worldview",{
            method:'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();
        if(!response.ok){
            console.log(json.error);
        }
        if(response.ok){
            setWorldView('');
            console.log("worldview set");

            let newAuthContext = JSON.parse(localStorage.getItem("user"));
            newAuthContext.user.worldview = json.worldview;
            localStorage.setItem('user', JSON.stringify(newAuthContext));
            setTimeout("location.reload(true);",1500);
            navigate('/quiz');

        }

    }

    return (
        // wrapper div
        <div className="relative h-screen bg-accent">

           

        
            { user && user.user && user.user.username &&
                <div className="absolute grid h-3/4 inset-y-20 bg-accent place-items-center">
                    <h1 className="relative w-screen pl-11 pb-7 text-3xl text-primary text-left sm:text-center sm:p-0 font-bold">
                        Hey, {user.user.username}<br /><span className="font-light text-2xl">Set up your profile!</span> {/* To do: Ekko -> replace with registered username! */}
                    </h1>
                    {/* card */}
                    <div className="relative card card-bordered rounded-3xl bg-neutral shadow-xl
                                    w-3/4 -mt-4 sm:max-w-xs md:max-w-sm">
                        {/* user profile img */} 
                        {/* <input className="form-control rounded-3xl mt-10 mx-8" type="file" id="profilepic" name="profilepic"
                                accept='.png, .jpeg, .jpg'/> */}
                        <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User1" />
                        {/* card body */}
                        <div className="relative gap-y-2 card-body items-center text-center text-primary">
                            {/* <h2 className="card-title text-3xl mt-8">User1</h2> */}
                            {/* <div className="w-full mt-8">
                                <input type="text" placeholder="Enter username" className="input input-bordered rounded-full max-w-xs" />
                            </div> */}
                            <div className="w-full mt-6">
                                <h2 className="text-2xl">{user.user.username}</h2> {/* To do: Ekko -> replace with registered username! */}

                            </div>
                            <div className="form-control mt-4">
                                <select 
                                className="select select-bordered rounded-full px-6"
                                value={worldview}
                                onChange={(e)=>{
                                    setWorldView(e.target.value)
                                    }}>
                                    <option >Choose your worldview</option>
                                    <option value="Progressive">Progressive</option>
                                    <option value="Liberal">Liberal</option>
                                    <option value="Conservative">Conservative</option>
                                    <option value="Christian">Christian</option>
                                    <option value="other">other</option>
                                </select>
                                </div>
                           
                                <button className="btn my-8 rounded-full 
                                                    bg-primary text-neutral text-xl"
                                            onClick={submitView}>
                                    Next
                                </button>
                        
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateProfile;