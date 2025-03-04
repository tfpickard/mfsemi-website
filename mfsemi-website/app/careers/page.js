import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", resume: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
  };

  return (
    <Layout>
      <Head>
        <title>Careers at MFSemi LLC</title>
        <meta name="description" content="Join our team at MFSemi LLC." />
      </Head>
      <section className="careers">
        <h1>Careers</h1>
        <h2>Current Openings</h2>
        <div className="job-listings">
          <div className="job">
            <h3>Senior Quantum Engineer</h3>
            <p>
              We are seeking an innovative mind to lead our quantum research
              team. Requirements include experience in advanced semiconductor
              design and quantum theory.
            </p>
          </div>
          <div className="job">
            <h3>Electronics Design Specialist</h3>
            <p>
              Join our creative team to push the boundaries of modern
              electronics. Applicants should have a flair for unconventional
              design and a passion for the future.
            </p>
          </div>
        </div>
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Resume (URL):
            <input
              type="text"
              name="resume"
              value={form.resume}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </Layout>
  );
}
