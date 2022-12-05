import { Link, useSearchParams } from 'react-router-dom';

import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import fish from '../img/fish.png';
import PreviousBtn from '../components/Previous';


import Previous from '../components/Previous';
import { useLogin } from "../hooks/useLogin"



const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

  
    const navigate = useNavigate();

    const {login,error,isLoading} = useLogin();

    const submitForm = async(e) =>{
        e.preventDefault();
        await login(username,password);
        

    }

    return (
        <div className="relative">
            <div className='grid sm:grid-cols-3 w-screen h-screen'>

                {/* Previous button */}
                <div className="absolute flex justify-between place-items-center w-screen z-30 py-5">
                    <Link to="/">
                        <Previous/>
                    </Link>
                </div>

                <div className="relative grid gap-y-14 place-content-center h-screen z-0
                                min-w-min sm:col-span-2">
                    <div className="h-0 place-self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-16 scale-75 justify-self-end -mr-4" fill="none"><path fill="#DEDBC0" d="M35.786 35.009c14.869-7.167-20.51 1.162 3.099-32.858C56.669.955 66.606 13.566 67.84 30.798c1.234 17.23-9.178 32.354-24.112 32.354-6.86-11.568-17.532-21.331-7.942-28.143Z"/><path fill="#29180F" d="M49.715 29.833c-.426 2.318-2.25 4.048-3.969 5.657-6.642 6.218-11.253 13.861-1.413 27.662-21.517 1.447-40.156-10.76-41.39-27.99C1.707 17.93 18.577 3.597 40.094 2.15c-14.341 10.19 11.774 15.96 9.62 27.682Z"/></svg>
                    </div>
                    <h1 className="text-3xl font-semibold">Welcome back</h1>
                    <form className="grid gap-6">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"/>

                        <input type="text" placeholder="Username"
                                className="input w-80 max-w-xs rounded-full border-solid border-2
                                input-md font-light text-xs"
                                value={username}
                                onChange = {(e)=>setUsername(e.target.value)}
                                />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"/>
                            <input type="password" placeholder="Password"
                                className="input w-full max-w-xs rounded-full border-solid border-2
                                input-md font-light text-xs"
                                value={password}
                                onChange = {(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button
                            className="text-lg text-neutral rounded-full bg-primary
                            px-20 w-80 btn-md"
                            onClick = {submitForm}>
                                Sign in
                        </button>
                    </form>
                    {error && <div className='error'>{error}</div>}
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

                <h1 className="text-3xl font-semibold">Welcome back</h1>
                <form  className="grid gap-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label"/>

                    <input type="text" placeholder="User name "
                            className="input w-80 max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"
                            value={username}
                            onChange = {(e)=>setUsername(e.target.value)}
                            />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"/>
                        <input type="password" placeholder="Password"
                            className="input w-full max-w-xs rounded-full border-solid border-2
                            input-md md:input-lg lg:input-lg font-light text-xs"
                            value={password}
                            onChange = {(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button
                        disbaled={isLoading}
                        className="text-lg text-neutral rounded-full bg-primary
                        px-20 w-80 btn-md md:btn-lg lg:btn-lg"
                        onClick = {submitForm}>
                            Sign in
                    </button>
                </form>
                {error && <div className='error'>{error}</div>}

            </div>
        </div>
    );
};

export default LoginForm