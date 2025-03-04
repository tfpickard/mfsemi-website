"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function LorenzAttractor() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let x = 0.01,
        y = 0,
        z = 0;
      const a = 10,
        b = 28,
        c = 8 / 3;
      const dt = 0.01;
      let points = [];

      p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL);
        p.background(0);
      };

      p.draw = () => {
        p.background(0, 25); // Creates a trailing effect
        // Lorenz attractor differential equations
        const dx = a * (y - x) * dt;
        const dy = (x * (b - z) - y) * dt;
        const dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;
        points.push({ x, y, z });
        if (points.length > 1000) {
          points.shift();
        }
        p.rotateY(p.frameCount * 0.003);
        p.stroke(255);
        p.noFill();
        p.beginShape();
        points.forEach((pt) => {
          p.vertex(pt.x, pt.y, pt.z);
        });
        p.endShape();
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}
