import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();
  const fullName = localStorage.getItem('fullName');

  const logout = () => {
    localStorage.clear();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/" className="main-logo" onClick={() => setIsOpen(false)}>VANSH BLOG</Link>

        {/* Hamburger Icon - Only visible on mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Navigation Menu with all 5 links */}
        <div className={isOpen ? "menu active" : "menu"}>
          <Link to="/" className="links" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/blog" className="links" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/about" className="links" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="links" onClick={() => setIsOpen(false)}>Contact</Link>

          {localStorage.getItem('token') ? (
            <div className="user-section">
              <span className="welcome-text">Hi, {fullName}</span>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="links" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;