import './App.css';
import React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, Outlet } from 'react-router-dom'

const App = () => {

  return (
    <React.StrictMode>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/resume" element={<Resume />}/>
      </Routes>
      <Outlet />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
