
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import Home from './routes/Home';
import Register from './routes/Register';
import CreateProfile from './components/CreateProfile';
import Interest from './components/Interest';
import Quiz from './components/Quiz';
import SimilarUsers from './components/SimilarUsers';
import Navigation from './routes/Navigation';
import Login from './routes/Login';
import Discover from './components/Discover';
import Learn from './components/Learn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/nav' element = {<Navigation />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<CreateProfile />} />
        <Route path='/interest' element={<Interest />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/people-like-me' element = {<SimilarUsers />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/learn' element = {<Learn />} />
        <Route path='/discover' element = {<Discover />} />
          {/* <Route exact path='/' element = {<Navigation />} >
            <Route index={true} element = {<Home />} />
            <Route path='register' element = {<Register />} />
            <Route path='login' element = {<Login />} />
            <Route path='learn' element = {<Learn />} />
            <Route path='discover' element = {<Discover />} />
          </Route> */}
        </Routes>
    </Router>
  );
}

export default App;
