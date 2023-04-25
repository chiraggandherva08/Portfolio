import React from "react";
import "./menu.css";
import menuIcon from "./menu-icon.svg";
import braces from "./braces.svg";

const Menubar = () => {
  const menuInfo = {
    logo: "The dev",
  };

  const listElements = [
    "Home",
    "Introduction",
    "Work",
    "Blog",
    "Testimonials",
    "Contact",
  ];

  const toggleMenu = () => {
    document.querySelector(".navbar").classList.toggle("toggledBar");
  };

  return (
    <nav className="menubar">
      <ul className="menulist">
        <li className="logo">
          <img src={braces} /> {menuInfo.logo}
        </li>
      </ul>

      <ul className="navbar">
        {listElements.map((element, index) => {
          return (
            <li className="navbar-item" key={index}>
              <a href={`#${element.toLowerCase()}`} onClick={() => {toggleMenu()}} >{element}</a>
            </li>
          );
        })}
      </ul>

      <ul
        className="navbar-btn"
        onClick={() => {
          toggleMenu()
        }}
      >
        <img className="navbar-icon" src={menuIcon} alt="menu=icon" />
      </ul>
    </nav>
  );
};

export default Menubar;
