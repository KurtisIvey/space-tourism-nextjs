"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import "./Crew.css";
import crewData from "./crew.data";

type Props = {};

const Crew = (props: Props) => {
  return (
    <main className="crew">
      <Navbar activePage="crew" />
      <h1>
        <span>02</span> MEET YOUR CREW
      </h1>
    </main>
  );
};

export default Crew;
