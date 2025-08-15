import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Forge</div>
      <ul className="nav-links">
        <li><a href="#manufacture">Manufacture</a></li>
        <li><a href="#tools">Tool Library</a></li>
        <li><a href="#contact">Get in touch</a></li>
      </ul>
    </nav>
  );
}
