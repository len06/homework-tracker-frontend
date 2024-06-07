
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (<>
        <article>
            <h1>Welcome</h1>
            <input type='text' placeholder='Username/Email'/>
            <input type='password' placeholder='Password'/> 
            <button>Login</button>
            <br/>
            <label>
                Don't have an account? 
                <Link to='/register'>Sign Up</Link>
            </label>   
        </article>
    </>);
}

export default Login;