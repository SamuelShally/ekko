
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import Home from './routes/Home';
import Register from './routes/Register';
import Navigation from './routes/Navigation';
import Login from './routes/Login';
import Discover from './components/Discover';
import Learn from './components/Learn';

const App = () => {
  return (
    <div>
    <Routes>
      <Route exact path='/' element = {<Navigation />} >
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
