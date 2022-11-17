import { Link } from 'react-router-dom';
// left & right margins: 6

const SimilarUsers = () => {
    return (
        <div className="bg-white">
            <div className="relative h-screen pt-20">
                <h1 className='pl-6 pb-6 font-bold text-3xl'>People like me<br/>
                    <span className='font-light text-xl'>Connect and spark that convo !</span>
                </h1>
            {/* option wrapper div */}
            <div className="relative bg-neutral h-full rounded-tl-3xl rounded-tr-3xl">
                {/* options */}
                <div className="grid gap-14 pt-14 place-items-center">
                    <button className="btn bg-accent btn-lg rounded-full w-11/12 h-28 
                                        text-2xl text-left text-primary justify-start
                                        sm:btn-lg md:btn-lg lg:btn-lg">
                            User1
                    </button>
                    <button className="btn bg-accent btn-lg rounded-full w-11/12 h-28
                                        text-2xl text-left text-primary justify-start
                                        sm:btn-md md:btn-md lg:btn-lg">User2
                    </button>
                </div>
                <Link to="/my-profile"> 
                    <div className="w-full flex flex-row-reverse mt-10">
                        <button className="btn rounded-full flex-none mr-6 
                                            bg-primary text-neutral text-xl">
                            Skip to my profile
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default SimilarUsers;