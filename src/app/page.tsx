import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <Navbar activePage={"home"} />
      <section>
        <div className="textContainer">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            {`Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!`}
          </p>
        </div>

        <div className="circleContainer">
          <div className="circle">
            <Link className="link explore" href={"/Destination"}>
              EXPLORE
            </Link>
            <div className="hoverCircle"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
