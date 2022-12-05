import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';
import Previous from '../components/Previous';


const Discover = () => {
   

    return (
        <div className="relative h-screen bg-neutral sm:bg-transparent">
            {/* Previous button */}
            <div className="absolute flex justify-between place-items-center w-screen z-30 py-5">
                    <Link to="/">
                        <Previous/>
                    </Link>
            </div>

            <div className='grid sm:grid-cols-3'>
                {/* block on breakpoint sm */}
                <div className='relative hidden bg-neutral text-primary h-full 
                                    sm:block sm:col-span-1'>
                    <h1 className="absolute right-0 mr-8 mt-8 text-primary text-center text-bold
                                text-3xl sm:text-3xl lg:mt-9 xl:text-4xl">Discover</h1>
                </div>
                {/* default */}
                <div className="h-screen w-screen mx-auto pt-20 
                                sm:max-w-max sm:col-span-2 
                                ">
                    <h1 className="relative mb-6 w-screen text-4xl text-primary text-center text-bold sm:hidden">Discover</h1>
                    <div className="relative card card-bordered rounded-3xl bg-accent mt-20 
                                    sm:max-w-sm mx-auto w-3/4
                                    md:max-w-lg">
                        {/* <figure className="px-10 pt-10"> */}
                            <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User2"/>
                        {/* </figure> */}
                        <div className="relative gap-y-2 card-body items-center text-center text-primary">
                            <h2 className="card-title text-2xl mt-8 mx-4">User 2</h2>
                            <h2 className="card-title text-2xl mt-6 mx-4">User 2's worldview</h2>
                            <Link to="/"> {/* change it to chatroom */}
                                <button className="btn align-middle my-8 mx-4 rounded-full 
                                                    bg-primary text-neutral text-xl">
                                    Connect
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Discover;
