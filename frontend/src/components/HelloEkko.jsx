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
        <div className="relative w-screen h-screen z-0">
            {/* navigation bar */}
            <div className="relative z-20">
                <Navigation/>
            </div>

            {/* main section */}
            <div className='absolute w-screen z-10'>
                <div className="relative inset-y-36">
                    <div className="absolute">
                        <img className="relative opacity-25 left-1/2 -translate-x-1/2
                                        w-2/3 sm:w-2/3" src={fish} alt="Fish"/>
                        <div className="absolute top-1/2 -translate-y-1/2">
                            <h1 className="font-readex text-4xl text-left leading-normal px-6 w-full">
                                Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas
                            </h1>  
                        </div>
                    </div>
                    <div className='absolute grid grid-rows-2 gap-y-8 justify-items-start 
                                    mt-80 pb-20 pt-10'>
                        <Link to="/learn">
                            <button className="text-xl px-8 ml-6 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Learn
                            </button>
                        </Link>
                        <Link to="/discover">
                            <button className="text-xl ml-6 px-10 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
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
