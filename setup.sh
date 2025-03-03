#!/bin/bash
# setup.sh - Creates the project layout for MFSemi LLC website

PROJECT_NAME="mfsemi-website"

# Create base directories
mkdir -p $PROJECT_NAME/{pages,components,styles,public/images,utils}

# Create package.json
cat <<'EOF' >$PROJECT_NAME/package.json
{
  "name": "mfsemi-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "gsap": "^3.11.0",
    "p5": "^1.6.0"
  }
}
EOF

# Create README.md
cat <<'EOF' >$PROJECT_NAME/README.md
# MFSemi LLC Website

This is the official website for MFSemi LLC, built with Next.js. It features a retro Soviet-inspired design and over‑engineered visual effects.

## Available Pages
- Home
- About (Company History & Team Bios)
- Products (Cutting‑edge product listings and fake demos)
- Careers (Job openings and application form)
- Blog (Latest articles on quantum electronics)
- Demo (Live flagship product demo with quantum stats and a Lorenz attractor visualization)
- Contact (Get in touch)

## Setup Instructions
1. Navigate into the project folder:
   cd mfsemi-website
2. Install dependencies:
   npm install
3. Run the development server:
   npm run dev
4. Build and start production:
   npm run build && npm start

## Deployment
To deploy on Vercel:
   npm install -g vercel
   vercel
EOF

echo "Project structure created in $PROJECT_NAME. Now run 'cd $PROJECT_NAME && npm install' to install dependencies."
