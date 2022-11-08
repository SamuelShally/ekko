const Learn = () =>{
    return (
        <div className="relative space-y-4 h-screen">
            <div className="grid absolute gap-y-12 mx-6 text-left justify-center top-1/3 -translate-y-1/2">
                <h1 className="text-2xl font-bold">Learn and find resources<br />on
                    <span className="text-secondary"> Free Speech</span> with <span className="text-secondary">Ekko</span>
                </h1>
                <p className="text-md font-light opacity-30">This is a page of resources for educating ourselves on how to engage in
                    civil discourse and how to exercise our right to freedom of speech.
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
