import React from 'react';
import Main from './Main/Main';
import Login from './Login/Login';

const pages = [
    {
        index: true,
        element: <Main/>
    },
    {
        path: '/login',
        element: <Login/>
    }
];

export default pages;