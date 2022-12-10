import { Link } from 'react-router-dom';
// left & right margins: 6
import { useAuthContext } from "../hooks/useAuthContext";
import { useState,useEffect } from 'react';



const SettingDetails = ({u}) =>{
    const {user} = useAuthContext();
    const [isEditing,setEditing]= useState(false);
    const [username,setUsername] = useState(()=>{
        if(u){
            return u.username
        }else{
            return user.user.username
        }
    })

    const [email,setEmail] = useState(()=>{
        if(u){
            return u.email
        }else{
            return user.user.email
        }
    })

    const [intro,setIntro] = useState(()=>{
        if(u){
            return u.intro
        }else{
            return user.user.intro
        }
    })

    const [worldview,setWorldview] = useState(()=>{
        if(u){
            return u.worldview
        }else{
            return user.user.worldview
        }
    })

    const options = [
        {label:"choose a worldview",value:-1},
        {label:"liberal",value:0},
        {label:"progressive",value:1},
        {label:"conservative",value:2},
        {label:"Christian",value:3},
        {label:"Other",value:4}


    ];

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!user){
            console.log("must be logged in to update feedback");
            return
        }

        const updateInfo ={
            username,email,intro,worldview
        }
        console.log(updateInfo)
        const response = await fetch(`http://localhost:4000/api/users/updateUser/${user.user._id}`,{
            method:'PATCH',
            body: JSON.stringify(updateInfo),
            headers:{
                'Content-Type' : "application/json",
                'Authorization':`Bearer ${user.token}`,
                   
            }
        });

        const json = await response.json()
        console.log(json)
        if(response.ok){
            let newAuthContext = JSON.parse(localStorage.getItem("user"));
            newAuthContext.user = json; 
           
            localStorage.setItem('user', JSON.stringify(newAuthContext));

            
            setEditing(false)
            setTimeout("location.reload(true);",1500);
            
            
        }

        

    }


    return (<div> 
        {u && !isEditing && (
            <div> 
            <h1>{u.username}</h1>
            <h1>{u.email}</h1>
            <h1>{u.intro}</h1>
            <h1>{u.worldview}</h1>

            <button onClick={() => {
                        if(user){
                        setEditing(true)
                    }else{
                        console.log("must be logged in");
                    }}}>Edit</button>
            </div>

        )
        }
        {u && isEditing && (

            <div>
                <h2>You are editing</h2>
                <form className="update">
                <label><b> Full Name: </b> </label>
                          <input type="text" placeholder="your name" 
                           value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            <br/>

                <label><b>Email: </b></label>
                          <input type="email" placeholder="email"
                          
                          value={email}
                         onChange={(e)=>{setEmail(e.target.value)}} /> 
                          <br/>
                
                <label><b>your bio/belief: </b></label>
                <input type="intro" placeholder="bio"
                
                value={intro}
                onChange={(e)=>{setIntro(e.target.value)}} /> 
                <br/>

                <label><b>Worldview: </b></label>
                <select
                         value={worldview}
                          onChange={(e)=>{
                              const option = e.target.options[e.target.selectedIndex];
                              setWorldview(option.value);
                        }}>
                       {options.map((option)=>{
                               return <option key={option.value} value={option.label}>{option.label}</option>
                              })}
             
                </select>

                <button  onClick={handleSubmit}>Update</button>

                         
                
                </form>
                
            </div>

        )}


    </div>)

}

export default SettingDetails;