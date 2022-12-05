import { Link, useSearchParams } from 'react-router-dom';
import PreviousBtn from '../components/Previous';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
// import { Error } from 'mongoose';
import Previous from '../components/Previous';

const Post = () => {

    const [title,setTitle] = useState('');
    const [post,setPost] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const username = "Samuel"; //This should be replaced by whatever is in the cookie

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
            navigate('/discover'); //navigate to creating discover page after logging in succefully (should be replaced to user's dashboard)

        }
    }

    return ( 
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
        </div>
    )
}

export default Post;