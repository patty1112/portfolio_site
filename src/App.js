import logo from './logo.svg';
import './App.css';
import React from 'react'
import Layout from './Layout'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


const App = () => {
  // const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Layout/>
  //     }
  // ]);
  return (
    <React.StrictMode>
      <header className="navbar">
      <ul>
          {<li><a href="/home" className="navbar-button">Home</a></li>}
          {<li><a href="/about" className="navbar-button">About</a></li>}
          {<li><a href="/projects" className="navbar-button">Projects</a></li>}
        </ul>
      </header>
    </React.StrictMode>
  );
}

export default App;
