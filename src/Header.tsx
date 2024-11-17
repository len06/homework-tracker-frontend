import React from 'react'
//import logo from '../public/assets/logo.jpg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header():React.JSX.Element | null{
    const username:string | null = localStorage.getItem('username');
    if(!username ){
        console.error("The username cannot be found!")
        return null;
    }
    console.log(username)
    return(
        <header>
            <nav className="nav_bar">
                <NavLink end to='/' className="nav_logo">
                    {/* <img src={logo} alt="Homework Tracker Logo"/> */}
                    <h3>Homework Tracker</h3>
                </NavLink>
                <ul className='nav_options'>
                    <li><Link to = "#">Support</Link></li>
                    
                    { username ? 
                        <li><Link to='/myaccount'>{username}</Link></li> :
                        undefined
                    }
                    
                    { !username ?
                        <li><Link to='/login'>Log In</Link></li> :
                        undefined
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header