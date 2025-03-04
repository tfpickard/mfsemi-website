"use client";

import React from "react";
import Head from "next/head";
import { useEffect, useRef } from "react";
import styles from "./chromata.module.css";

export default function Home() {
  console.log("hi!");
  useEffect(() => {
    console.log("hi2!");
    const script = document.createElement("script");
    script.src = "/chromata.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      console.log("hi3!");
      const image = document.querySelector("img");
      const chromata = new Chromata(image, {
        pathFinderCount: 50,
        speed: 5,
      });

      //chromata.start();
      document.body.addEventListener("click", () => {
        console.log("hi4!");
        chromata.toggle();
      });
    };
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Head>
        <title>MFSemi LLC - Home</title>
        <meta
          name="description"
          content="Leading the future of electronics design."
        />
      </Head>

      <section className="home">
        <h1 className="glow-text">Welcome to MFSemi LLC</h1>
        <p>Leading the future of electronics design and innovation.</p>
        <div className={styles.container}>
          <img src="/mfsemi_logo_2.png" alt="NYC" />
        </div>
        <div className="banner">
          <h2>Powering the Future</h2>
          <button className="order-btn">Pre-Order Now</button>
        </div>
      </section>
    </>
  );
}
