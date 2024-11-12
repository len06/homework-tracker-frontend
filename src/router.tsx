import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import pages from './src/pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: pages
    }
])