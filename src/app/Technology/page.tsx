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
          <span>03</span> SPACE LAUNCH 101
        </h1>

        <Image
          className="techImage"
          src={
            windowWidth >= 1440
              ? technologyData[index].images.portrait
              : technologyData[index].images.landscape
          }
          alt={technologyData[index].name}
        />
        <ul>
          <li
            onClick={() => setIndex(0)}
            className={index === 0 ? "activeSelector" : ""}
          >
            <span>1</span>
          </li>
          <li
            onClick={() => setIndex(1)}
            className={index === 1 ? "activeSelector" : ""}
          >
            <span>2</span>
          </li>
          <li
            onClick={() => setIndex(2)}
            className={index === 2 ? "activeSelector" : ""}
          >
            <span>3</span>
          </li>
        </ul>
        <div className="textContainer">
          <div>
            <h2>THE TERMINOLOGY...</h2>
            <h3>{technologyData[index].name}</h3>
          </div>

          <p>{technologyData[index].description}</p>
        </div>
      </section>
    </main>
  );
};

export default Technology;
