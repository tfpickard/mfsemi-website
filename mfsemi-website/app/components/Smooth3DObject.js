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

      p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL);
        p.fill(150, 150, 250, 150); // Add some fill color with transparency
      };

      p.draw = () => {
        p.background(0);
        p.rotateX(x * 0.1);
        p.rotateY(y * 0.1);
        p.rotateZ(z * 0.1);

        // Lorenz Attractor equations
        const dx = a * (y - x) * dt;
        const dy = (x * (b - z) - y) * dt;
        const dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;

        // Update sides using a simple chaotic function
        sides = 3 + Math.floor(Math.abs(Math.sin(p.frameCount * 0.01) * 10));

        // Draw the 3D object
        p.beginShape(p.TRIANGLE_FAN); // Use TRIANGLE_FAN for smoother surfaces
        for (let i = 0; i < sides; i++) {
          const angle = p.TWO_PI / sides * i;
          const x = 100 * Math.cos(angle);
          const y = 100 * Math.sin(angle);
          p.vertex(x, y, 0);
        }
        p.endShape(p.CLOSE);
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}
