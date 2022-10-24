
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//BR : wraps everwhere we want to use the routes
// Routes: wraps every single route
//route: individual route

//import components
import Greeting from './components/helloEkko';

function App() {
  return (
    <div className="App">
      <Greeting />
    
     
    </div>
  );
}

export default App;
