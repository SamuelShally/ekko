import { useAuthContext } from "./useAuthContext"
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

export const useSignup = () =>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch}= useAuthContext();
    const navigate = useNavigate();

    const signup = async(username,email,password)=>{
        setIsLoading(true);
        setError(null);
        const user = {username,email,password};

        const response = await fetch("https://ekko-backend.herokuapp.com/api/users/signup",{
            method:'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type' : "application/json"
            }
        });

        const json = await response.json();

        if(!response.ok){
            console.log(json.error);
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            //saving user to local storage
            localStorage.setItem('user',JSON.stringify(json));
            
            //update auth context
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);

            //redirect to a different page
            navigate('/profile'); //navigate to creating user profile

           
        }

    }

    return {signup,isLoading,error}
}