import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <header>
            <div className='container'>
                <div className = "greet">
                    <h1>Hello {msg}</h1>
                </div>
                
            </div>
        </header>
    )

}

export default Greeting;