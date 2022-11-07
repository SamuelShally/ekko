import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="grid h-screen w-screen justify-center">
        <div className="grid gap-y-8 place-content-center h-screen">
            {/* <div className="place-items-center"> */}
                <h1 className="text-2xl font-semibold">Welcome back</h1>
            {/* <div/> */}
                <form onSubmit={()=>{}} className="grid gap-4">
                    {/* <label> Email </label> */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {/* <span className="label-text">Email address</span> */}
                        </label>
                    <input type="text" placeholder="Email address"
                        className="input w-full max-w-xs rounded-full border-solid border-2
                        input-sm sm:input-sm md:input-md lg:input-lg font-light text-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {/* <span className="label-text">Password</span> */}
                        </label>
                    <input type="text" placeholder="Password"
                        className="input w-full max-w-xs rounded-full border-solid border-2
                        input-sm sm:input-sm md:input-md lg:input-lg font-light"/>
                    </div>
                    {/* <label> Password</label>
                    <input type ="password"required />
                    <button type="submit"> Sign up </button> */}
                </form>

                <Link to="/discover">
                    <button className="text-m px-20 w-80 btn-sm sm:btn-sm md:btn-md lg:btn-lg bg-primary text-white rounded-full">
                        Sign in
                    </button>
                </Link>

            </div>
            </div>
    )

}

export default LoginForm;