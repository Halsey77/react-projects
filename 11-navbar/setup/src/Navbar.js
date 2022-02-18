import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button className="nav-toggle" onClick={() => setShowLink(prev => !prev)}>
            <FaBars />
          </button>
        </div>
        <div className={`link-container ${showLink && "show-container"}`}>
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
