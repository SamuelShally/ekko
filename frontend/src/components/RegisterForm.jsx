import { Link } from 'react-router-dom';
import Previous from '../components/Previous';
import fish from '../img/fish.png';

const RegisterForm = () => {
    return (
        <div className="relative">
            <div className='grid sm:grid-cols-3 w-screen h-screen'>
                
                
                {/* <div className="relative z-20"><img src={ekkoO} className="relative z-10 w-1/4 place-content-center ml-4 mt-4"/></div> */}
                <div className="absolute flex justify-between place-items-center w-screen z-30 py-5">
                    <Link to="/">
                        <Previous/>
                    </Link>
                </div>
                <div className="relative z-0 grid h-screen gap-y-14 place-content-center
                                min-w-min
                                ">
                    <div className="h-0 place-self-end">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-16 scale-75 justify-self-end -mr-4" fill="none"><path fill="#DEDBC0" d="M35.786 35.009c14.869-7.167-20.51 1.162 3.099-32.858C56.669.955 66.606 13.566 67.84 30.798c1.234 17.23-9.178 32.354-24.112 32.354-6.86-11.568-17.532-21.331-7.942-28.143Z" /><path fill="#29180F" d="M49.715 29.833c-.426 2.318-2.25 4.048-3.969 5.657-6.642 6.218-11.253 13.861-1.413 27.662-21.517 1.447-40.156-10.76-41.39-27.99C1.707 17.93 18.577 3.597 40.094 2.15c-14.341 10.19 11.774 15.96 9.62 27.682Z" /></svg>
                    </div>
                    <h1 className="text-3xl font-semibold">Get started</h1>
                    <form onSubmit={() => { }} className="grid gap-6
                                                        ">
                        <div className="form-control w-3/4 max-w-s">
                            <label className="label"/>
                        <input type="text" placeholder="Username"
                                className="input w-full rounded-full border-solid border-2
                                input-md md:input-lg lg:input-lg font-light text-xs"/>
                        </div>
                        <div className="form-control w-80 max-w-s">
                            <label className="label"/>
                        <input type="text" placeholder="Email address"
                                className="input w-full rounded-full border-solid border-2
                                input-md md:input-lg lg:input-lg font-light text-xs"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"/>
                            <input type="password" placeholder="Set password"
                                className="input w-full rounded-full border-solid border-2
                                input-md md:input-lg lg:input-lg font-light text-xs"/>
                        </div>
                    </form>
                    <Link to="/profile">
                        <button
                            className="text-lg text-white rounded-full bg-primary
                            px-20 w-80 btn-md md:btn-lg lg:btn-lg">
                                Create an account
                        </button>
                    </Link>
                    
                </div>
                {/* block on breakpoint md*/}
                <div className='relative hidden bg-neutral text-primary h-full
                                sm:flex sm:col-span-1'>
                    <img className="absolute opacity-50 bottom-0 right-0
                                    sm:w-40 sm:m-6
                                    lg:w-40 lg:m-10
                                    xl:w-40 xl:m-14
                                    "
                         src={fish} alt="Fish" />
                </div>
                </div>
        </div>
    )

}

export default RegisterForm;