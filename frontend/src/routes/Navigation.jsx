import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import logo from '../img/logo-ekko.svg';

const Navigation = () => {
  return (
    <div className="navbar bg-base-100 w-full flex px-3 py-5 justify-between items-center"> 
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-12 scale-75 -ml-5 -mt-2" fill="none"><path fill="#000" d="M5.64 49V7h27.42v7.08H13.32v27.84H33.3V49H5.64Zm3.6-18v-6.96H30V31H9.24Zm39.361 8.34-1.38-6.96 15-15h9.78l-23.4 21.96ZM41.761 49V4.6h7.32V49h-7.32Zm21.3 0-11.58-14.04 5.16-4.44L72.181 49h-9.12Zm20.52-9.66-1.38-6.96 15-15h9.781l-23.4 21.96ZM76.742 49V4.6h7.32V49h-7.32Zm21.3 0-11.58-14.04 5.16-4.44L107.163 49h-9.12Z"/><path fill="#DEDBC0" d="M126.391 34.21c7.383-3.56-10.184.576 1.539-16.316 8.83-.594 13.764 5.668 14.377 14.224.613 8.556-4.557 16.066-11.973 16.066-3.406-5.744-8.705-10.592-3.943-13.975Z"/><path fill="#000" d="M133.211 29.868c.665 2.266-1.57 4.091-3.126 5.859-2.53 2.875-3.684 6.518.55 12.457-10.684.718-19.939-5.343-20.552-13.899-.613-8.556 7.764-15.673 18.448-16.391-6.361 4.52 3.304 7.287 4.68 11.974Z"/></svg>
      </Link>
      <div className="flex-none p-2">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/login">
              <button className="text-lg btn btn-sm sm:btn-sm md:btn-md lg:btn-lg">
                Sign in
              </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="text-lg btn btn-sm sm:btn-sm md:btn-md lg:btn-lg bg-primary text-neutral rounded-full hover:text-secondary hover:bg-white">
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

