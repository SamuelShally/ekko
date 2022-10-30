import Greeting from '../../components/helloEkko';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (


    <div className="App">
    
    <div className = "Register">
       <a href="https://www.reactjs.org"> Register </a>
    </div>
    <div className = "Login">
       <a href="https://www.reactjs.org"> Login </a>
    </div>
    <Greeting />
    <Outlet />
    </div>
  );

}
export default Home;