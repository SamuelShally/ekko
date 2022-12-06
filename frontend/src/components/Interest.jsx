import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import fish from '../img/fish.png';
// left & right margins: 6
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';


const Interest = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [interests,setInterests] = useState([]);

    useEffect(()=>{
        console.log(interests)

    },[interests])

  

    const handleLabel = (e) =>{
        if(interests.includes(e.target.value)){
            console.log("has it");
            const label = e.target.value
            const result = interests.filter((interest)=>{
                return interest!== label;
            })

            setInterests(result)
          
           
        }else{
            console.log("doesn't have it")
            setInterests(cur=>[...cur,e.target.value])
        }

    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const newUser = {username:user.user.username,interests};

        const response = await fetch("http://localhost:4000/api/users/interests",{
            method:'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();
        console.log(response,json)
        if(!response.ok){
            console.log(json.error);
        }
        if(response.ok){
            let newAuthContext = JSON.parse(localStorage.getItem("user"));
            newAuthContext.user.interests = json.interests
            localStorage.setItem('user', JSON.stringify(newAuthContext));
            setTimeout("location.reload(true);",1500);
         
            

            
            console.log("interests set");

            navigate('/people-like-me');

        }


    }




    return (
        <div className="relative bg-white h-screen z-0">
            {/* <div className='grid sm:grid-cols-3 w-screen h-screen'> */}
            <div className="relative h-screen pt-14 sm:col-span-2">
                {/* question */}
                <h1 className="relative font-bold text-3xl text-primary mb-10 ml-6 md:ml-10
                               lg:ml-16">
                    Which social issues<br />spark your interest?</h1>
                {/* option-wrapper div */}
                <div className="relative bg-neutral h-full rounded-tl-3xl rounded-tr-3xl
                                ">
                    {/* <h2 className="text-secondary text-xl font-light pt-10 mb-6 ml-6 lg:mb-10 xl:mb-10
                                    md:ml-10 lg:ml-16">Choose up to 3</h2> */}
                    {/* options */}
                    <div className="grid grid-rows-6 w-full gap-6 inset-x-7 ml-6 pt-14 lg:grid-cols-2 lg:grid-rows-3 lg:ml-12 lg:gap-10">
                        <button className="btn bg-secondary btn-md rounded-full w-5/12 max-w-xs focus:border-4 focus:border-primary
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md md:ml-4
                                            lg:btn-lg "
                                value="election"
                                onClick={handleLabel}>+ election
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-6/12 focus:border-4 focus:border-primary
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md md:ml-4 lg:btn-lg max-w-sm lg:-ml-6 xl:-ml-20"
                                value="immigration"
                                onClick={handleLabel}>+ immigration
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 focus:border-4 focus:border-primary
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md md:ml-4 lg:btn-lg max-w-md"
                                            value="reproductive rights"
                                            onClick={handleLabel}>+ reproductive rights
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2 focus:border-4 focus:border-primary
                                            text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md md:ml-4 lg:btn-lg max-w-md lg:-ml-6 xl:-ml-20"
                                            value="racial discrimination"
                                            onClick={handleLabel}>+ racial discrimination
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-4/12 pr-2 focus:border-4 focus:border-primary
                                            text-lg text-left text-neutral justify-start
                                            sm:btn-md md:btn-md md:ml-4 lg:btn-lg max-w-xs"
                                            value="LGBTQ"
                                            onClick={handleLabel}>+ LGBTQ
                        </button>
                        <button className="btn bg-secondary btn-md rounded-full w-9/12 pr-2 focus:border-4 focus:border-primary
                                           text-xl text-left text-neutral justify-start
                                            sm:btn-md md:btn-md md:ml-4 lg:btn-lg max-w-sm lg:-ml-6 xl:-ml-20"
                                            value="economic inequality"
                                onClick={handleLabel}>+ economic inequality
                        </button>
                    </div>

                    <Link to="/people-like-me"> 
                        <div className="w-full flex flex-row mt-10 ml-6 z-20">
                            <button className="btn rounded-full flex-none md:ml-4 hover:bg-neutral hover:text-primary hover:border-4 hover:border-primary
                                                bg-primary text-neutral text-md
                                                sm:btn-md md:btn-md lg:btn-lg lg:ml-10 lg:mt-10 xl:mt-20"
                                                onClick={handleSubmit}>

                                Next
                            </button>
                            </div>
                    </Link>



                   
            {/* <Link to="/quiz"> 
                        <div className="w-full flex flex-row-reverse mt-10 z-20">
                            <button className="btn rounded-full flex-none mr-6 
                                                bg-primary text-neutral text-xl"
                                    onClick={handleSubmit}>
                                Next
                            </button>
                        </div>
                    </Link> */}
                </div>
            </div>
              
        </div>
        
    );
};

export default Interest;