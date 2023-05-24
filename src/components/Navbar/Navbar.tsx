// must have use client otherwise will receive error because this is a client component and not server component
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import navMenuCloseIcon from "../../assets/shared/icon-close.svg";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  // state for managing navbar menu on smaller res to trigger ternary for img to open or close
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <Image className="logo" src={logo} alt="logo" />
      </Link>

      {/* This will have a higher z index to sit on top of the slide out menu div that is positioned absolutely */}
      <Image
        className={navbarOpen ? "navMenuCloseIcon" : "hamburgerIcon"}
        src={navbarOpen ? navMenuCloseIcon : hamburgerIcon}
        alt="hamburger menu icon"
        onClick={toggleNavbar}
      />
      <div className={`slidingMenu ${navbarOpen && "navbarOpen"}`}>
        <ul>
          <Link href={"/"} className="link">
            <li>
              <div>00</div>
              <div>HOME</div>
            </li>
          </Link>
          <Link href={"/Destination"} className="link">
            <li>
              <div>01</div> <div>DESTINATION</div>
            </li>
          </Link>
          <Link href={"/Crew"} className="link">
            <li>
              <div>02</div> <div>CREW</div>
            </li>
          </Link>
          <Link href={"/Technology"} className="link">
            <li>
              <div>03</div> <div>TECHNOLOGY</div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
