
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import './App.css';
import Home from './routes/Home';
import Register from './routes/Register';
import CreateProfile from './components/CreateProfile';
import Navigation from './routes/Navigation';
import Login from './routes/Login';
import Discover from './components/Discover';
import Learn from './components/Learn';
import ChatRoom from './routes/ChartRoom';
import ChatRoomList from './routes/ChatRoomList';
import ElementWrapper from './routes/Wrapper';
import Profile from './components/UserProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/nav' element = {<Navigation />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element = {<CreateProfile />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/learn' element = {<Learn />} />
        <Route path='/discover' element = {<Discover />} />
        <Route path='/chatList' element = {<ChatRoomList />} />
        <Route path='/chat/:roomid' element={<ElementWrapper routeElement={ChatRoom}/>} />
        <Route path='/profile/:userid' element={<ElementWrapper routeElement={Profile}/>} />
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
