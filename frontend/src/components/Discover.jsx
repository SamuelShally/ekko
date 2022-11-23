import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';
import React, { useState, useEffect } from 'react';

const Discover = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/users/getUsers')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="relative h-screen">
            <div className="absolute grid h-3/4 inset-y-20 place-items-center">
                <h1 className="relative w-screen text-4xl text-primary text-center text-bold">Discover</h1>
                {
                    users.map((user, index) => {
                        return (
                            <div key={index} className="relative card card-bordered rounded-3xl bg-accent
                                w-3/4 lg:card-side">
                                {/* <figure className="px-10 pt-10"> */}
                                <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User2" />
                                {/* </figure> */}
                                <div className="relative gap-y-2 card-body items-center text-center text-primary">
                                    <h2 className="card-title text-2xl mt-8">{user.username}</h2>
                                    <h2 className="card-title text-2xl mt-6">{user.email}</h2>
                                    <h3 className='card-title text-1xl mt-6'>{user.worldview}</h3>
                                    <Link to={"/profile/"+user._id}> {/* change it to chatroom */}
                                        <button className="btn align-middle my-8 rounded-full 
                                                bg-primary text-neutral text-xl">
                                            Profile
                                        </button>
                                    </Link>
                                    <Link to={"/chat/"+user.username}> {/* change it to chatroom */}
                                        <button className="btn align-middle my-8 rounded-full 
                                                bg-primary text-neutral text-xl">
                                            Connect
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>

    )
}

export default Discover;
