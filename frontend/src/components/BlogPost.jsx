import { Link } from 'react-router-dom';

const Post = () => {
    return ( 
        <div>
            {/* <div className='text-3xl'>Title</div> */}
            <input type="text" placeholder="Title" className="input w-full mt-20 text-xl border-primary border-y-2 border-opacity-10" />
            <textarea className="textarea textarea-bordered border-primary border-y-2 border-opacity-10
                                mt-4 w-full h-96 text-lg"
                placeholder="Type here" />
            <button className="flex btn bg-accent rounded-full text-primary ml-2 my-2 px-6 text-lg">Post</button>
        </div>
    )
}

export default Post;