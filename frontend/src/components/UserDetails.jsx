import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';

const UserDetails = ({u}) =>{
    const { user } = useAuthContext();
    const [userId,setUserId] = useState(user.user._id);
    //console.log(user)
    // console.log(u.username)

    
    const [username,setUsername] = useState(()=>{
        if(u){
            return u.username
        }
    })
    const [worldview,setWorldView] = useState(()=>{
        if(u){
            return u.worldview
        }
    })
    const [intro,setIntro] = useState(()=>{
        if(u){
            return u.intro
        }
    })
   



    return (<div> 

    <div>

        <div className="relative card card-bordered rounded-3xl bg-accent 
                        w-3/4 mx-auto
                        sm:max-w-xs
                ">

        <Link className="border border-black border-4 rounded-3xl hover:border-warning" to ={`/profile/${username}`}>
            <img className="rounded-3xl" src={userImageHolder} alt="User2"/>
        </Link>

        <div className="relative  gap-y-2 card-body items-center text-center text-primary">
            <h2 className="card-title text-xl mt-8 mx-4">{username}</h2>
            <h2 className="card-title text-xl mt-2 mx-6">{worldview}</h2>
            <h3 className="card-title text-2xl mt-2 mx-4">{intro}</h3>

            <Link to={"/chat/" + btoa([
                user.user.username,
                username,
            ].sort().join(","))}>
                <button className="btn align-middle mb-8 mx-4 rounded-full 
                                    bg-neutral text-primary text-lg hover:bg-warning">
                    Chat
                </button>
            </Link>
        </div>
    </div>


    </div>

     
    </div>)



}

export default UserDetails;



