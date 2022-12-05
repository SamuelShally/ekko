import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
=======
import { useLogout } from '../hooks/useLogout'
import { useNavigate  } from 'react-router-dom';
>>>>>>> lemonbranch03

const UserNav = () => {
    const { logout } = useLogout();
    const navigate = useNavigate();
    

    const handleClick = () =>{
        logout();
        navigate('/'); 

    }
<<<<<<< HEAD
=======


>>>>>>> lemonbranch03
    return (
        <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:w-9 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        {/* <li><a>Favorites</a></li> */}
                        {/* <li><a>Friends</a></li> */}
<<<<<<< HEAD
                        {/* <li><Link to="/saved">Saved</Link></li>
                        <li><Link to="/stats">Stats</Link></li> */}
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={handleClick}>Logout</Link>
                        </li>
=======
                        <li><a>Saved</a></li>
                        <li><a>Stats</a></li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleClick}>Logout</a></li>
>>>>>>> lemonbranch03
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl
                              md:text-2xl">My Space</a>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                         className="w-6 h-6 md:w-8 md:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                </button> */}
                <Link to='/post'>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                 className="h-6 w-6 md:w-8 md:h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    </Link>
                </div>
            </div>
    );
  };
  
  export default UserNav;