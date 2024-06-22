
import React, { useState } from 'react';
import './Authentification.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPassword,setConfPasword] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(){
        axios.post("/api/register",{username, email, password}).then(() => {
            navigate("/");
        }).catch((error) => {console.log(error);});
    }
    return (<>
        <article>
            <h1>Nice to meet you!</h1>
            
            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            <label className='warning'>Username already taken</label>

            <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label className='warning'>Email required</label>
            
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value ={password}/> 
            <label className='warning'>Password required</label>

            <input type='password' placeholder='Confirm password' onChange={(e) => setConfPasword(e.target.value)} value ={confPassword}/> 
            <label className='warning'>Password does not match</label>

            <br style={{margin: '1em'}}/>

            <button onClick={handleSubmit}>Register</button>
            
            
        </article>
    </>);
}

export default Register;