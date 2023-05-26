// must have use client otherwise will receive error because this is a client component and not server component
"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import navMenuCloseIcon from "../../assets/shared/icon-close.svg";
import Link from "next/link";

type Props = {
  // receive string props through page navbar is imported in to conditionally render line underneath indicating active page
  activePage: string;
};

const Navbar = ({ activePage }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  // state for managing navbar menu on smaller res to trigger ternary for img to open or close
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  useEffect(() => {
    // monitors window width to auto close sidebar so its not automatically open
    if (windowWidth >= 768 && navbarOpen === true) {
      setNavbarOpen(false);
    }
  }, [windowWidth, navbarOpen]);

  // detects screen width so ternary can be used to render mobile navbar or (tablet res and bigger) navbar
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

  // open and closes side navbar at mobile res
  const toggleNavbar = useCallback(() => {
    setNavbarOpen((prevState) => !prevState);
  }, []);
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
      {/* 
        easier to have two seperate navbars due to sliding window on mobile res. 
        ternary operator to display mobile navbar on lower res and tablet and larger on 768px+ width 
      */}
      {windowWidth >= 768 ? (
        <div className="navContainer">
          {/* tablet and larger res navbar */}
          {/* rando line on desktop view */}
          {windowWidth >= 1440 && <hr id="randoLine" />}
          <ul>
            <Link href={"/"} className="link">
              <li className={activePage === "home" ? "activePage" : ""}>
                {/* ternary  to display ## text on larger res */}
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
      ) : (
        <div className={`slidingMenu ${navbarOpen && "navbarOpen"}`}>
          {/* sliding menu for mobile */}
          <ul>
            <Link href={"/"} className="link">
              {/* ternary for active page to trigger conditional class to show active page underline */}
              <li className={activePage === "home" ? "activePage" : ""}>
                <div>00</div>
                <div>HOME</div>
              </li>
            </Link>
            <Link href={"/Destination"} className="link">
              <li className={activePage === "destination" ? "activePage" : ""}>
                <div>01</div> <div>DESTINATION</div>
              </li>
            </Link>
            <Link href={"/Crew"} className="link">
              <li className={activePage === "crew" ? "activePage" : ""}>
                <div>02</div> <div>CREW</div>
              </li>
            </Link>
            <Link href={"/Technology"} className="link">
              <li className={activePage === "technology" ? "activePage" : ""}>
                <div>03</div> <div>TECHNOLOGY</div>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
