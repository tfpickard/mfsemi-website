"use client";

import React from "react";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/chromata.min.js"; // Update with the correct path
    script.onload = () => {
      const img = document.createElement("img");
      img.src = "/mfsemi_logo_2.png";
      img.className = "my-image";
      img.style.display = "block"; // Ensure the image is visible
      canvasRef.current.appendChild(img);

      var defaults = {
        colorMode: "color",
        compositeOperation: "lighten",
        iterationLimit: 0,
        key: "low",
        lineWidth: 2,
        lineMode: "smooth",
        origin: ["bottom"],
        outputSize: "original",
        pathFinderCount: 30,
        speed: 7,
        turningAngle: Math.PI,
      };
      const chromataInstance = new Chromata(img, {
        ...defaults,
      });

      chromataInstance.start();
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
