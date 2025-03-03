import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function Layout({ children }) {
  useEffect(() => {
    // Animate header and navigation items
    gsap.from(".header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".nav li", {
      duration: 1,
      delay: 0.5,
      x: -100,
      opacity: 0,
      stagger: 0.2,
    });
    // Animate buttons on hover
    gsap.utils.toArray("button").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.3 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1.0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <h1>MFSemi LLC</h1>
          {/* Hidden Easter egg */}
          <p className="easter-egg" style={{ display: "none" }}>
            Soviet Tech Secret
          </p>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a>Careers</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/demo">
                <a>Live Demo</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} MFSemi LLC. All rights reserved.
        </p>
        <p className="easter-egg-footer">Secret Code: 1984-TECH</p>
      </footer>
    </div>
  );
}
