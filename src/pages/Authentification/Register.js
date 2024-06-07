
import React from 'react';
import './Authentification.css';

function Register() {
    return (<>
        <article>
            <h1>Nice to meet you!</h1>
            
            <input type='text' placeholder='Username'/>
            <label className='warning'>Username already taken</label>

            <input type='text' placeholder='Email'/>
            <label className='warning'>Email required</label>
            
            <input type='password' placeholder='Password'/> 
            <label className='warning'>Password required</label>

            <input type='password' placeholder='Confirm password'/> 
            <label className='warning'>Password does not match</label>

            <br style={{margin: '1em'}}/>

            <button>Register</button>
            
            
        </article>
    </>);
}

export default Register;