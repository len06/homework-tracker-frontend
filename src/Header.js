import React from 'react'
import logo from './images/logo.jpg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <header>
            <nav className="nav_bar">
                <NavLink end to='/' className="nav_logo">
                    <img src={logo} alt="Homework Tracker Logo"/>
                    <h3>Homework Tracker</h3>
                </NavLink>
                <ul className='nav_options'>
                    <li><Link>Support</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header