import './App.css';
import React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import { Routes, Route, Outlet } from 'react-router-dom'

const App = () => {

  return (
    <React.StrictMode>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
      <Outlet />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
