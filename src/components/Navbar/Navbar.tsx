import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import navMenuCloseIcon from "../../assets/shared/icon-close.svg";

type Props = {};

const Navbar = (props: Props) => {
  // state for managing navbar menu on smaller res to trigger terniary for img to open or close
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <Image className="logo" src={logo} alt="logo" />

      {/*this will have a higher z index to sit on top of the slide out menu div that is positioned absolutely */}
      <Image
        src={navbarOpen ? navMenuCloseIcon : hamburgerIcon}
        alt="hamburger menu icon"
      />
    </nav>
  );
};

export default Navbar;
