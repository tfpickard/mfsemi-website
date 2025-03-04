"use client";

import React from "react";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    canvasRef.current.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 100); // Draw a blue rectangle

    // Original Chromata setup
    const img = new Image();
    img.src = "/mfsemi_logo_2.png";
    img.onload = () => {
      const chromataInstance = new Chromata(img, {
        container: canvasRef.current,
        pathGap: 2,
        pathLength: 0.5,
        pathColor: "#8b0000",
        delay: 0,
        duration: 5000,
      });
      chromataInstance.start();
    };
    canvasRef.current.appendChild(img);
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
