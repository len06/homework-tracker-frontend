import React from 'react';
import Main from './Main/Main';
import Login from './Authentification/Login';
import Register from './Authentification/Register';
import Account from './Account/Account';

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
    },
    {
        path: '/myaccount',
        element: <Account/>
    }
];

export default pages;