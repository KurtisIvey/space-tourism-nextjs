"use client";

import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import "./Destination.css";
import Image from "next/image";
import destinationData from "./destination.data";
import checkWebpSupport from "@/function/checkWebpSupport";
type Props = {};

const Destination = (props: Props) => {
  // sets index to load destination info data as it's an array
  const [dataIndex, setDataIndex] = useState(0);
  const supportsWebp = checkWebpSupport();

  return (
    <main className="destination">
      <Navbar activePage="destination" />
      <section>
        <h1>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
        {supportsWebp ? (
          <Image
            className="planetImage"
            src={destinationData[dataIndex].images.webp}
            alt={destinationData[dataIndex].name}
            width={500}
            height={300}
          />
        ) : (
          <Image
            className="planetImage"
            src={destinationData[dataIndex].images.png}
            alt={destinationData[dataIndex].name}
            width={500}
            height={300}
          />
        )}
        <div className="descriptorsContainer">
          <ul>
            <li
              onClick={() => setDataIndex(0)}
              className={dataIndex === 0 ? "activePlanet" : ""}
            >
              MOON
            </li>
            <li
              onClick={() => setDataIndex(1)}
              className={dataIndex === 1 ? "activePlanet" : ""}
            >
              MARS
            </li>
            <li
              onClick={() => setDataIndex(2)}
              className={dataIndex === 2 ? "activePlanet" : ""}
            >
              EUROPA
            </li>
            <li
              onClick={() => setDataIndex(3)}
              className={dataIndex === 3 ? "activePlanet" : ""}
            >
              TITAN
            </li>
          </ul>
          <h2>{destinationData[dataIndex].name}</h2>
          <p>{destinationData[dataIndex].description}</p>
          <div className="metricsBigContainer">
            <div className="metricContainer">
              <h3>AVG. DISTANCE</h3>
              <div>{destinationData[dataIndex].distance}</div>
            </div>
            <div className="metricContainer">
              <h3>EST. TRAVEL TIME</h3>
              <div>{destinationData[dataIndex].travel}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
