import { Link, useSearchParams } from 'react-router-dom';
import ekkoO from '../img/ekko-o-512.png';
import PreviousBtn from '../components/Previous';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Error } from 'mongoose';

const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitForm = async(e) =>{
        e.preventDefault();
        const userInput={username,password};
        console.log(userInput);
        const response = await fetch("http://localhost:4000/api/users/login",{
            method:'POST',
            body: JSON.stringify(userInput),
            headers:{
                'Content-Type' : "application/json"
            }
        });
        console.log(response);
        const json = await response.json();
        if(!response.ok){
            console.log(json.error);
            setError(json.error);
        }
        if(response.ok){
            setUsername('');
            setPassword('');
            setError(null);
            console.log("Logging");
            navigate('/discover'); //navigate to creating discover page after logging in succefully (should be replaced to user's dashboard)

        }

    }

    return (
        <div className="relative">
            {/* <div className="relative z-20"><img src={ekkoO} className="relative z-10 w-1/4 place-content-center ml-4 mt-4"/></div> */}
            <div className="relative z-0 grid gap-y-16 place-content-center h-screen">
                <h1 className="text-3xl font-semibold">Welcome back</h1>
                <form  className="grid gap-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label"/>
                    <input type="text" placeholder="User name "
                            className="input w-72 max-w-xs rounded-full border-solid border-2
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

export default LoginForm;
