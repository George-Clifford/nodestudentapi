import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">My School App</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">Registration</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-student" className="nav-link">Add Student</Link>
          </li>
          <li className="nav-item">
            <Link to="/get-students" className="nav-link">Get Students</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-course" className="nav-link">Add Course</Link>
          </li>
          <li className="nav-item">
            <Link to="/get-courses" className="nav-link">Get Courses</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
