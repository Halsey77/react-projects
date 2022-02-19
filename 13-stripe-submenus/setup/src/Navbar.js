import React from "react";
import logo from "./images/logo.svg";
import { FaBars, FaTheRedYeti } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { setIsSubmenuOpen, setIsSidebarOpen, openSubmenu } =
    useGlobalContext();

  const displaySubmenu = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleOnMouseOver = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      setIsSubmenuOpen(false);
    }
  };

  return (
    <nav className="nav" onMouseOver={handleOnMouseOver}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo"></img>
          <button
            className="btn toggle-btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn sigin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
