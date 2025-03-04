import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import LorenzAttractor from "../components/LorenzAttractor";

import Layout from "../components/Layout";

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
    <Layout>
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
