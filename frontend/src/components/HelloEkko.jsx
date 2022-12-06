import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fish from '../img/fish.png';
import Navigation from '../routes/Navigation';
import { useAuthContext } from "../hooks/useAuthContext";

const Greeting = () => {
    const { user } = useAuthContext();
 
    return (
        <div className="relative w-screen h-screen">

            {/* navigation bar */}
            <div className="relative z-30">
                <Navigation/>
            </div>

            {/* big wrapper */}
            <div className='relative'>
                <div className='absolute w-screen h-screen z-20 sm:mt-10'>
                    <div className="relative inset-y-24">
                        {/* fish img + msg */}
                        <div className="absolute w-screen mb-10">
                            <img className="relative opacity-25 
                                            left-10 w-72
                                            sm:w-80 sm:left-0 sm:mx-auto"
                                 src={fish} alt="Fish" />
                            <div className="absolute top-1/2 -translate-y-1/2">
                                <h1 className="w-screen font-readex text-4xl text-left leading-normal px-6 
                                               sm:text-5xl sm:leading-relaxed sm:text-center">
                                    Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas
                                </h1>  
                            </div>
                        </div>

                        {/* Learn, Discover  */}
                        <div className='absolute grid grid-rows-2 gap-y-8 justify-items-start 
                                        mt-80 pb-32 pt-16
                                        sm:pt-24 sm:w-full sm:justify-items-center'>
                            <Link to="/discover">
                                <button className="px-8 text-2xl ml-6 btn btn-lg shadow-lg
                                                   sm:px-32 
                                                   md:px-44 
                                                   lg:px-58 lg:h-14 
                                                   
                                                   bg-secondary text-neutral rounded-full 
                                                   hover:bg-neutral hover:text-secondary hover:shadow-inner"
                                        onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                                        Discover
                                </button>
                            </Link>
                            <Link to="/learn">
                                <button className="px-8 text-2xl ml-6 btn btn-lg shadow-lg
                                                   sm:px-36 
                                                   md:px-48 
                                                   lg:px-62 
                                                   bg-neutral border-4 border-secondary text-secondary rounded-full
                                                   hover:bg-secondary hover:text-neutral hover:border-primary hover:shadow-inner"
                                        onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                                        Learn
                                </button>
                            </Link>
                            {/* <div className='w-full h-96'>
                            <p>hi</p>
                            </div> */}
                        </div>   
                        
                    </div>    {/* fish, button container */}
                </div>
             </div>
        </div>
    )
}

export default Greeting;
