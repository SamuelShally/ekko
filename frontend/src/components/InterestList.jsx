import { useState } from 'react';
import { Link } from 'react-router-dom';

const Interestlist = (props) => {
    const interests = props.interests;
    // console.log(interests)
  
    
    return ( 
        <section className="flex flex-col gap-5 max-w-lg mx-auto mt-6 bg-neutral rounded-lg 
         lg:max-w-none place-items-center">
            {interests.map((interest) => (

                <Link to={`/chat/${interest}`}>
                    <div 
                    className='btn btn-md text-neutral bg-secondary rounded-full w-max px-6 text-lg'>
                        {interest}
                        </div>
                    
                </Link>

            ))} 
        </section>
     );
}
 
export default Interestlist;