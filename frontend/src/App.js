
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
import UserProfile from './components/UserProfile';
import Navigation from './routes/Navigation';
import UserNav from './components/UserNav';
import Chat from './components/Chat';
import Footer from './components/Footer';
import Login from './routes/Login';
import Discover from './components/Discover';
import Learn from './components/Learn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/nav' element={<Navigation />} />
        <Route path='/user-nav' element = {<UserNav />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<CreateProfile />} />
        <Route path='/interest' element={<Interest />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/people-like-me' element={<SimilarUsers />} />
        <Route path='/my-profile' element={<UserProfile />} />
        <Route path='/chat' element = {<Chat />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/learn' element = {<Learn />} />
        <Route path='/discover' element = {<Discover />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
