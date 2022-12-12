import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import SettingDetails from './SettingDetails';
import { useAuthContext } from "../hooks/useAuthContext";


const Settings = () => {
    const { user } = useAuthContext();
    //const [username,setUsername] = useState(()=> user? user.user.username : '');
    const [curUser,setCurUser] = useState(null);
  

    useEffect(()=>{
        const fetchCurUser = async() =>{
            console.log(user.user._id)
           
            const response = await fetch(`https://ekko-backend.herokuapp.com/api/users/getUserById/${user.user._id}`,{
                headers:{
                    'Authorization':`Bearer ${user.token}`,
                }
            });
            const json = await response.json();

            console.log("is this null",json)
            setCurUser(json);
        }

        if(user){
            fetchCurUser();
           
        }

    },[user])

    useEffect(()=>{console.log("hoho",curUser)},[curUser])






    return (
        <div className='grid sm:grid-cols-5'>
            <div className=" bg-neutral h-screen sm:col-span-2">
                <div className='pl-6 pb-6 pt-20'>
                    <p1 className="font-bold text-3xl">Settings</p1>
                </div>
                <div className="grid grid-rows-3 gap-y-0 mt-6 pt-2 text-xl"> {/* create grid */}
                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <div className="">
                            <p3>Username</p3>
                        </div>
                    </div>

                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </div>
                        <div className="">
                            <p3>Email</p3>
                        </div>
                    </div>

                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <div className="">
                            <p3>Bio</p3>
                        </div>
                    </div>

                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                        </div>
                        <div className="">
                            <p3>Worldview</p3>
                        </div>
                    </div>
                    
                </div> {/* end of grid */}
            </div>
            <div className=' sm:col-span-3'>
                <div className='pl-6 pb-6 pt-20'>
                    <p1 className="font-bold text-3xl">User Details</p1>
                </div>
                {user && (
                    <div>
                        <SettingDetails u={curUser}/>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default Settings;