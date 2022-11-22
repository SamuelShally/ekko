import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';


const Discover = () => {
   

    return (
        <div className="relative h-screen">
            <div className="absolute grid h-3/4 inset-y-20 place-items-center">
                <h1 className="relative w-screen text-4xl text-primary text-center text-bold">Discover</h1>
                <div className="relative card card-bordered rounded-3xl bg-accent
                                w-3/4 lg:card-side">
                    {/* <figure className="px-10 pt-10"> */}
                        <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User2"/>
                    {/* </figure> */}
                    <div className="relative gap-y-2 card-body items-center text-center text-primary">
                        <h2 className="card-title text-2xl mt-8">User 2</h2>
                        <h2 className="card-title text-2xl mt-6">User 2's worldview</h2>
                        <Link to="/"> {/* change it to chatroom */}
                            <button className="btn align-middle my-8 rounded-full 
                                                bg-primary text-neutral text-xl">
                                Connect
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Discover;
