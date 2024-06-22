import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Account() {
    const navigate = useNavigate();
    function logOut() {
        const cookies = new Cookies();
        cookies.remove('token');
        localStorage.clear();
        navigate('/login',);
        window.location.reload();
    }

    return (<>
        <h1>My account</h1>
        <button onClick={logOut}>Log out</button>
    </>)
}

export default Account;