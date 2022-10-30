import Greeting from '../../components/helloEkko';

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
    </div>
  );

}
export default Home;