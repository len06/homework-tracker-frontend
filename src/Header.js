import React from 'react'
import logo from './assets/logo.jpg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header(){
    const username = localStorage.getItem('username');
    
    return(
        <header>
            <nav className="nav_bar">
                <NavLink end to='/' className="nav_logo">
                    <img src={logo} alt="Homework Tracker Logo"/>
                    <h3>Homework Tracker</h3>
                </NavLink>
                <ul className='nav_options'>
                    <li><Link>Support</Link></li>
                    
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