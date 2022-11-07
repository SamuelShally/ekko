import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        // <div className="flex h-screen m-0">
            <div className="grid gap-8 place-content-center mx-6 h-screen">
            <h1 className="text-2xl">Get started</h1>
            {/* <div > */}

                <form onSubmit={()=>{}} className="grid gap-4">
                    {/* <label> Email </label> */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {/* <span className="label-text">Email address</span> */}
                        </label>
                    <input type="text" placeholder="Email address"
                        className="input w-full max-w-xs rounded-full border-solid border-2
                        input-sm sm:input-sm md:input-md lg:input-lg"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {/* <span className="label-text">Set password</span> */}
                        </label>
                    <input type="text" placeholder="Set password"
                        className="input w-full max-w-xs rounded-full border-solid border-2
                        input-sm sm:input-sm md:input-md lg:input-lg"/>
                    </div>
                    {/* <label> Password</label>
                    <input type ="password"required />
                    <button type="submit"> Sign up </button> */}
                </form>

                <Link to="/discover">
                    <button className="text-m px-20 btn-sm sm:btn-sm md:btn-md lg:btn-lg bg-primary text-white rounded-full">
                        Create an account
                    </button>
                </Link>

            {/* </div> */}
        </div>
        // </div>
    )

}

export default LoginForm;