import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fish from '../img/fish.png';
import Navigation from '../routes/Navigation';

const Greeting = () => {
 
    return (
        <div className="relative w-screen h-screen mb-80">
            {/* navigation bar */}
            <div className="relative z-30">
                <Navigation/>
            </div>

            {/* big wrapper */}
            <div className="mt-24">
                {/* fish img + msg */}
                <div className="h-96">
                    <img className="relative opacity-25 max-h-max
                                    w-2/3 sm:w-2/3" src={fish} alt="Fish"/>
                    <div className="absolute top-1/2 -translate-y-1/2 max-h-max">
                            <h1 className="font-readex text-4xl text-left leading-normal px-6 w-full">
                                Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas
                            </h1>  
                    </div>
                </div>

                {/* middle text */}                
                <div className="h-96 px-6">
                    <h1 className="text-3xl font-bold">We help make your social interaction meaningful</h1>
                </div>

                {/* Learn, Discover  */}
                <div className='h-96 flex flex-col space-y-6'>
                    <Link to="/learn">
                        <button className="text-2xl px-8 ml-6 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full"
                                onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                                Learn
                        </button>
                    </Link>
                    <Link to="/discover">
                        <button className="text-2xl ml-6 px-10 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full"
                                onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                                Discover
                        </button>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default Greeting;

{/* main wrapper */}
// {/* <div className='relative'>
// <div className='absolute w-screen z-20'>
//     <div className="relative inset-y-36">

//         {/* fish img + msg */}
//         <div className="absolute">
//             <img className="relative opacity-25 left-1/2 -translate-x-1/2
//                             w-2/3 sm:w-2/3" src={fish} alt="Fish"/>
//             <div className="absolute top-1/2 -translate-y-1/2">
//                 <h1 className="font-readex text-4xl text-left leading-normal px-6 w-full">
//                     Connections<br /><span className="font-light">built on</span><br />Exchange of Ideas
//                 </h1>  
//             </div>
//         </div>

//         {/* <div className="relative top-3">
//             <h1>We help make your social interaction meaningful</h1>
//         </div> */}

//         {/* Learn & Discover buttons */}
//         <div className='absolute grid grid-rows-2 gap-y-8 justify-items-start 
//                         mt-80 mb-20 pt-10'>
//             <Link to="/learn">
//                 <button className="text-2xl px-8 ml-6 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full"
//                         onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
//                     Learn
//                 </button>
//             </Link>
//             <Link to="/discover">
//                 <button className="text-2xl ml-6 px-10 btn btn-lg md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full"
//                         onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
//                     Discover
//                 </button>
//             </Link>
//         </div>
//     </div> 
// </div>
// </div>
// </div> */}