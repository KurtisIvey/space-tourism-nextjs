"use client";

import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import "./Destination.css";
import Image from "next/image";
import moonImage from "../../assets/destination/image-moon.png";
import destinationInfo from "./destination.data";

type Props = {};

const Destination = (props: Props) => {
  // sets index to load destination info data as it's an array
  const [dataIndex, setDataIndex] = useState(0);

  const supportsWebp = checkWebpSupport();

  function checkWebpSupport() {
    const elem = document.createElement("canvas");
    if (elem.getContext && elem.getContext("2d")) {
      return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  }

  const dummyData = {
    name: "Moon",
    images: {
      png: "../../assets/destination/image-moon.png",
      webp: "../../assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  };
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
            src={destinationInfo[dataIndex].images.webp}
            alt="moon"
            width={500}
            height={300}
          />
        ) : (
          <Image
            className="planetImage"
            src={destinationInfo[dataIndex].images.png}
            alt="moon"
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
          <h2>{destinationInfo[dataIndex].name}</h2>
          <p>{destinationInfo[dataIndex].description}</p>
          <div className="metricsBigContainer">
            <div className="metricContainer">
              <h3>AVG. DISTANCE</h3>
              <div>{destinationInfo[dataIndex].distance}</div>
            </div>
            <div className="metricContainer">
              <h3>EST. TRAVEL TIME</h3>
              <div>{destinationInfo[dataIndex].travel}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
