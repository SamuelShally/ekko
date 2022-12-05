import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';
import { useAuthContext, user } from "../hooks/useAuthContext";
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const CreateProfile = () => {
    const { user } = useAuthContext()
    const [worldview,setWorldView] = useState('');
    const navigate = useNavigate();
  
    

    const submitView = async(e) =>{
        e.preventDefault();
        const newUser = {username:user.username,worldview}
        
        console.log(newUser);

        const response = await fetch("http://localhost:4000/api/users/worldview",{
            method:'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = response.json();
        if(!response.ok){
            console.log(json.error);
        }
        if(response.ok){
            setWorldView('');
            console.log("worldview set");
            navigate('/interest');

        }




    }

    return (
        // wrapper div
        <div className="relative h-screen bg-accent">
            { user &&
                <div className="absolute grid h-3/4 inset-y-20 bg-accent place-items-center">
                    <h1 className="relative w-screen pl-11 pb-7 text-3xl text-primary text-left font-bold">
                        Hey, {user.username}<br /><span className="font-light text-2xl">Set up your profile!</span> {/* To do: Ekko -> replace with registered username! */}
                    </h1>
                    {/* card */}
                    <div className="relative card card-bordered rounded-3xl bg-neutral shadow-xl
                                    w-3/4 -mt-4">
                        {/* user profile img */}
                        <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User1" />
                        {/* card body */}
                        <div className="relative gap-y-2 card-body items-center text-center text-primary">
                            {/* <h2 className="card-title text-3xl mt-8">User1</h2> */}
                            {/* <div className="w-full mt-8">
                                <input type="text" placeholder="Enter username" className="input input-bordered rounded-full max-w-xs" />
                            </div> */}
                            <div className="w-full mt-6">
                                <h2 className="text-2xl">{user.username}</h2> {/* To do: Ekko -> replace with registered username! */}
                            </div>
                            <div className="form-control mt-4">
                                {/* <label className="label">
                                    <span className="label-text text-sm text-stone-400 font-light mb-1">Pick one!</span>
                                </label> */}
                                <select 
                                className="select select-bordered rounded-full px-6"
                                value={worldview}
                                onChange={(e)=>{
                                    setWorldView(e.target.value)
                                    }}>
                                    <option >Choose your worldview</option>
                                    <option value="Progressive">Progressive</option>
                                    <option value="Liberal">Liberal</option>
                                    <option value="Conservative">Conservative</option>
                                    <option value="Christian">Christian</option>
                                    <option value="other">other</option>
                                </select>
                                </div>
                           
                                <button className="btn my-8 rounded-full 
                                                    bg-primary text-neutral text-xl"
                                            onClick={submitView}>
                                    Next
                                </button>
                        
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateProfile;