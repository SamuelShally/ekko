const RegisterForm = () =>{
    return (
        <div>
            <h1>Welcome to our app! Please sign up with your username, email and password </h1>
            <form onSubmit={()=>{}}>
                <label> Username</label>
                <input type = "text" required />

                <label> Email </label>
                <input type="email" required />

                <label> Password</label>
                <input type ="password"required />
                <button type="submit"> Sign up </button>
            </form>
        </div>

    )

}

export default RegisterForm;