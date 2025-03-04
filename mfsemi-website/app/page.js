import React from "react";
import Head from "next/head";
export default function Home() {
  return (
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
        <div className="banner">
          <h2>Powering the Future</h2>
          <button className="order-btn">Pre-Order Now</button>
        </div>
      </section>
    </Layout>
  );
}
