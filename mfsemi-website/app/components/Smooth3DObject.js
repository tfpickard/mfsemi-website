"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function Smooth3DObject() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let x = 0.1, y = 0, z = 0;
      const a = 10, b = 28, c = 8 / 3;
      const dt = 0.01;
      let sides = 3;
      let symmetryX = 1, symmetryY = 1, symmetryZ = 1;

      p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL);
        p.fill(150, 150, 250, 150); // Add some fill color with transparency
        p.noStroke(); // Remove stroke for a smooth surface
      };

      p.draw = () => {
        p.background(0);
        p.rotateX(symmetryX * 0.1);
        p.rotateY(symmetryY * 0.1);
        p.rotateZ(symmetryZ * 0.1);

        // Lorenz Attractor equations
        const dx = a * (y - x) * dt;
        const dy = (x * (b - z) - y) * dt;
        const dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;

        // Update symmetry using Lorenz Attractor
        symmetryX = Math.abs(x);
        symmetryY = Math.abs(y);
        symmetryZ = Math.abs(z);

        // Update sides using a simple chaotic function
        sides = 3 + Math.floor(Math.abs(Math.sin(p.frameCount * 0.01) * 10));
        sides = 3 + Math.floor(Math.abs(Math.sin(p.frameCount * 0.01) * 10));

        // Draw a smooth 3D object
        p.sphere(100, sides, sides); // Use sphere with dynamic detail
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}
