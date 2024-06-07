import React from 'react'
import logo from './images/logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <nav className="nav_bar">
                <img className="nav_logo"src={logo} alt="Homework Tracker Logo"/>
                <h3 className='nav_title'>Homework Tracker</h3>
                <ul className='nav_options'>
                    <li><Link>Support</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header