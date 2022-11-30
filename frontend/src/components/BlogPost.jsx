import { Link } from 'react-router-dom';
import { useState } from 'react';

const Post = () => {
    return ( 
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
        </div>
        
    )
}

export default Post;