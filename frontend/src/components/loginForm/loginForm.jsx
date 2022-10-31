const LoginForm = () =>{
    return (
        <div>
            <h1>Welcome Back! </h1>
            <form onSubmit={()=>{}}>

                <label> Email </label>
                <input type="email" required />

                <label> Password</label>
                <input type ="password"required />
                <button type="submit"> Sign up </button>
            </form>
        </div>

    )

}

export default LoginForm;