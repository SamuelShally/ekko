import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserNav from './UserNav';
import Bloglist from './BlogList';
import Interestlist from './InterestList';
import { useAuthContext } from '../hooks/useAuthContext';


const UserSpace = () => {

    const {user} = useAuthContext();
    const [blogs,setBlogs]=useState([])
    
    

    // *** NEEDS MODIFICATION
    // RENDER USER INTEREST

    useEffect(()=>{
        const fetchBlogs = async() =>{
            const res = await fetch("https://ekko-backend.herokuapp.com/api/blog/getPosts");
            const parsed = await res.json();
            console.log(parsed);
            setBlogs(parsed)
        }
        fetchBlogs();
        //console.log("blogs",blogs[0].username)
    
    },[])
   

    // display loading msg while fetching data
    const [isPending, setIsPending] = useState(true);

    // *** NEEDS MODIFICATION
    // useEffect(() => {
    //     fetch('')
    //         .then(res => {
    //             return (res)
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIsPending(false);
    //         });
    // }, []);

    return (
        <div className="min-h-screen h-full bg-white px-4 mt-4 md:mt-6 lg:px-10">
            <UserNav hidePost={false}/>
            {user && user.user.interests && (
                <div> 
                    {/* <h2 className='mt-4 text-center tracking-notmal'>My Profile</h2> */}
            <div className='flex flex-col mt-10 md:mt-14 
                            w-full text-center items-center justify-center'>
                <img className="relative w-30 h-30 rounded-full justify-self-center" src='https://placeimg.com/160/160/arc' />
                <h4 className='mt-2 text-gray-500 sm:text-xl md:text-xl'>@{user.user.username}</h4>
            </div>

             {/* interest container */}
             <div className="h-max max-w-sm mx-auto mt-10 md:mt-14 py-8 
                            bg-neutral rounded-lg
                            lg:max-w-md lg:px-8 ">
                <div className="">
                    <h2 className='text-xl sm:text-2xl lg:text-2xl text-center'>My Interests</h2>
                </div>
                <div>
                    {/* {isPending && <div>...</div>} */}
                    {user && user.user.interests && <Interestlist interests={user.user.interests} />}  
                  

                  
                </div> 
                </div>


            {/* card container */}
            <div className="max-w-lg mx-auto my-10 md:my-14 py-8 
                            bg-neutral rounded-lg
                            lg:grid-cols-3 lg:max-w-5xl lg:px-8"> 
                <div className="ml-6">
                    <h2 className='min-h-max text-2xl text-center sm:text-2xl lg:text-2xl '>My posts</h2>
                </div>
                <div>
                    {/* {isPending && <div>Loading...</div>} */}

                    {/* render it once we have the data & show corresponding user's blog only */}
                    {/* *** NEEDS MODIFICATION */}
                    {blogs && <Bloglist blogs={blogs.filter((blog) => blog.username==user.user.username)} />}  
                  
                </div>  
            </div>


                </div>

            )
            }

            

           

        </div>
    )
}

export default UserSpace;