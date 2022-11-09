import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fish from '../img/fish.png';
import Navigation from '../routes/Navigation';
import ekkoO from '../img/ekko-o.svg';

const Greeting = () => {
 
    return (
        <div className="relative w-screen z-0 scroll-smooth">
            {/* navigation bar */}
            <div className="relative z-30">
                <Navigation/>
            </div>

            {/* main wrapper */}
            <div className='absolute w-screen z-20'>
                <div className="relative inset-y-36">

                    {/* fish img + msg */}
                    <div className="absolute">
                        <img className="relative opacity-25 left-1/2 -translate-x-1/2
                                        w-2/3 sm:w-2/3" src={fish} alt="Fish"/>
                        <div className="absolute top-1/2 -translate-y-1/2">
                            <h1 className="font-readex text-4xl text-left leading-normal px-6 w-full">
                                Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas
                            </h1>  
                        </div>
                    </div>

                    {/* Learn & Discover buttons */}
                    <div className='absolute grid grid-rows-2 gap-y-8 justify-items-start 
                                    mt-80 pb-20 pt-10'>
                        <Link to="/learn">
                            <button className="text-2xl px-8 ml-6 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                                Learn
                            </button>
                        </Link>
                        <Link to="/discover">
                            <button className="text-2xl ml-6 px-10 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
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
