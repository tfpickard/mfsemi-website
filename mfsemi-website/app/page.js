"use client";

import React from "react";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef();

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/mfsemi_logo_2.png";
    img.className = "my-image";
    img.style.display = "none"; // Hide the image element itself
    canvasRef.current.appendChild(img);

    const script = document.createElement("script");
    script.src = "/chromata.min.js"; // Ensure the correct path
    script.onload = () => {
      const chromata = new Chromata(img, {
        pathFinderCount: 50,
        speed: 5,
      });
      chromata.start();

      document.body.addEventListener("click", function () {
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
        <div ref={canvasRef} className="chromata-canvas"></div>
        <div className="banner">
          <h2>Powering the Future</h2>
          <button className="order-btn">Pre-Order Now</button>
        </div>
      </section>
    </>
  );
}
