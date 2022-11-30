import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserNav from './UserNav';
import Bloglist from './BlogList';

const UserSpace = () => {
    const [blogs, setBlogs] = useState([
        { title: "8 facts about gender equality you must know", body: 'Lorem ipsum dolor sit amet. Eos repellendus unde sit omnis accusantium.', author: 'Lemon', date: 'Nov 15, 2022', id: 1 },
        { title: "5 Ways Abortion Rights Protect Women's Health", body: 'Lorem ipsum dolor sit amet. Eos repellendus unde sit omnis accusantium.', author: 'Ruby', date: 'Nov 30, 2022', id: 2}
    ]);
    
    return (
        <div className="min-h-screen h-full bg-white px-4 mt-4 md:mt-6 lg:px-10">
            <UserNav/>

            {/* <h2 className='mt-4 text-center tracking-notmal'>My Profile</h2> */}
            <div className='flex flex-col mt-10 md:mt-14 
                            w-full text-center items-center justify-center'>
                <img className="relative w-30 h-30 rounded-full justify-self-center" src="https://placeimg.com/160/160/arch" />
                <h4 className='mt-2 text-gray-500 sm:text-xl md:text-xl'>@username</h4>
            </div>

            {/* card container */}
            <div className="max-w-lg mx-auto my-10 md:my-14 py-8 
                            bg-neutral rounded-lg
                            lg:grid-cols-3 lg:max-w-5xl lg:px-8"> 
                <div className="ml-6">
                    <h2 className='text-xl sm:text-2xl lg:text-2xl lg:text-center'>My posts</h2>
                </div>
                <div className="grid gap-5 max-w-lg mx-auto py-6 bg-neutral rounded-lg 
                        lg:grid-cols-3 lg:max-w-none ">
                    
                    <Bloglist blogs={blogs} /> 
                
                    
                      
                </div>  
            </div>
            {/* <div className='w-full h-96'></div> */}
        </div>
    )
}

export default UserSpace;