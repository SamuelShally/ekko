import {BrowserRouter, Routes, Route} from 'react-router-dom'

//paghes and components
import Home from "./pages/Home"
import Navbar from './components/Navbar'

//Everything todo with the router needs to be inside the browser router tag
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              // the element to render at this path
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
