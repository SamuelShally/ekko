import { Link } from 'react-router-dom';
import userImageHolder from '../img/user-img-holder.png';


const CreateProfile = () => {
    


    return (
        // wrapper div
        <div className="relative h-screen bg-accent">
            <div className="absolute grid h-3/4 inset-y-20 bg-accent place-items-center">
                <h1 className="relative w-screen pl-11 pb-7 text-3xl text-primary text-left font-bold">
                    Hey, {'{Ekko}'}.<br /><span className="font-light text-2xl">Set up your profile!</span> {/* To do: Ekko -> replace with registered username! */}
                </h1>
                {/* card */}
                <div className="relative card card-bordered rounded-3xl bg-neutral shadow-xl
                                w-3/4 -mt-4">
                    {/* user profile img */}
                    <img className="rounded-3xl mt-10 mx-8" src={userImageHolder} alt="User1" />
                    {/* card body */}
                    <div className="relative gap-y-2 card-body items-center text-center text-primary">
                        {/* <h2 className="card-title text-3xl mt-8">User1</h2> */}
                        {/* <div className="w-full mt-8">
                            <input type="text" placeholder="Enter username" className="input input-bordered rounded-full max-w-xs" />
                        </div> */}
                        <div className="w-full mt-6">
                            <h2 className="text-2xl">{'{Ekko}'}</h2> {/* To do: Ekko -> replace with registered username! */}
                        </div>
                        <div className="form-control mt-4">
                            {/* <label className="label">
                                <span className="label-text text-sm text-stone-400 font-light mb-1">Pick one!</span>
                            </label> */}
                            <select className="select select-bordered rounded-full px-6">
                                <option >Choose your worldview</option>
                                <option>worldview1</option>
                                <option>worldview2</option>
                                <option>worldview3</option>
                                <option>worldview4</option>
                                <option>other</option>
                            </select>
                            </div>
                        <Link to="/interest"> 
                            <button className="btn my-8 rounded-full 
                                                bg-primary text-neutral text-xl">
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CreateProfile;