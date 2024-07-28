import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

const App = () => {

  return (
    <React.StrictMode>
       <div className="navbar">
       <div className="dropdown">
          <button className="dropbtn"> Projects
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className='topnav-right'>
          <a href="#home">About</a>
          <a href="#news">Resume</a>
          <a href="/contact">Contact</a>
        </div>
      </div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
      <Outlet />
      <footer>
        <p>Created By: Patrick Maes</p>
        <p><a href="patrickmaes1112@icloud.com">patrickmaes1112@icloud.com</a></p>
        <p>720-818-2140</p>
      </footer> 
    </React.StrictMode>
  );
}

export default App;
