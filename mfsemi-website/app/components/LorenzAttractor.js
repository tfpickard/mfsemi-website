"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";
const scale = 2;
const pscale = 1.01;
export default function LorenzAttractor() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let x = Math.random(), // 0.01,
        y = Math.random(),
        z = Math.random();
      const a = 10 * scale,
        b = 28 * scale,
        c = (8 / 3) * scale;
      const dt = 0.005;
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
        x *= pscale;
        y *= pscale;
        z *= pscale;
        points.push({ x, y, z });
        if (points.length > 500 + 700 * (0.5 - Math.random())) {
          points.shift();
        }
        //p.rotateY(p.frameCount * 0.003);
        p.rotateY(y * 0.1);
        p.rotateX(x * 0.1);
        p.rotateZ(z * 0.1);
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
