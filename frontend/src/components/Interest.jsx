
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Interest = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [interests,setInterests] = useState([]);

    useEffect(()=>{
        console.log(interests)

    },[interests])

  

    const handleLabel = (e) =>{
        if(interests.includes(e.target.value)){
            console.log("has it");
            const label = e.target.value
            const result = interests.filter((interest)=>{
                return interest!== label;
            })

            setInterests(result)
          
           
        }else{
            console.log("doesn't have it")
            setInterests(cur=>[...cur,e.target.value])
        }

    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const newUser = {username:user.username,interests};
        const response = await fetch("http://localhost:4000/api/users/interests",{
            method:'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = response.json();
        if(!response.ok){
            console.log(json.error);
        }
        if(response.ok){
            setInterests([]);
            console.log("interests set");
            navigate('/quiz');

        }


    }

    return (
        <div className="relative bg-white h-screen mb-40 z-0">
            <div className="relative h-screen top-20">
                {/* question */}
                <h1 className="relative font-bold text-3xl text-primary mb-10 ml-6">
                    Which social issues<br />spark your interest?</h1>
                {/* option-wrapper div */}
                <div className="relative bg-neutral h-full rounded-tl-3xl rounded-tr-3xl">
                    <h2 className="text-secondary text-xl font-light pt-10 mb-6 ml-4">Choose up to 3</h2>
                    {/* options */}
                    <div className="grid gap-6 inset-x-7 ml-6">
                        <button className="btn bg-secondary btn-md rounded-full w-5/12 
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg"
                                value="election"
                                onClick={handleLabel}>+ election
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-6/12
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg"
                                value="immigration"
                                onClick={handleLabel}>+ immigration
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg"
                                value="reproductive rights"
                                onClick={handleLabel}>+ reproductive rights
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg"
                                value="racial discrimination"
                                onClick={handleLabel}>+ racial discrimination
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-4/12 pr-2
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg"
                                value="LGBTQ"
                                onClick={handleLabel}>+ LGBTQ
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg"
                                value="economic inequality"
                                onClick={handleLabel}>+ economic inequality
                        </button>
                    </div>
                    <Link to="/quiz"> 
                        <div className="w-full flex flex-row-reverse mt-10 z-20">
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
        
    );
};

export default Interest;