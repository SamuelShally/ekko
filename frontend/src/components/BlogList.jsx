// import Blog from "./Blog";
import { useState } from 'react';

const Bloglist = (props) => {
    const blogs = props.blogs;
    
    return ( 
        <section className="grid gap-5 max-w-lg mx-auto py-6 bg-neutral rounded-lg 
        lg:grid-cols-3 lg:max-w-none ">
            {blogs.map((blog) => (
                // <Blog title={blog.title} body={blog.body} author={blog.author} date={blog.date} key={blog.id} />
                <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'
                 key={blog.id}> 
                <div>
                        <img className='h-48 w-full object-cover' src={blog.img} />
                </div>
                <div className='p-4'>
                    <p className='text-secondary sm:text-lg'>Blog</p>
                    <h3 className='mt-2 text-2xl sm:text-3xl lg:text-2xl font-semibold leading-7 text-gray-900'> { blog.title } </h3>
                    <p className='mt-2 leading-6 sm:text-lg text-gray-400 font-light'>
                                {blog.body}
                    </p>
                    <div className='mt-6 flex items-center'> {/* author-1 info container */}
                        <div className='flex-shrink-0'>
                            <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                        </div>
                        <div className='ml-4 align-middle '>
                            <p className='text-sm sm:text-lg leading-5 font-medium text-primary'>{ blog.author }</p>
                            <time dateTime='2022-11-15' className='text-sm sm:text-lg leading-5 text-primary opacity-50'>
                                    { blog.date }
                            </time>
                        </div>        
                    </div>
                </div> 
            </div>
                ))}
        </section>
     );
}
 
export default Bloglist;