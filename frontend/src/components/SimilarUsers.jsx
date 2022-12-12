import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// left & right margins: 6
import { useAuthContext } from "../hooks/useAuthContext";
import UserDetails from './UserDetails';




const SimilarUsers = () => {
    const {user} = useAuthContext();
    const [similarUsers,setSimliarUsers] = useState([]);

   


    useEffect(()=>{
        if(user){}
        
        const fetchSimilarUsers = async() => {
        
           
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/recommend/${user.user._id}`,{
                headers:{
                    'Authorization':`Bearer ${user.token}`,
                }
            });

            const json = await response.json();
            // console.log(json)
            setSimliarUsers(json)
        }

        if(user){
            fetchSimilarUsers();
        }
        
    },[user])

   



    return (
        <div className="bg-white">
            <div className="relative h-screen pt-20">
                <h1 className='pl-6 pb-6 font-bold text-3xl
                                sm:text-center '>People like me<br />
                    <span className='font-light text-xl'>Connect and spark that convo !</span>
                </h1>
            {/* option wrapper div */}
            {user && (
                    <div className='grid sm:grid-cols-2 sm:mx-8 max-h-max
                                    lg:grid-cols-3 lg:mx-10 xl:mx-20 2xl:grid-cols-4'>
                    {similarUsers && similarUsers.map((su)=>{
                        return <div key={su._id}>
                            
                            <UserDetails u={su} />
                            
                             </div>

                    })
                    }

                    

                </div>

            )
            }

            <div>
                    <div className="w-full flex justify-center py-10">
                        <button className="btn rounded-full flex-none 
                                            bg-primary text-neutral text-lg hover:bg-neutral hover:text-primary">
                            <Link to="/my-space"> 
                            Skip to my profile
                            </Link>
                        </button>
                    </div>
               </div>
        </div>
    </div>
    )
}

export default SimilarUsers;