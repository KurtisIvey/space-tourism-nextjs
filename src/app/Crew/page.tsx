"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import "./Crew.css";
import crewData from "./crew.data";
import Image from "next/image";
import checkWebpSupport from "@/function/checkWebpSupport";
type Props = {};

const Crew = (props: Props) => {
  const [index, setIndex] = useState<number>(0);
  const supportsWebp = checkWebpSupport();

  return (
    <main className="crew">
      <Navbar activePage="crew" />
      <section>
        <h1>
          <span>02</span> MEET YOUR CREW
        </h1>
        <div className="imageContainer">
          {supportsWebp ? (
            <Image
              className="crewPhoto"
              src={crewData[index].images.webp}
              alt={crewData[index].name}
              width={500}
              height={300}
            />
          ) : (
            <Image
              className="crewPhoto"
              src={crewData[index].images.png}
              alt={crewData[index].name}
              width={500}
              height={300}
            />
          )}
        </div>
        <div className="detailsContainer">
          <ul>
            {/* nav dots */}
            <li
              onClick={() => setIndex(0)}
              className={index === 0 ? "activeCrew" : ""}
            />
            <li
              onClick={() => setIndex(1)}
              className={index === 1 ? "activeCrew" : ""}
            />
            <li
              onClick={() => setIndex(2)}
              className={index === 2 ? "activeCrew" : ""}
            />
            <li
              onClick={() => setIndex(3)}
              className={index === 3 ? "activeCrew" : ""}
            />
          </ul>
          <div className="textContainer">
            <div>
              <h3>{crewData[index].role}</h3>
              <h2>{crewData[index].name}</h2>
            </div>
            <p>{crewData[index].bio}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Crew;
