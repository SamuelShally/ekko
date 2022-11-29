import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';

const Discover = () => {
    return (
        <div className="relative h-screen">
            <div className='grid grid-cols-3'>
                {/* block on breakpoint md*/}
                <div className='relative hidden bg-neutral text-primary h-full
                                md:block md:col-span-1'>
                    <h1 className="absolute left-0 ml-10 mt-40 text-4xl text-primary text-center text-bold">Discover</h1>
                </div>
                <div className="h-screen w-screen inset-y-20 mt-40 itmes-center 
                                md:w-full md:col-span-2">
                    <h1 className="relative mb-6 w-screen text-4xl text-primary text-center text-bold md:hidden">Discover</h1>
                    <div className="relative card card-bordered rounded-3xl bg-accent
                                    max-w-sm mx-auto w-3/4 ">
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
