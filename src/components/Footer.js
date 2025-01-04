import React from "react";
import "../styles/pages.css"; // Ensure to style this footer accordingly

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4>MYPDFHUB</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/tools">Tools</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        {/* <div className="footer-column">
          <h4>PRODUCT</h4>
          <ul>
            <li><a href="/desktop">mypdfHub Desktop</a></li>
            <li><a href="/mobile">mypdfHub Mobile</a></li>
            <li><a href="/developers">Developers</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">mypdfhub</a></li>
          </ul>
        </div> */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>
          <ul>
            <li><a href="/business">Business</a></li>
            <li><a href="/education">Education</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/legal">Legal & Privacy</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 <a href="/">mypdfHub</a> - Your PDF Editor. All Rights Reserved.
        </p>
        <div className="footer-social-links">
          <a href="/terms">Terms & Conditions</a> | 
          <a href="/privacy">Privacy Policy</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
