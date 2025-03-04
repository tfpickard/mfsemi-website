import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About MFSemi LLC</title>
        <meta
          name="description"
          content="Company history and team biographies."
        />
      </Head>
      <section className="about">
        <h1>About MFSemi LLC</h1>
        <article className="history">
          <h2>Our History</h2>
          <p>
            Founded in the midst of a technological revolution, MFSemi LLC began
            as a clandestine collective of engineers determined to redefine
            electronics. Our early days were shrouded in secrecy and fueled by a
            radical vision—melding quantum science with semiconductor design.
          </p>
          <p>
            Over the decades, our innovative spirit and underground origins have
            made us a force in the industry, blending old-world aesthetics with
            futuristic technology.
          </p>
        </article>
        <article className="team">
          <h2>Our Team</h2>
          <div className="bio">
            <h3>Klaus von Radium</h3>
            <p>
              A visionary with an unyielding passion for quantum circuitry,
              Klaus leads our research and development. His innovative mindset
              continues to push the boundaries of what is technologically
              possible.
            </p>
          </div>
          <div className="bio">
            <h3>Gotthard Strelnikov</h3>
            <p>
              Gotthard is the engineering mastermind whose radical ideas and
              strategic planning have propelled MFSemi into the forefront of
              electronics design. His expertise fuses classical engineering with
              a dash of revolutionary flair.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}
