import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Navbar = (props) => {
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [text, changeText] = useState('Light Mode');

  const changeMode = () => {
    if (mode.color === 'black') {
      setMode({
        color: 'white',
        backgroundColor: 'black',
      });
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      changeText('Light Mode');
    } else {
      setMode({
        color: 'black',
        backgroundColor: 'white',
      });
      changeText('Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={mode}>
      <div className="container">
        {/* Brand/Logo */}
        <a className="navbar-brand" href="#">
          <div className="brand-text">
            <span className="brand-main">{props.title}</span>
            <span className="brand-sub">Solutions</span>
          </div>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/aboutus">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/login">
                Login
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex search-container">
            <input
              type="search"
              className="form-control search-box"
              placeholder="Search..."
            />
            <button className="btn btn-outline-light search-button" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Dark/Light Mode Toggle Button */}
          <div>
            <button className="btn btn-primary" id="togglebtn" onClick={changeMode}>
              {text}
            </button>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;