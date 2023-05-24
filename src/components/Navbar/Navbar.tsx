// must have use client otherwise will receive error because this is a client component and not server component
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import navMenuCloseIcon from "../../assets/shared/icon-close.svg";
import Link from "next/link";

type Props = {
  activePage: string;
};

const Navbar = ({ activePage }: Props) => {
  // state for managing navbar menu on smaller res to trigger ternary for img to open or close
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  console.log(activePage);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav>
      <Link href={"/"}>
        <Image className="logo" src={logo} alt="logo" />
      </Link>
      {/*
       disabled on tablet width res+
       This will have a higher z index to sit on top of the slide out menu div that is positioned absolutely */}
      <Image
        className={
          navbarOpen
            ? "navMenuCloseIcon navbarIcon"
            : "hamburgerIcon navbarIcon"
        }
        src={navbarOpen ? navMenuCloseIcon : hamburgerIcon}
        alt="hamburger menu icon"
        onClick={toggleNavbar}
      />
      {/* sliding menu for mobile */}
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
      {/* tablet res + nav menu */}
      <div className="navContainer">
        <ul>
          <Link href={"/"} className="link">
            <li className={activePage === "home" ? "activePage" : ""}>HOME</li>
          </Link>
          <Link href={"/Destination"} className="link">
            <li className={activePage === "destination" ? "activePage" : ""}>
              DESTINATION
            </li>
          </Link>
          <Link href={"/Crew"} className="link">
            <li className={activePage === "crew" ? "activePage" : ""}>CREW</li>
          </Link>
          <Link href={"/Technology"} className="link">
            <li className={activePage === "technology" ? "activePage" : ""}>
              TECHNOLOGY
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
