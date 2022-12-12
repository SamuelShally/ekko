import { Link } from 'react-router-dom';
import React from 'react';
// left & right margins: 6

import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
    const { user } =useAuthContext();
    const [intro,setIntro] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const newUser = {username:user.user.username,intro};

        const response = await fetch("https://ekko-backend.herokuapp.com/api/users/intro",{
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
            setIntro('');
            console.log("Intro set");
            let newAuthContext = JSON.parse(localStorage.getItem("user"));
            newAuthContext.user.intro = json.intro
            localStorage.setItem('user', JSON.stringify(newAuthContext));
            setTimeout("location.reload(true);",1500);
            navigate('/interest');

        }

    }




    return (
      
        <div className="bg-white">
            <div className="relative h-screen pt-20">
                <h1 className='pl-6 pb-6 font-bold text-3xl'>Tell us more<br/>about yourself.<br/>
                    {/* <span className='font-light text-xl'>Tell us more about yourself</span> */}
                </h1>
            {/* option wrapper div */}
            <div className="relative bg-neutral h-full rounded-tl-3xl rounded-tr-3xl">
                {/* options */}
                <div className="grid gap-14 pt-14 place-items-center">
                <div className="form-control">
                <textarea className="textarea" placeholder="Bio"
                value={intro}
                onChange={(e)=>{
                    console.log(e.target.value)
                    setIntro(e.target.value)}}
                ></textarea>
                </div> 
                </div>
             
              
                <Link to="/people-like-me"> 
                    <div className="w-full flex flex-row-reverse mt-10">
                        <button className="btn rounded-full flex-none mr-6 
                                            bg-primary text-neutral text-xl"
                        onClick={handleSubmit}>
                            Next
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Quiz;