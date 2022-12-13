import { Link } from 'react-router-dom';
import { useAuthContext, user } from "../hooks/useAuthContext";
import userImageHolder from '../img/user-img-holder.png';
import Previous from '../components/Previous';

import React, { useState, useEffect } from 'react';

const Discover = () => {
    // const { user } = useAuthContext()
    const user = JSON.parse(localStorage.getItem('user'));
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!user) {
            alert("Please Login!");
            return;
        }
        fetch(`${process.env.REACT_APP_API_URL}/api/users/getUsers`,{
            method:'GET',
            headers:{
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                // console.log(err);
            });
    }, []);

    return (
        <div className="relative h-screen">

        {/* <div className="absolute grid h-3/4 inset-y-20 place-items-center"> */}
        <h1 className="relative w-screen text-4xl text-primary text-center text-bold p-10">Discover</h1>
        <div className='grid gap-y-4 sm:grid-cols-2 sm:mx-8 max-h-max place-items-center pb-10
                                    lg:grid-cols-3 lg:mx-10 xl:mx-20 2xl:grid-cols-4'>
        

        {users && users.filter(u=>u.username!==user.user.username).map((u, index) => {

            return (
                        // <div className=''>
                            <div key={index} className=" card card-bordered rounded-3xl bg-accent
                                w-3/4 sm:max-w-xs md:max-w-sm lg:md:max-w-sm">
                                {/* <figure className="px-10 pt-10"> */}
                                <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User2" />
                                {/* </figure> */}
                                <div className="relative gap-y-2 card-body items-center text-center text-primary">
                                    <h2 className="card-title text-2xl mt-8">{u.username}</h2>
                                    <h2 className="card-title text-2xl mt-6">{u.email}</h2>
                                    <h3 className='card-title text-1xl mt-6'>{u.worldview}</h3>
                                    <h3 className='card-title text-1xl mt-6'>{u.intro}</h3>
                                    <div>
                                        <Link to={"/profile/"+u.username}> {/* change it to chatroom */}
                                            <button className="btn align-middle my-8 rounded-full 
                                                    bg-primary text-neutral text-xl">
                                                Profile
                                            </button>
                                        </Link>
                                        <Link to={"/chat/" + btoa([
                                            user.user.username,
                                            u.username,
                                        ].sort().join(","))}> {/* change it to chatroom */}
                                            <button className="btn align-middle my-8 rounded-full 
                                                    bg-primary text-neutral text-xl">
                                                Chat
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                    //   </div>

                    )
                    }

            
            
        )}
                
                    
                    
               
                    

           
           
        </div>
       
            
        </div>

    )
}

export default Discover;

