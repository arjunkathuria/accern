import React from 'react';
import { Link } from 'react-router';

import '../styles/components/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img src="/assets/images/accernlogosquare-4.png" alt=""/>
      <ul>
        <li><a href="#">Home</a></li>
        <li><span className="dot">.</span></li>
        <li>
          <Link to="/company">
            Company
          </Link>
        </li>
        <li><span className="dot">.</span></li>
        <li>
          <Link to="/resources">
            Resources
          </Link>
        </li>
        <li><span className="dot">.</span></li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li><span className="dot">.</span></li>
        <li><a href="https://app.accern.com">Login</a></li>
        <li>
          <Link to="/resources">
            <span className="icon-search5"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
