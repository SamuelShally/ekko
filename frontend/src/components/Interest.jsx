import { Link } from 'react-router-dom';

const Interest = () => {
    return (
        <div className="relative h-screen inset-y-14">
            <h1 className="relative font-bold text-3xl text-primary mb-10 ml-4">
                Which social issues<br />spark your interest?</h1>
            <div className="relative bg-neutral h-full rounded-tl-3xl rounded-tr-3xl">
                <h2 className="text-secondary text-xl font-light pt-10 mb-6 ml-4">Choose up to 3</h2>
                <div className="grid gap-6 inset-x-7 ml-4">
                    <button className="btn bg-secondary btn-md rounded-full w-5/12 
                                        text-xl text-left text-neutral justify-start
                                        sm:btn-md md:btn-md lg:btn-lg">+ election
                    </button>
                    <button className="btn bg-secondary btn-md rounded-full w-5/12
                                        text-xl text-left text-neutral justify-start
                                        sm:btn-md md:btn-md lg:btn-lg">+ abortion
                    </button>
                    <button className="btn bg-secondary btn-md rounded-full w-6/12
                                        text-xl text-left text-neutral justify-start
                                        sm:btn-md md:btn-md lg:btn-lg">+ immigration
                    </button>
                    <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2
                                        text-xl text-left text-neutral justify-start
                                        sm:btn-md md:btn-md lg:btn-lg">+ racial discrimination
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default Interest;