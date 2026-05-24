# Md Fatin Hasnat Patwary — Portfolio

My personal portfolio site. Built to showcase my work in AI engineering and research — clean, fast, and looks good to me :)

## What's inside

- Animated particle network background (canvas-based, reacts to mouse)
- Hero section with profile photo, tech tags, and smooth scroll buttons
- About, Skills, Projects, Experience, and Contact sections
- Fully responsive — works on mobile and desktop
- Dark theme throughout with cyan/indigo accents

## Tech stack

- **Next.js 16** — App Router, server components where possible
- **TypeScript** — strict typing across the board
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations and scroll-triggered reveals
- **Lucide React** — icons

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

If you want to test on your phone or another device on the same network, the dev script is already set up with `-H 0.0.0.0`. Find your machine's local IP (e.g. `192.168.x.x`) and open that on your phone. Just note that dev mode may not load JS correctly over LAN — deploy to Vercel if you need proper cross-device testing.

## Deploying

Push to GitHub, then connect the repo to [Vercel](https://vercel.com). It auto-detects Next.js and handles everything. The site will be live in about a minute.

## Project structure

```
app/
  page.tsx          # root page, wires all sections together
  layout.tsx        # html/body, fonts, global metadata
  globals.css       # base styles, CSS variables

components/
  layout/           # Navbar, Footer, GlobalBackground
  hero/             # Hero section + background layers
  about/            # About section
  skills/           # Skills grid
  projects/         # Projects showcase
  experience/       # Timeline
  contact/          # Contact form + social links

public/
  profile.jpeg      # profile photo
```

## Contact

mdf.hasnat@gmail.com — or just use the contact form on the site.
