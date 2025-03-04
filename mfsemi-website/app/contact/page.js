import React, { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
      <Head>
        <title>Contact MFSemi LLC</title>
        <meta name="description" content="Get in touch with MFSemi LLC." />
      </Head>
      <section className="contact">
        <h1>Contact Us</h1>
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
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <br />
          <button type="submit">Send Message</button>
        </form>
        <div className="company-info">
          <h2>MFSemi LLC</h2>
          <p>1234 Semiconductor Ave</p>
          <p>Moscow, RU</p>
          <p>Email: info@mfsemi.com</p>
          <p>Phone: +7 495 123 4567</p>
        </div>
      </section>
    </Layout>
  );
}
