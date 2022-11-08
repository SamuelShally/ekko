import { Link } from 'react-router-dom';

const CreateProfile = () => {
    return (
        <div className="relative h-screen">
            <h1 className="absolute w-screen my-20 text-4xl text-primary text-center text-bold">Create profile</h1>
            <div className="absolute card card-bordered rounded-3xl bg-accent left-1/2 -translate-x-1/2 shadow-xl top-1/2 -translate-y-1/2
                            w-3/4 lg:card-side">
                <img className="rounded-3xl mt-10 mx-8" src="https://placeimg.com/400/225/arch" alt="User1"/>
                <div className="relative card-body items-center text-center text-primary">
                    {/* <h2 className="card-title text-3xl mt-8">User1</h2> */}
                    <div className="w-full mt-8">
                        <input type="text" placeholder="Enter username" className="input input-bordered rounded-full max-w-xs" />
                    </div>
                    <div className="form-control mt-4">
                        {/* <label className="label">
                            <span className="label-text text-sm text-stone-400 font-light mb-1">Pick one!</span>
                        </label> */}
                        <select className="select select-bordered rounded-full px-6">
                            <option disabled selected>Choose your worldview</option>
                            <option>worldview1</option>
                            <option>worldview2</option>
                            <option>worldview3</option>
                            <option>worldview4</option>
                            <option>other</option>
                        </select>
                        </div>
                    <Link to="/"> {/* remember: change it to my dashboard */}
                        <button className="btn my-8 rounded-full 
                                            bg-primary text-neutral text-xl">
                            Create
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile;