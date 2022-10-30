
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import Home from './routes/home/home';
import Register from './routes/register/register';

const App = () => {

  return (
    <Routes>
      <Route path='/home' element = {<Home />} />
      <Route path='/register' element = {<Register />} />
    </Routes>
  
  );
}

export default App;
