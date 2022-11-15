import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div className="h-screen bg-neutral">
            <h2 className='mt-2 text-center tracking-notmal'>My Profile</h2>
            <div className='flex flex-col mt-16 w-full justify-content-center'>
                <img className="w-1/3 mask mask-circle" src="https://placeimg.com/160/160/arch" />
                <h4 className='mt-2 text-gray-500'>username</h4>
            </div>

            <div className="bg-accent"> {/* card container */}
                <h3>My posts</h3>
                <div className='p-6'> {/* each card */}
                    <div>
                        <img className='h-48 w-full object-cover' src="https://images.pexels.com/photos/6185320/pexels-photo-6185320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    </div>
                    <p>Blog</p>
                    <h3>Title</h3>
                    <p>Content preview</p>
                    <div> {/* author info container */}
                        <img className="mask mask-circle" src="https://placeimg.com/160/160/arch" />
                        <p>Author name</p>
                        <div>
                            <time dateTime='2022-11-15'>
                                Nov 15, 2022
                            </time>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserProfile;