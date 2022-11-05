import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () =>{
    return (
      <Fragment>
        <div className = "navigation">
        <div className = "home-logo">
        <Link className = "home-link" to='/'>
            Ekko 
       </Link>
        </div>

        <div className = "register-component">
        <Link className = "register-link" to='/register'>
            Register 
       </Link>
        </div>

        <div className = "login-component">
        <Link className = "login-link" to='/login'>
            Login 
       </Link>
        </div>

        <div className = "learn-component">
        <Link className = "learn-link" to='/learn'>
            Learn 
       </Link>
        </div>

        <div className = "discover-component">
        <Link className = "discover-link" to='/discover'>
            Discover 
       </Link>
        </div>
        <Outlet/>
        </div>
      </Fragment>
    );
  };

export default Navigation;

