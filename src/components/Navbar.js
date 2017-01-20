import React from 'react';
import '../styles/components/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img src="/assets/images/accernlogosquare-4.png" alt=""/>
      <ul>
        <li><a href="#">Home</a> <span className="dot">.</span> </li>
        <li><a href="#">Company</a> <span className="dot">.</span> </li>
        <li><a href="#">Resources</a> <span className="dot">.</span> </li>
        <li><a href="#">Contact</a> <span className="dot">.</span> </li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}
