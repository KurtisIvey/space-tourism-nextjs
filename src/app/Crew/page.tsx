"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import "./Crew.css";
import crewData from "./crew.data";
import Image from "next/image";

type Props = {};

const dummyData = crewData[0];

const Crew = (props: Props) => {
  return (
    <main className="crew">
      <Navbar activePage="crew" />
      <section>
        <h1>
          <span>02</span> MEET YOUR CREW
        </h1>
        <div className="imageContainer">
          <Image
            src={dummyData.images.png}
            alt={dummyData.name}
            className="crewPhoto"
          />
        </div>
        <div className="detailsContainer">
          <ul>
            {/* nav dots */}
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>{dummyData.role}</h3>
          <h2>{dummyData.name}</h2>
          <p>{dummyData.bio}</p>
        </div>
      </section>
    </main>
  );
};

export default Crew;
