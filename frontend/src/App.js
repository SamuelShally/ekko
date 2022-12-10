
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
import Interest from './components/Interest';
import Quiz from './components/Quiz';
import SimilarUsers from './components/SimilarUsers';
import UserSpace from './components/UserSpace';
import Navigation from './routes/Navigation';
import UserNav from './components/UserNav';
import Chat from './components/Chat';
import Footer from './components/Footer';
import Login from './routes/Login';
import Discover from './components/Discover';
import Learn from './components/Learn';
import Settings from './components/Settings';
import Post from './components/BlogPost';
// import ChatRoom from './components/ChatRoom';
// import ChatRoomList from './components/ChatRoomList';
// import ElementWrapper from './components/Wrapper';
import ChatRoom from './routes/ChartRoom';
import ChatRoomList from './routes/ChatRoomList';
import ElementWrapper from './routes/Wrapper';
import Profile from './components/UserProfile'


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
        <Route path='/my-space' element={<UserSpace />} />
        <Route path='/chat' element = {<Chat />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/learn' element = {<Learn />} />
        <Route path='/post' element = {<Post />} />
        <Route path='/settings' element={<Settings />} />
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
