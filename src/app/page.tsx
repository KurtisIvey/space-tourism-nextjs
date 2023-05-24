import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <Navbar />
      <section>
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          {`Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!`}
        </p>
        <div className="circleContainer">
          <div className="circle">
            <Link className="link" href={"/Destination"}>
              EXPLORE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
