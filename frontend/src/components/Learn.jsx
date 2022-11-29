const Learn = () =>{
    return (
        <div className="relative h-screen w-screen bg-neutral place-content-center">
            <div className="grid absolute gap-y-4 px-8 text-center mt-20 w-full">
                <h1 className="leading-relaxed font-bold text-4xl md:text-5xl md:leading-relaxed">Make<br />
                    <span className="text-secondary text-5xl md:text-6xl"> Free Speech </span><br/>Easy.
                </h1>
                <p className="w-96 text-md font-light opacity-30 text-center justify-self-center
                              sm:w-96 sm:text-lg
                              md:w-96 md:text-xl">Check out our proudly curated resources to better engage in
                    civil discourse and exercise your right to freedom of speech.
                </p>
                <div className="mt-10 grid grid-rows-3 gap-y-8 content-center w-full justify-items-center">
                    <button className=" 
                    btn bg-white rounded-full w-96 sm:btn-sm md:btn-md lg:btn-lg">
                        Link 1
                    </button>
                    <button className=" 
                    btn bg-white rounded-full w-96 sm:btn-sm md:btn-md lg:btn-lg">
                        Link 2
                    </button>
                    <button className=" 
                    btn bg-white rounded-full w-96 sm:btn-sm md:btn-md lg:btn-lg">
                        Link 3
                    </button>
                </div>
            </div>
            {/* <div className="bg-white">
                <div>
                    <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> 
                    <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
                    <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
                </div>
            </div> */}
            {/* <div className="absolute grid grid-rows-3 gap-y-6 content-center w-screen justify-items-center">
                <button className=" 
                btn bg-white rounded-full w-80 sm:btn-sm md:btn-md lg:btn-lg">
                    Link 1
                </button>
                <button className=" 
                btn bg-white rounded-full w-80 sm:btn-sm md:btn-md lg:btn-lg">
                    Link 2
                </button>
                <button className=" 
                btn bg-white rounded-full w-80 sm:btn-sm md:btn-md lg:btn-lg">
                    Link 3
                </button>
            </div> */}
        </div>
        

    )

}

export default Learn;
