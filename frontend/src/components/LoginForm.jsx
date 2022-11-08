import { Link } from 'react-router-dom';
import ekkoO from '../img/ekko-o-512.png';
import PreviousBtn from '../components/Previous';

const LoginForm = () => {
    return (
        <div className="relative">
            {/* <div className="relative z-20"><img src={ekkoO} className="relative z-10 w-1/4 place-content-center ml-4 mt-4"/></div> */}
            <div className="relative z-0 grid gap-y-16 place-content-center h-screen">
                <h1 className="text-3xl font-semibold">Welcome back</h1>
                <form onSubmit={()=>{}} className="grid gap-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label"/>
                    <input type="text" placeholder="User name or Email address"
                            className="input w-full max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"/>
                        <input type="text" placeholder="Password"
                            className="input w-full max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"/>
                    </div>
                </form>
                <Link to="/discover">
                    <button
                        className="text-lg text-neutral rounded-full bg-primary
                        px-20 w-80 btn-md md:btn-lg lg:btn-lg">
                            Sign in
                    </button>
                </Link>
                
            </div>
        </div>
    );
};

export default LoginForm;
