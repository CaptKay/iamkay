# iamkay.eu – Kingsley Kanu Portfolio

A professional developer website for **Kingsley Kanu**, built as a React + TypeScript single-page application that surfaces live GitHub repositories, curated case studies, and a Netlify-powered contact flow.

## Stack

- [React](https://react.dev/) (Vite) + TypeScript
- [Redux Toolkit](https://redux-toolkit.js.org/) for UI state (theme + GitHub feed lifecycle)
- [React Router](https://reactrouter.com/) for client-side routing and anchor navigation
- [Tailwind CSS](https://tailwindcss.com/) for the component design system
- Netlify static hosting and Netlify Forms

## Features

- Hero introducing Kingsley with GitHub avatar and CTA buttons for projects, contact, and CV download.
- About, Skills, Stack, Projects, Delivery, and Contact sections defined in the Software Requirements Specification (SRS v1.2).
- GitHub REST API integration (via Redux async thunk) that lists the six most recently updated public repositories, with graceful rate-limit messaging.
- Flagship case-study grid highlighting AuthApp, SyncSkilled, Portfolio Core, InvoiceLink Mini, QuickLinker, API Visualizer, and Form Validator Pro.
- Netlify-friendly contact form with honeypot spam protection and mailto fallback.
- Theme toggle with persisted preference and support for system colour scheme detection.

## Documentation & content

- `docs/srs.md` captures the full Software Requirements Specification that drives the portfolio layout and capabilities.
- `docs/site-content.json` is the single source of truth for hero copy, section headings, stack layers, quality targets, and flagship project metadata consumed by the React app.
- Update these files to refresh copy or portfolio details; the UI will reflect changes on the next build without touching component code.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set the GitHub username used for the live projects feed (defaults to `CaptKay`):

   ```bash
   echo "VITE_GITHUB_USER=CaptKay" > .env.local
   ```

   Any value defined in `.env`, `.env.local`, or Netlify environment variables will be picked up at build time.

3. Run the development server:

   ```bash
   npm run dev
   ```

   Visit <http://localhost:5173> to view the site.

4. Create a production build:

   ```bash
   npm run build
   ```

   The output is generated in `dist/` and is suitable for Netlify’s static hosting.

## Deployment notes

- **Netlify configuration**
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Environment variables: `VITE_GITHUB_USER=CaptKay`
- Enable Netlify Forms to capture submissions from the `<form name="contact">` element (honeypot included).
- Custom domain: configure DNS for `iamkay.eu` to point to the generated Netlify site.

## Accessibility & performance

- Semantic headings, labelled form fields, and focus outlines adhere to WCAG 2.1 AA targets.
- Responsive layout tested across mobile, tablet, and desktop breakpoints using Tailwind’s utility system.
- No client secrets are exposed; GitHub API calls use the public REST endpoints.

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the Vite dev server.          |
| `npm run build` | Type-check and generate production. |
| `npm run preview` | Preview the production build locally. |

## License

All rights reserved © Kingsley Kanu.
