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
            <div className='absolute w-screen h-full inset-y-48'>
                <div className="relative">
                    <div className="absolute">
                        <img className="relative opacity-25 left-1/2 -translate-x-1/2
                                        w-2/3 sm:w-2/3" src={fish} alt="Fish"/>
                        <div className="absolute top-1/2 -translate-y-1/2">
                            <h1 className="font-readex text-4xl text-left leading-normal px-6 w-full">
                                Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas
                            </h1>  
                        </div>
                    </div>
                    <div className='absolute grid grid-rows-2 gap-y-6 left-1/2 -translate-x-1/2 w-screen justify-items-start top-80'>
                        <Link to="/learn">
                            <button className="text-xl px-6 ml-6 btn btn-md md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Learn
                            </button>
                        </Link>
                        <Link to="/discover">
                            <button className="text-xl ml-6 btn btn-md md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Discover
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>
            
        </div>
    )

}

export default Greeting;

{/* <div className="relative grid gap-y-24 mx-4 top-8">
                    <h1 className="font-readex text-4xl text-center leading-normal">
                        Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas.
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
                </div> */}
