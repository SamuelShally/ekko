import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';
import Previous from '../components/Previous';
import UserDetails from './UserDetails';
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";


const Discover = () => {
    const {user} = useAuthContext();
    const [similarUsers,setSimliarUsers] = useState([]);

      useEffect(()=>{
        if(user){}
        
        const fetchSimilarUsers = async() => {
        
           
            const response = await fetch(`http://localhost:4000/api/users/recommend/${user.user._id}`,{
                headers:{
                    'Authorization':`Bearer ${user.token}`,
                }
            });

            const json = await response.json();
            console.log(json)
            setSimliarUsers(json)
        }

        if(user){
            fetchSimilarUsers();
        }
        
    },[user])
   

    return (
        <div className="relative h-screen bg-neutral sm:bg-transparent">
            {/* Previous button */}
            <div className="absolute flex justify-between place-items-center w-screen z-30 py-5">
                    <Link to="/">
                        <Previous/>
                    </Link>
            </div>

            <div className='grid sm:grid-cols-3'>
                {/* block on breakpoint sm */}
                <div className='relative hidden bg-neutral text-primary h-full 
                                    sm:block sm:col-span-1'>
                    <h1 className="absolute right-0 mr-8 mt-8 text-primary text-center text-bold
                                text-3xl sm:text-3xl lg:mt-9 xl:text-4xl">Discover</h1>
                </div>
                {/* default */}
                <div className="h-screen w-screen mx-auto pt-20 
                                sm:max-w-max sm:col-span-2 
                                ">
                    <h1 className="relative mb-6 w-screen text-4xl text-primary text-center text-bold sm:hidden">Discover</h1>
                    <div className="relative card card-bordered rounded-3xl bg-accent mt-20 
                                    sm:max-w-sm mx-auto w-3/4
                                    md:max-w-lg">
                        {/* <figure className="px-10 pt-10"> */}
                            
                        {/* </figure> */}
                        {user && (
                    <div>
                    {similarUsers && similarUsers.map((su)=>{
                        return <div key={su._id}>
                            
                            <UserDetails u={su} />
                            
                             </div>

                    })
                    }

                    

                </div>

            )
            }
                    </div>
                </div>
            </div>
       
        </div>

    )
}

export default Discover;
