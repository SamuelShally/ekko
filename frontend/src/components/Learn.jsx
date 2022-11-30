import { Link } from 'react-router-dom';
import Previous from '../components/Previous';

const Learn = () => {
    return (
        <div className="relative min-h-screen min-w-screen bg-neutral">
            {/* Previous button */}
            <div className="absolute flex justify-between place-items-center w-screen z-30 py-5">
                <Link to="/"><Previous/></Link>
            </div>
            <div className="grid gap-y-4 text-center w-screen py-20 place-content-center">
                <h1 className="leading-relaxed font-bold text-4xl md:text-5xl md:leading-relaxed">Make<br />
                    <span className="text-secondary text-5xl md:text-6xl"> Free Speech </span><br/>Easy.
                </h1>
                <p className="w-2/3 text-md font-light opacity-30 text-center justify-self-center
                              sm:text-lg
                              md:text-xl
                              lg:w-2/5 xl:w-2/5">Check out our proudly curated resources to better engage in
                    civil discourse and exercise your right to freedom of speech.
                </p>
                <div className="mt-10 grid grid-rows-3 gap-y-8 content-center w-full justify-items-center">
                    <button className=" 
                    btn bg-white rounded-full px-32 sm:px-48">
                        Link 1
                    </button>
                    <button className=" 
                    btn bg-white rounded-full px-32 sm:px-48">
                        Link 2
                    </button>
                    <button className=" 
                    btn bg-white rounded-full px-32 sm:px-48">
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
