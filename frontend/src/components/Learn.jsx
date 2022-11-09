const Learn = () =>{
    return (
        <div className="relative h-screen bg-neutral w-screen">
            <div className="grid absolute gap-y-4 bg-neutral px-8 text-center mt-20 w-screen">
                <h1 className="text-4xl font-bold leading-relaxed">Make<br />
                    <span className="text-secondary text-5xl"> Free Speech </span><br/>Easy.
                </h1>
                <p className="text-md font-light opacity-30 text-center w-full align-middle justify-self-center">Check out our proudly curated resources to better engage in
                    civil discourse and exercise your right to freedom of speech.
                </p>
            </div>
            {/* <div className="relative grid grid-rows-3 content-center w-screen">
                <button className=" 
                btn bg-accent rounded-full w-80 sm:btn-sm md:btn-md lg:btn-lg">
                    Link 1
                </button>
                <button className=" 
                btn bg-accent rounded-full w-80 sm:btn-sm md:btn-md lg:btn-lg">
                    Link 2
                </button>
                <button className=" 
                btn bg-accent rounded-full w-80 sm:btn-sm md:btn-md lg:btn-lg">
                    Link 3
                </button>
            </div> */}
        </div>
        

    )

}

export default Learn;
