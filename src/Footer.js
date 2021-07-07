import React from 'react'
import "./footer.css"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Footer() {
    return (
      <div className="footer">
        <Link to="/" className="footer-home">
          <h3>Home</h3>
        </Link>
        <div className="footer-about">
          <h3>About </h3>
        </div>
        <div className="footer-contact-us">
          <h3> Contact us</h3>
        </div>
      </div>
    );
}

export default Footer;
