"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import LorenzAttractor from "../components/LorenzAttractor";

export default function Demo() {
  const [stats, setStats] = useState({ quantum: 0, flux: 0 });

  // Rössler Attractor parameters
  const a = 0.2, b = 0.2, c = 5.7;
  let x = 0.1, y = 0, z = 0;
  const dt = 0.01;

  // Simulate live stats update using Rössler Attractor
  useEffect(() => {
    const interval = setInterval(() => {
      // Rössler Attractor equations
      const dx = -y - z;
      const dy = x + a * y;
      const dz = b + z * (x - c);
      x += dx * dt;
      y += dy * dt;
      z += dz * dt;

      setStats({
        quantum: x * 100, // Scale for display
        flux: y * 100,    // Scale for display
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Live Demo - MFSemi LLC Flagship Product</title>
        <meta
          name="description"
          content="Live quantum stats and Lorenz Attractor visualization demo."
        />
      </Head>
      <section className="demo">
        <h1>Flagship Product Live Demo</h1>
        <div className="stats">
          <p>Quantum Output: {stats.quantum}</p>
          <p>Flux Level: {stats.flux}</p>
        </div>
        <div className="attractor">
          <LorenzAttractor />
        </div>
      </section>
    </>
  );
}
