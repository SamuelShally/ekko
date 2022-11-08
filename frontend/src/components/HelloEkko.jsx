import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fish from '../img/fish.png';
import Navigation from '../routes/Navigation';

const Greeting = () => {

    const [msg, setMsg] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/hi')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMsg(data.msg);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
 
    return (
        <div className="relative w-screen h-screen">
            <div className="relative">
                <Navigation/>
            </div>
            <div className='absolute w-screen top-1/3'>
                <div className="relative">
                <img className="absolute opacity-25 w-4/5 left-1/2 -translate-x-1/2" src={fish} alt="Fish" />
                <div className="relative grid gap-y-12 mx-4">
                    <h1 className="font-readex text-4xl text-center justify-center">
                        Connections<br />built on<br />Exchange of Ideas.
                    </h1>  
                    <div className='grid grid-cols-2 justify-items-center'>
                        <Link to="/learn">
                            <button className="text-xl px-6 justify-items-center btn btn-md sm:btn-sm md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Learn
                            </button>
                        </Link>
                        <Link to="/discover">
                            <button className="text-xl justify-items-center btn btn-md sm:btn-sm md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Discover
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
                
        </div>
            
        </div>
    )

}

export default Greeting;
