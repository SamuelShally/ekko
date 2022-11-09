import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import logo from '../img/logo-ekko.svg';

const Navigation = () => {
  return (
    <div className="navbar bg-base-100 w-full flex px-3 py-5 justify-between items-center"> 
        <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-12 scale-75 -ml-4 -mt-2" viewbox="0 0 30 30" fill="none"><path fill="#000" d="M5.22 49V7H34.5v8.76H15.24v24.48h19.92V49H5.22Zm4.86-17.16v-8.4h21.78v8.4H10.08Zm42.092 7.8-3.42-7.32 14.82-15.18h12.66l-24.06 22.5ZM42.932 49V4.6h9.66V49h-9.66Zm21.54 0-11.1-14.4 6.84-5.28L75.932 49h-11.46Zm25.024-9.36-3.42-7.32 14.82-15.18h12.66l-24.06 22.5ZM80.256 49V4.6h9.66V49h-9.66Zm21.54 0-11.1-14.4 6.84-5.28L113.256 49h-11.46Z"/><path fill="#DEDBC0" d="M130.391 34.21c7.383-3.56-10.184.576 1.539-16.316 8.83-.594 13.764 5.668 14.377 14.224.613 8.556-4.557 16.066-11.973 16.066-3.406-5.744-8.705-10.592-3.943-13.975Z"/><path fill="#000" d="M137.211 29.868c.665 2.266-1.57 4.091-3.126 5.859-2.53 2.875-3.684 6.518.55 12.457-10.684.718-19.939-5.343-20.552-13.899-.613-8.556 7.764-15.673 18.448-16.391-6.361 4.52 3.304 7.287 4.68 11.974Z"/></svg>
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

