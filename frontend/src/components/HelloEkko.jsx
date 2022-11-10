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
            {/* <img className = "fixed mx-auto h-auto opacity-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={fish} alt="Fish" /> */}
            <div className='absolute w-screen top-1/3 md:top-2'>
                <div className="relative">
                <img className="absolute opacity-25 w-3/4 md:w-1/3 lg:w-2/5 left-1/2 -translate-x-1/2" src={fish} alt="Fish" />
                <div className="relative grid gap-y-10 md:top-1/2 lg:top-1/2">
                    <h1 className="font-readex text-4xl text-center justify-center">
                        Connections Built on<br />Exchange of Ideas.
                    </h1>  
                    <div className='grid grid-cols-3 justify-items-center'>
                        <Link to="/learn">
                            <button className="text-xl justify-items-center btn btn-md sm:btn-sm md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Learn
                            </button>
                        </Link>
                        <Link to="/chat/1">
                            <button className="text-xl justify-items-center btn btn-md sm:btn-sm md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Chat
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
