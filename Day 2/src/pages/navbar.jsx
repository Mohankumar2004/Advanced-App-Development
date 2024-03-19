import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css'
import AccountMenu from './profilemenu';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EduAdmit Connec</div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/home" className='link'>Home</Link></li>
        <li className="nav-item"><Link to="/student" className='link'>Student</Link></li>
        <li className="nav-item"><Link to="/collegelist" className='link'>College</Link></li>
        <li className="nav-item"><Link to="/course" className='link'>Course</Link></li>
        <div className='profile-icon-nav'>
        <AccountMenu/>
        </div>
      </ul>
      
    </nav>
  );
}

export default Navbar;