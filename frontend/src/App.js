
import React from 'react';
import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import Home from './routes/home/home';
import Register from './routes/register/register';

const Nav = () =>{
  return (
    <div>
      <div>
      <h1> I am the navigation bar</h1>
      </div>
      <Outlet/>
    </div>
  
  );
};

const App = () => {

  return (
    <Routes>
     
      <Route path='/' element = {<Nav />} >
        <Route index={true} element = {<Home />} />
        <Route path='register' element = {<Register />} />
      </Route>
      
    </Routes>
  );
}

export default App;
