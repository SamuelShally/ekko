import { useState } from 'react';

const RegisterForm = () =>{
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const submitForm = (event) => {
        console.log("Values to POST to API")
        console.log("--------------")
        console.log("Username: ", username)
        console.log("Email: ", email)
        console.log("Password: ", password)

        console.log("Body: ", JSON.stringify({
            username: username,
            email: email,
            password: password,
        }))

        // POST request here
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })})
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        event.preventDefault(); // Do not remove
    }

    const setValue = (event) => {
        const value = event.target.value;

        switch(event.target.id) {
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }
    
    return (
        <div>
            <h1>Welcome to our app! Please sign up with your username, email and password </h1>
            <form onSubmit={submitForm}>
                <label> Username</label>
                <input id="username" type="text" value={username} onChange={setValue} required />

                <label> Email </label>
                <input id="email" type="email" value={email} onChange={setValue} required />

                <label> Password</label>
                <input id="password" type ="password" value={password} onChange={setValue} required />
                <button type="submit"> Sign up </button>
            </form>
        </div>

    )

}

export default RegisterForm;