import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Custom styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.webp" alt="Logo" className="navbar-logo" /> {/* Replace "logo.webp" with your logo path */}
          MyPDFHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto"> {/* Centering nav items */}
            <li className="nav-item">
              <Link className="nav-link" to="/merge-pdf">Merge PDF</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/split-pdf">Split PDF</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compress-pdf">Compress PDF</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Convert From PDF
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/pdf-to-word">PDF to Word</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pdf-to-powerpoint">PDF to PowerPoint</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pdf-to-word">PDF to JPG</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pdf-to-powerpoint">PDF to PDF/A</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pdf-to-powerpoint">PDF to Excel</Link>
                </li>
              </ul>
             
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Convert To PDF
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/word-to-pdf"> Word To PDF</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/powerpoint-to-pdf">PowerPoint To PDF</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jpg-to-pdf">JPG To PDF</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/html-to-pdf">HTML To PDF</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/excel-to-pdf">Excel To PDF</Link>
                </li>
              </ul>
             
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">All PDF Tools</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto"> {/* Right-aligned login and signup */}
            <li className="nav-item">
              <Link className="nav-link login-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link signup-btn" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;