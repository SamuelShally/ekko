import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';

const Discover = () => {
    return (
        <div className="relative h-screen">
            <h1 className="absolute w-screen my-24 text-4xl text-primary text-center text-bold">Discover</h1>
            <div className="absolute card card-bordered rounded-3xl bg-accent left-1/2 -translate-x-1/2 shadow-xl top-1/2 -translate-y-1/2
                            w-3/4 lg:card-side">
                {/* <figure className="px-10 pt-10"> */}
                    <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User2"/>
                {/* </figure> */}
                <div className="card-body items-center text-center text-primary">
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

    )
}

export default Discover;
