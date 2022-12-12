import { Link } from 'react-router-dom';

const Stats = () => {
    return (
        <div className="min-h-screen h-full bg-white px-4 mt-4 lg:px-10">

            <div className='pl-4 pb-6 pt-20'>
                <p1 className="font-bold text-3xl">Stats</p1>
            </div>

            {/* card container */}
            <div className="max-w-lg mx-auto my-4 py-4 bg-neutral rounded-lg
                            lg:grid-cols-3 lg:max-w-none"> 
                <div className="grid gap-5 max-w-lg mx-auto py-6 bg-neutral rounded-lg
                            lg:grid-cols-3 lg:max-w-none">
                    <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'> {/* card 1 */}
                        <div className='p-4'>
                            <p className='text-secondary'>#1</p>
                            <h3 className='mt-2 text-2xl font-semibold leading-7 text-gray-900'>Your rating</h3>
                            {/* <p className='mt-2 leading-6 text-gray-400 font-light'>
                                How others responded to your discourse.
                            </p> */}
                            <div className='mt-6 flex items-center'> {/* author-1 info container */}
                                <div className='flex-shrink-0'>
                                    <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                                </div>
                                <div className='ml-4 align-middle'>
                                    <p className='text-sm leading-5 font-medium text-primary'>Username</p>
                                    <time dateTime='2022-11-15' className='text-sm leading-5 text-primary opacity-50'>
                                        Nov 15, 2022
                                    </time>
                                </div>        
                            </div>
                        </div> 
                    </div>
                    <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'> {/* card 2 */}
                        <div className='p-4'>
                            <p className='text-secondary'>#2</p>
                            <h3 className='mt-2 text-2xl font-semibold leading-7 text-gray-900'>Others' reviews</h3>
                            {/* <p className='mt-2 leading-6 text-gray-400 font-light'>
                                Lorem ipsum dolor sit amet. Eos repellendus unde sit omnis accusantium.
                            </p> */}
                            <div className='mt-6 flex items-center'> {/* author-2 info container */}
                                <div className='flex-shrink-0'>
                                    <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                                </div>
                                <div className='ml-4 align-middle'>
                                    <p className='text-sm leading-5 font-medium text-primary'>Username</p>
                                    <time dateTime='2022-11-15' className='text-sm leading-5 text-primary opacity-50'>
                                        Nov 15, 2022
                                    </time>
                                </div>        
                            </div>
                        </div> 
                    </div>
                    <div className='mt-4 mx-4 rounded-xl shadow-lg overflow-hidden bg-white'> {/* card 2 */}
                        <div className='p-4'>
                            <p className='text-secondary'>#3</p>
                            <h3 className='mt-2 text-2xl font-semibold leading-7 text-gray-900'>Your bestie</h3>
                            {/* <p className='mt-2 leading-6 text-gray-400 font-light'>
                                Lorem ipsum dolor sit amet. Eos repellendus unde sit omnis accusantium.
                            </p> */}
                            <div className='mt-6 flex items-center'> {/* author-2 info container */}
                                <div className='flex-shrink-0'>
                                    <img className="h-12 w-12 rounded-full mask-circle" src="https://placeimg.com/160/160/arch" />
                                </div>
                                <div className='ml-4 align-middle'>
                                    <p className='text-sm leading-5 font-medium text-primary'>Username</p>
                                    <time dateTime='2022-11-15' className='text-sm leading-5 text-primary opacity-50'>
                                        Nov 15, 2022
                                    </time>
                                </div>        
                            </div>
                        </div> 
                    </div>
                </div>  
            </div>
            {/* <div className='w-full h-96'></div> */}
        </div>
    )
}

export default Stats;