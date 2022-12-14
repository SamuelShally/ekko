import { Link } from 'react-router-dom';
import UserNav from '../components/UserNav';
import PreviousBtn from '../components/Previous';
import { useNavigate  } from 'react-router-dom';
// import { Error } from 'mongoose';
import Previous from '../components/Previous';
import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    //Pull blog posts via usernam and add them to the frontend
    const [posts,setPosts] = useState('');

    const username = {username: "Samuel"}; //Temp hardcoded, must be updated to token.username

    const getPosts = async(e) =>{

        const response = await fetch("http://localhost:4005/api/blog/retrieve",{
            method:'POST',
            body: JSON.stringify(username),
            headers:{
                'Content-Type' : "application/json"
            }
        });

        //Json contains all blog posts made by the passed username
        const json = await response.json();

        if(!response.ok){
            // console.log(json.error);
            return [];
        }else{
            let array = [ ];

            for(let x = 0; x<json.length; x++){
                
                
    
            }
           
            return  array;
        }
    }

    

    return (
        <div className="min-h-screen h-full bg-white px-4 mt-4 lg:px-10">
            <UserNav/>

            {/* <h2 className='mt-4 text-center tracking-notmal'>My Profile</h2> */}
            <div className='flex flex-col mt-10 w-full text-center items-center justify-center'>
                <img className="relative w-30 h-30 rounded-full justify-self-center" src="https://placeimg.com/160/160/arch" />
                <h4 className='mt-2 text-gray-500'>@username</h4>
            </div>

            {/* card container */}
            <div className="max-w-lg mx-auto my-10 py-8 bg-neutral rounded-lg
                            lg:grid-cols-3 lg:max-w-none"> 
                <div className="ml-6">
                    <h2 className='text-xl lg:text-3xl'>My posts</h2>
                </div>
                <div className="grid gap-5 max-w-lg mx-auto py-6 bg-neutral rounded-lg
                            lg:grid-cols-3 lg:max-w-none">
                    
                    <div id="temp">
                      
                        
                    </div> 

                    
                    <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'> {/* card 1 */}
                        <div>
                            <img className='h-48 w-full object-cover' src="https://images.pexels.com/photos/6185320/pexels-photo-6185320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        </div>
                        <div className='p-4'>
                            <p className='text-secondary'>Blog</p>
                            <h3 className='mt-2 text-2xl font-semibold leading-7 text-gray-900'>8 facts about gender equality you must know</h3>
                            <p className='mt-2 leading-6 text-gray-400 font-light'>
                                Lorem ipsum dolor sit amet. Eos repellendus unde sit omnis accusantium.
                            </p>
                            <div className='mt-6 flex items-center'> {/* author-1 info container */}
                                <div className='flex-shrink-0'>
                                    <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                                </div>
                                <div className='ml-4 align-middle'>
                                    <p className='text-sm leading-5 font-medium text-primary'>Author name</p>
                                    <time dateTime='2022-11-15' className='text-sm leading-5 text-primary opacity-50'>
                                        Nov 15, 2022
                                    </time>
                                </div>        
                            </div>
                        </div> 
                    </div>


                    <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'> {/* card 2 */}
                        <div>
                            <img className='h-48 w-full object-cover' src="https://images.pexels.com/photos/1140854/pexels-photo-1140854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        </div>
                        <div className='p-4'>
                            <p className='text-secondary'>Blog</p>
                            <h3 className='mt-2 text-2xl font-semibold leading-7 text-gray-900'>5 Ways Abortion Rights Protect Women's Health</h3>
                            <p className='mt-2 leading-6 text-gray-400 font-light'>
                                Lorem ipsum dolor sit amet. Eos repellendus unde sit omnis accusantium.
                            </p>
                            <div className='mt-6 flex items-center'> {/* author-2 info container */}
                                <div className='flex-shrink-0'>
                                    <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                                </div>
                                <div className='ml-4 align-middle'>
                                    <p className='text-sm leading-5 font-medium text-primary'>Author name</p>
                                    <time dateTime='2022-11-15' className='text-sm leading-5 text-primary opacity-50'>
                                        Nov 15, 2022
                                    </time>
                                </div>        
                            </div>
                        </div> 
                    </div>  
                </div>  
            </div>
            {/* <div className='w-full h-96'></div> */}
        </div>
    )
}

export default UserProfile;