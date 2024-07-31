import React from 'react'
 import './Navbar.css'
const Navbar = () => {
  return (
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
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
          <a href="/">Home</a>
        </div>
      </div> 
  )
}
 
export default Navbar