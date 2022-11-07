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
        <div className="max-w-screen max-h-screen">
            <img className = "fixed mx-auto h-auto opacity-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={fish} alt="Fish" />
            <div className = "font-readex">
                {/* <h1 className='text-lg'>Hello {msg}</h1> */}
                <h1 className="absolute text-4xl text-center top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Connections Built on<br />Exchange of Ideas.
                </h1>
            </div> 
            <Navigation></Navigation>
            <Link to="/learn">
                <button className="btn absolute btn-xs top-1/2 right-1/3 sm:btn-sm md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                    Learn
                </button>
            </Link>
            <Link to="/discover">
                <button className="btn absolute btn-xs top-1/2 right-1/3 sm:btn-sm md:btn-md lg:btn-lg bg-secondary text-neutral rounded-full">
                    Discover
                </button>
            </Link>
            

        </div>
    )

}

export default Greeting;