"use client";

import React from "react";
import technologyData from "./technology.data";
import Navbar from "@/components/Navbar/Navbar";

type Props = {};

const Technology = (props: Props) => {
  return (
    <main className="technology">
      <Navbar activePage="technology" />
      <section></section>
    </main>
  );
};

export default Technology;
