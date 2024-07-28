import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import { Link, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <React.StrictMode>
       <div class="navbar">
       <div class="dropdown">
          <button class="dropbtn"> Projects
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
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
    </React.StrictMode>
  );
}

export default App;
