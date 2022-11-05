
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import Home from './routes/home';
import Register from './routes/register';
import Navigation from './routes/navigation';
import Login from './routes/login';
import Discover from './components/discover';
import Learn from './components/learn';



const App = () => {

  return (

    <div>
    
    <Routes>
     
      <Route path='/' element = {<Navigation />} >
        <Route index={true} element = {<Home />} />
        <Route path='register' element = {<Register />} />
        <Route path='login' element = {<Login />} />
        <Route path='learn' element = {<Learn />} />
        <Route path='discover' element = {<Discover />} />
      </Route>
    </Routes>
   
    
    </div>

    
  );
}

export default App;
