import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import logo from '../img/logo-standard.png';

const Navigation = () => {
  return (
    // <nav className="w-full flex py-6 justify-between items-center">
    //   <img src={logo} alt="ekko" className="w-[250px] h-[124px]"/>
    // </nav>
    <div className="navbar bg-base-100 w-full flex py-6 justify-between items-center">
      <div className="flex-1">
      {/* <img src={logo} alt="ekko" /> */}
        <a className="btn btn-ghost normal-case text-xl">Ekko</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/login"><button className="sm:btn-sm md:btn-md lg:btn-lg btn-secondary">Sign in</button></Link>
          </li>
          <li>
            <Link to="/register"><button className="sm:btn-sm md:btn-md lg:btn-lg bg-primary text-neutral rounded-full">Sign up</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// const Navigation = () =>{
//     return (
//       <Fragment>
//         <div className = "navigation">
//         <div className = "home-logo">
//         <Link className = "home-link" to='/'>
//             Ekko 
//        </Link>
//         </div>

//         <div className = "register-component">
//         <Link className = "register-link" to='/register'>
//             Register 
//        </Link>
//         </div>

//         <div className = "login-component">
//         <Link className = "login-link" to='/login'>
//             Login 
//        </Link>
//         </div>

//         <div className = "learn-component">
//         <Link className = "learn-link" to='/learn'>
//             Learn 
//        </Link>
//         </div>

//         <div className = "discover-component">
//         <Link className = "discover-link" to='/discover'>
//             Discover 
//        </Link>
//         </div>
//         <Outlet/>
//         </div>
//       </Fragment>
//     );
//   };

export default Navigation;

