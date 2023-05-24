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
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // state for managing navbar menu on smaller res to trigger ternary for img to open or close
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  console.log(activePage);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    console.log(windowWidth);
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
      {/* rando line on desktop view */}
      {/* tablet res + nav menu */}
      <div className="navContainer">
        {windowWidth >= 1440 && <hr id="randoLine" />}
        <ul>
          <Link href={"/"} className="link">
            <li className={activePage === "home" ? "activePage" : ""}>
              {windowWidth >= 1440 ? (
                <div className="largeResNavLink">
                  <div>00</div>
                  <div>HOME</div>
                </div>
              ) : (
                "HOME"
              )}
            </li>
          </Link>
          <Link href={"/Destination"} className="link">
            <li className={activePage === "destination" ? "activePage" : ""}>
              {windowWidth >= 1440 ? (
                <div className="largeResNavLink">
                  <div>01</div>
                  <div>DESTINATION</div>
                </div>
              ) : (
                "DESTINATION"
              )}
            </li>
          </Link>
          <Link href={"/Crew"} className="link">
            <li className={activePage === "crew" ? "activePage" : ""}>
              {windowWidth >= 1440 ? (
                <div className="largeResNavLink">
                  <div>02</div>
                  <div>CREW</div>
                </div>
              ) : (
                "CREW"
              )}
            </li>
          </Link>
          <Link href={"/Technology"} className="link">
            <li className={activePage === "technology" ? "activePage" : ""}>
              {windowWidth >= 1440 ? (
                <div className="largeResNavLink">
                  <div>03</div>
                  <div>TECHNOLOGY</div>
                </div>
              ) : (
                "TECHNOLOGY"
              )}
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
