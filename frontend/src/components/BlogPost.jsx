
import { Link, useSearchParams } from 'react-router-dom';
import PreviousBtn from '../components/Previous';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
// import { Error } from 'mongoose';
import Previous from '../components/Previous';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';


const Post = () => {
    const {user} = useAuthContext();
   
    const [title,setTitle] = useState('');
    const [post,setPost] = useState('');
    const [img,setImg]=useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    //**READ**: This should be replaced by the name in session cookie

    const submitForm = async(e) =>{
        e.preventDefault();
        
        const username = user.user.username
        const userInput={post, title, username,img};
        console.log(userInput.post);
        console.log(userInput.title);
        console.log(userInput.img)
        if(!userInput.img){
            userInput.img = "https://placeimg.com/160/160/arch"
        }
        console.log(userInput)
     

        const response = await fetch("http://localhost:4000/api/blog/add",{
            method:'POST',
            body: JSON.stringify(userInput),
            headers:{
                'Content-Type' : "application/json"
            }
        })
        const json = await response.json();
        console.log(json);

    
        if(!response.ok){
            console.log(json.error);
            setError(json.error);
        }
        if(response.ok){
            setTitle('');
            setPost('');
            setError(null);
            console.log("Post added to DB");
            navigate('/my-space'); //navigate to creating discover page after logging in succefully (should be replaced to user's dashboard)
        }
    }

    return ( 
        <div>
            {/* <div className='text-3xl'>Title</div> */}
            <div className='relative w-screen h-screen bg-neutral'>
            <div className='absolute grid grid-rows-8 gap-y-4 px-5 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
                            w-screen max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl'>
                <h1 className='row-span-2 ml-1 text-2xl text-primary font-medium pb-8'> <span className='text-4xl font-bold'>ekko </span>  your voice.</h1>
                <input type="text" placeholder="Title" className="row-span-1 input w-full text-xl rounded-2xl" 
                 value = {title}
                 onChange = {(e)=>setTitle(e.target.value)}
                />
                <input type="text" placeholder="img link" className="row-span-1 input w-full text-xl rounded-2xl" 
                 value = {img}
                 onChange = {(e)=>setImg(e.target.value)}
                />
                <textarea className="row-span-4 textarea rounded-2xl
                                     mt-4 w-full h-72 text-lg
                                     md:h-80 lg:h-96"
                    placeholder="Type here" 
                    value={post}
                onChange = {(e)=>setPost(e.target.value)}
                />
                <button className="flex row-span-1 btn bg-accent rounded-full text-primary ml-2 my-2 px-6 text-lg" onClick = {submitForm}>Post</button>
            </div>
            </div>

            
        </div>


        
    )
}

export default Post;

