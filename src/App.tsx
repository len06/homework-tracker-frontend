import React from 'react';
import Header from './Header';
import './App.css';
import { Outlet } from 'react-router-dom';

function App():React.JSX.Element{
  return(
    <>
      <Header />
      <main className="app-content">
        <Outlet/>
      </main>
    </>
  )
}

export default App;
