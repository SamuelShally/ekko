<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { useState } from 'react';
=======
import { Link, useSearchParams } from 'react-router-dom';
import PreviousBtn from '../components/Previous';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
// import { Error } from 'mongoose';
import Previous from '../components/Previous';
>>>>>>> Ruby+Samuel

const Post = () => {

    const [title,setTitle] = useState('');
    const [post,setPost] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const username = "Samuel"; //**READ**: This should be replaced by the name in session cookie

    const submitForm = async(e) =>{
        e.preventDefault();

        const userInput={post, title, username};
        console.log(userInput.post);
        console.log(userInput.title);

        const response = await fetch("http://localhost:4005/api/blog/add",{
            method:'POST',
            body: JSON.stringify(userInput),
            headers:{
                'Content-Type' : "application/json"
            }
        });
        console.log(response);
        const json = await response.json();
        if(!response.ok){
            console.log(json.error);
            setError(json.error);
        }
        if(response.ok){
            setTitle('');
            setPost('');
            setError(null);
            console.log("Post added to DB");
            navigate('/my-profile'); //navigate to creating discover page after logging in succefully (should be replaced to user's dashboard)
        }
    }

    return ( 
<<<<<<< HEAD
        <div className='relative w-screen h-screen bg-neutral'>
            <div className='absolute grid grid-rows-8 gap-y-4 px-5 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
                            w-screen max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl'>
                <h1 className='row-span-2 ml-1 text-2xl text-primary font-medium pb-8'> <span className='text-4xl font-bold'>ekko </span>  your voice.</h1>
                <input type="text" placeholder="Title" className="row-span-1 input w-full text-xl rounded-2xl"/>
                <textarea className="row-span-4 textarea rounded-2xl
                                     mt-4 w-full h-72 text-lg
                                     md:h-80 lg:h-96"
                    placeholder="Type here" />
                <button className="flex row-span-1 btn bg-accent rounded-full text-primary ml-2 my-2 px-6 text-lg">Post</button>
            </div>
=======
        <div>
            {/* <div className='text-3xl'>Title</div> */}
            <input type="text" placeholder="Title" className="input w-full mt-20 text-xl border-primary border-y-2 border-opacity-10" 
            
                value = {title}
                onChange = {(e)=>setTitle(e.target.value)}
            />
            
            <textarea className="textarea textarea-bordered border-primary border-y-2 border-opacity-10
                                mt-4 w-full h-96 text-lg"

                value={post}
                onChange = {(e)=>setPost(e.target.value)}
                placeholder="Type here" />

            <button className="flex btn bg-accent rounded-full text-primary ml-2 my-2 px-6 text-lg"  onClick = {submitForm}>Post</button>
>>>>>>> Ruby+Samuel
        </div>
        
    )
}

export default Post;