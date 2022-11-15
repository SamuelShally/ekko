import { Link } from 'react-router-dom';
// left & right margins: 6

const Interest = () => {
    return (
        <div className="relative bg-white h-screen mb-40 z-0">
            <div className="relative h-screen top-20">
                {/* question */}
                <h1 className="relative font-bold text-3xl text-primary mb-10 ml-6">
                    Which social issues<br />spark your interest?</h1>
                {/* option-wrapper div */}
                <div className="relative bg-neutral h-full rounded-tl-3xl rounded-tr-3xl">
                    <h2 className="text-secondary text-xl font-light pt-10 mb-6 ml-4">Choose up to 3</h2>
                    {/* options */}
                    <div className="grid gap-6 inset-x-7 ml-6">
                        <button className="btn bg-secondary btn-md rounded-full w-5/12 
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg">+ election
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-6/12
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg">+ immigration
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg">+ reproductive rights
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg">+ racial discrimination
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-4/12 pr-2
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg">+ LGBTQ
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md lg:btn-lg">+ economic inequality
                        </button>
                    </div>
                    <Link to="/quiz"> 
                        <div className="w-full flex flex-row-reverse mt-10 z-20">
                            <button className="btn rounded-full flex-none mr-6 
                                                bg-primary text-neutral text-xl">
                                Next
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Interest;