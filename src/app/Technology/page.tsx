"use client";

import React, { useEffect, useState } from "react";
import "./Technology.css";
import technologyData from "./technology.data";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

type Props = {};

const Technology = (props: Props) => {
  const [index, setIndex] = useState<number>(0);
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

  return (
    <main className="technology">
      <Navbar activePage="technology" />
      <section>
        <h1>
          <span>01</span> SPACE LAUNCH 101
        </h1>
        <Image src={technologyData[index]} />
      </section>
    </main>
  );
};

export default Technology;
