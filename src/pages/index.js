import React from 'react';
import Main from './Main/Main';
import { Login, Register } from './Authentification/Authentification';

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