import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import React from 'react';

const Navigation = () => {
  return (
    <div className="navbar relative bg-base-100 w-full flex px-3 py-5 mx-auto justify-between items-center"> 
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-14 scale-75 -ml-2 -mt-2" fill="none"><path fill="#000" d="M19.14 49.6c-3.32 0-6.26-.68-8.82-2.04-2.52-1.4-4.5-3.3-5.94-5.7-1.4-2.44-2.1-5.24-2.1-8.4 0-2.48.4-4.74 1.2-6.78.8-2.04 1.92-3.8 3.36-5.28 1.44-1.52 3.14-2.68 5.1-3.48 2-.84 4.16-1.26 6.48-1.26 2.12 0 4.06.4 5.82 1.2 1.8.8 3.36 1.9 4.68 3.3 1.32 1.36 2.32 3 3 4.92.72 1.88 1.06 3.94 1.02 6.18l-.06 2.64H7.32l-1.44-5.1H26.7l-.9 1.02v-1.38c-.12-1.2-.52-2.26-1.2-3.18-.68-.96-1.56-1.7-2.64-2.22-1.04-.56-2.2-.84-3.48-.84-1.96 0-3.62.38-4.98 1.14-1.36.72-2.4 1.8-3.12 3.24-.68 1.44-1.02 3.22-1.02 5.34 0 2.04.42 3.82 1.26 5.34.88 1.52 2.12 2.7 3.72 3.54 1.6.84 3.46 1.26 5.58 1.26 1.48 0 2.84-.24 4.08-.72 1.28-.48 2.64-1.34 4.08-2.58l3.6 5.04c-1.08 1-2.32 1.86-3.72 2.58-1.36.68-2.8 1.22-4.32 1.62-1.52.4-3.02.6-4.5.6Zm27.176-10.26-1.38-6.96 15-15h9.78l-23.4 21.96ZM39.476 49V4.6h7.32V49h-7.32Zm21.3 0-11.58-14.04 5.16-4.44L69.896 49h-9.12Zm20.52-9.66-1.38-6.96 15-15h9.781l-23.4 21.96ZM74.457 49V4.6h7.32V49h-7.32Zm21.3 0-11.58-14.04 5.16-4.44L104.878 49h-9.12Z"/><path fill="#DEDBC0" d="M121.006 34.21c7.182-3.56-9.907.576 1.497-16.316 8.59-.594 13.39 5.668 13.986 14.224.596 8.556-4.433 16.066-11.647 16.066-3.313-5.744-8.468-10.592-3.836-13.975Z"/><path fill="#000" d="M127.639 29.861c.651 2.266-1.548 4.11-3.074 5.907-2.437 2.869-3.53 6.505.57 12.416-10.394.718-19.397-5.343-19.993-13.899-.596-8.556 7.552-15.673 17.946-16.391-6.185 4.517 3.205 7.285 4.551 11.968Z"/></svg>
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

