"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import LorenzAttractor from "../components/LorenzAttractor";

export default function Demo() {
  const [stats, setStats] = useState({ quantum: 0, flux: 0 });

  // Simulate live stats update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        quantum: Math.floor(Math.random() * 1000),
        flux: Math.floor(Math.random() * 500),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
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
    </Layout>
  );
}
