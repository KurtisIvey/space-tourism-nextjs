"use client";

import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Destination.css";
import Image from "next/image";
import destinationData from "./destination.data";
import checkWebpSupport from "@/function/checkWebpSupport";

type Props = {};

const Destination = (props: Props) => {
  // sets index to load destination info data as it's an array
  const [index, setIndex] = useState<number>(0);
  const supportsWebp = checkWebpSupport();

  // due to use client, must set title like react application
  useEffect(() => {
    document.title = "Space Tourism | Destination";
  }, []);

  return (
    <main className="destination">
      <Navbar activePage="destination" />
      <h1 className="pageTitle">
        <span>01</span> PICK YOUR DESTINATION
      </h1>
      <section>
        {supportsWebp ? (
          <Image
            className="planetImage"
            src={destinationData[index].images.webp}
            alt={destinationData[index].name}
            width={500}
            height={300}
          />
        ) : (
          <Image
            className="planetImage"
            src={destinationData[index].images.png}
            alt={destinationData[index].name}
            width={500}
            height={300}
          />
        )}
        <div className="descriptorsContainer">
          <ul>
            <li
              onClick={() => setIndex(0)}
              className={index === 0 ? "activePlanet" : ""}
            >
              MOON
            </li>
            <li
              onClick={() => setIndex(1)}
              className={index === 1 ? "activePlanet" : ""}
            >
              MARS
            </li>
            <li
              onClick={() => setIndex(2)}
              className={index === 2 ? "activePlanet" : ""}
            >
              EUROPA
            </li>
            <li
              onClick={() => setIndex(3)}
              className={index === 3 ? "activePlanet" : ""}
            >
              TITAN
            </li>
          </ul>
          <h2>{destinationData[index].name}</h2>
          <p>{destinationData[index].description}</p>
          <div className="metricsBigContainer">
            <div className="metricContainer">
              <h3>AVG. DISTANCE</h3>
              <div>{destinationData[index].distance}</div>
            </div>
            <div className="metricContainer">
              <h3>EST. TRAVEL TIME</h3>
              <div>{destinationData[index].travel}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
