"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Crew.css";
import crewData from "./crew.data";
import Image from "next/image";
import checkWebpSupport from "@/function/checkWebpSupport";
type Props = {};

const Crew = (props: Props) => {
  const [index, setIndex] = useState<number>(0);
  const supportsWebp = checkWebpSupport();
  const [activeCrew, setActiveCrew] = useState<string>("douglas");

  useEffect(() => {
    document.title = "Space Tourism | Crew";
  }, []);

  useEffect(() => {
    // sets activeCrew to then be passed through into classname to control custom width
    const detailsContainerWidth = () => {
      if (index === 0) {
        setActiveCrew("douglas");
      }
      if (index === 1) {
        setActiveCrew("mark");
      }
      if (index === 2) {
        setActiveCrew("victor");
      }
      if (index === 3) {
        setActiveCrew("ano");
      }
    };

    detailsContainerWidth();
    // monitors changes in index, so it can then run again and apply appropriate classname
  }, [index]);

  return (
    <main className="crew">
      <Navbar activePage="crew" />
      <h1 className="pageTitle">
        <span>02</span> MEET YOUR CREW
      </h1>
      <section>
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
        <div className={`detailsContainer ${activeCrew}`}>
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
