import { Link } from 'react-router-dom';

const Saved = () => {
    return (
        <div>

            <div className='pl-6 pb-6 pt-20'>
                <p1 className="font-bold text-3xl">Saved</p1>
            </div>

            <div className="bg-neutral h-screen rounded-tl-3xl rounded-tr-3xl">
                <div className="grid grid-rows-3 gap-y-0 mt-6 pt-2 text-xl"> {/* create grid */}
                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>

                        </div>
                        <div className="">
                            <p3>Post #1</p3>
                        </div>
                    </div>

                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <div className="">
                            <p3>Post #2</p3>
                        </div>
                    </div>

                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <div className="">
                            <p3>Post #3</p3>
                        </div>
                    </div>

                    <div className='flex w-full px-6 py-4 border-solid border-b-2 border-primary border-opacity-25'> 
                        <div className='mr-2 pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>  
                        </div>
                        <div className="">
                            <p3>Post #4</p3>
                        </div>
                    </div>
                </div> {/* end of grid */}
            </div>
        </div>
    )
}

export default Saved;