import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUserCheck, FaBookOpen, FaUniversity, FaUserGraduate } from 'react-icons/fa';
import './adminnav.css';
import '../assets/images/Icon.png';

const Sidebar = () => (
  <nav className="sidebar">
    <div className="logo">Admin Page</div>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/adminhome" activeClassName="active">
          <FaTachometerAlt /> Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/adminapprove" activeClassName="active">
          <FaUserCheck /> Approve Student
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/admincourse" activeClassName="active">
          <FaBookOpen /> Courses
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/admincollege" activeClassName="active">
          <FaUniversity /> College
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/studentlist" activeClassName="active">
          <FaUserGraduate /> Student Details
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
