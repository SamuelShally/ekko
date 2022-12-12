const Blog = (props) => {
    // const blogs = props.blogs;
    // console.log(props, blogs);
 
        <div>
            {/* // card template */}
            <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'
                 > 
                <div>
                    <img className='h-48 w-full object-cover' src="https://images.pexels.com/photos/6185320/pexels-photo-6185320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                </div>
                <div className='p-4'>
                    <p className='text-secondary sm:text-lg'>Blog</p>
                    <h3 className='mt-2 text-2xl sm:text-3xl font-semibold leading-7 text-gray-900'> { props.title } </h3>
                    <p className='mt-2 leading-6 sm:text-lg text-gray-400 font-light'>
                                {props.body}
                    </p>
                    <div className='mt-6 flex items-center'> {/* author-1 info container */}
                        <div className='flex-shrink-0'>
                            <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                        </div>
                        <div className='ml-4 align-middle '>
                            <p className='text-sm sm:text-lg leading-5 font-medium text-primary'>{ props.author }</p>
                            <time dateTime='2022-11-15' className='text-sm sm:text-lg leading-5 text-primary opacity-50'>
                                    { props.date }
                            </time>
                        </div>        
                    </div>
                </div> 
            </div>
        </div>

}
 
export default Blog;