// must have use client otherwise will receive error because this is a client component and not server component
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import navMenuCloseIcon from "../../assets/shared/icon-close.svg";

type Props = {};

const Navbar = (props: Props) => {
  // state for managing navbar menu on smaller res to trigger ternary for img to open or close
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navbar">
      <Image className="logo" src={logo} alt="logo" />

      {/* This will have a higher z index to sit on top of the slide out menu div that is positioned absolutely */}
      <Image
        className="openCloseIcon"
        src={navbarOpen ? navMenuCloseIcon : hamburgerIcon}
        alt="hamburger menu icon"
        onClick={toggleNavbar}
      />
      <div className={`slidingMenu ${navbarOpen && "navbarOpen"}`}>
        <ul>
          <li>
            <div>00</div>
            <div>HOME</div>
          </li>
          <li>
            <div>01</div> <div>DESTINATION</div>
          </li>
          <li>
            <div>02</div> <div>CREW</div>
          </li>
          <li>
            <div>03</div> <div>TECHNOLOGY</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
