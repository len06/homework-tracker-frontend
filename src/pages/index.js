import React from 'react';
import Main from './Main/Main';
import Login from './Authentification/Login';
import Register from './Authentification/Register';

const pages = [
    {
        index: true,
        element: <Main/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
];

export default pages;