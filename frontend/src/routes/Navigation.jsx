import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import logo from '../img/logo-standard.png';

const Navigation = () => {
  return (
    // <nav className="w-full flex py-6 justify-between items-center">
    //   <img src={logo} alt="ekko" className="w-[250px] h-[124px]"/>
    // </nav>
    <div className="navbar bg-base-100 w-full flex p-3 justify-between items-center"> 
      <div className="flex-1">
        {/* <img src={logo} alt="ekko" /> */}
        <Link to="/">
          <button className="btn btn-ghost normal-case text-2xl px-2">
            Ekko
          </button>
        </Link>
      </div>
      <div className="flex-none p-2">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/login">
              <button className="text-l btn btn-sm sm:btn-sm md:btn-md lg:btn-lg py-0">
                Sign in
              </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="text-m btn btn-sm sm:btn-sm md:btn-md lg:btn-lg bg-primary text-neutral rounded-full hover:text-secondary hover:bg-white">
                Sign up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

