# 📘 Software Requirements Specification (SRS)
## Professional Developer Website – **"Kingsley Kanu | iamkay.eu"**

**Version:** 1.2  
**Date:** November 2025  
**Owner:** Kingsley Kanu (Full-Stack JS/TS Developer)  
**Domain:** [https://iamkay.eu](https://iamkay.eu)  
**Hosting:** Free Netlify (Static + Functions)  
**Integration:** GitHub REST API (public repos)

---

## 1. Purpose
This document defines the requirements for **Kingsley Kanu’s professional developer website** — a live, self-updating portfolio that demonstrates real engineering projects, modern web technologies, and professional readiness.  
The site will serve as both a **technical showcase** and a **personal brand hub** for career and freelance opportunities.

---

## 2. Scope
The website will:

- Present Kingsley’s background, skills, and experience.
- Dynamically load GitHub repositories to showcase ongoing work.
- Feature detailed case studies of flagship projects.
- Provide a contact form integrated with **Netlify Forms**.
- Operate entirely on the **Free Netlify tier**, with no paid backend or database.

**Out of scope:**  
AI code generators, databases, user accounts, or paid hosting tiers.

---

## 3. System Overview

| Layer | Description |
|-------|--------------|
| **Frontend** | React 19 + Vite + TypeScript + TailwindCSS |
| **Backend (optional)** | Netlify Functions (Node 18 runtime) |
| **Hosting** | Free Netlify (125 k function calls/month + SSL) |
| **Data Source** | GitHub REST API |
| **Domain** | Custom domain → `iamkay.eu` |
| **Deployment** | Auto-build via Netlify CI/CD |

---

## 4. Functional Requirements

### 4.1 Hero / Home
- Display name, professional title, and GitHub avatar.
- 3 call-to-action buttons:  
  `View Projects` · `Contact Me` · `Download CV`

---

### 4.2 About
- 2–3 sentence professional summary.  
- Circular GitHub profile image.  
- Highlights card for location, specialty, experience metrics.

---

### 4.3 Skills
- Responsive grid (10–15 technologies).  
- Categories: **Frontend**, **Backend**, **Testing**, **Cloud**, **Tooling**.  
- Tailwind hover styling and accessibility labels.

---

### 4.4 Projects (GitHub + Manual Highlights)

#### Dynamic GitHub Integration
- Fetch repositories from GitHub REST API (`/users/:username/repos`).  
- Exclude forks/archived repos.  
- Optional topic filter: `["portfolio","featured"]`.  
- Sort by `pushed_at` descending.  
- Display up to 6 repositories.

#### Flagship Projects

| Project | Summary | Stack | Deployment |
|----------|----------|--------|-------------|
| **AuthApp** | Authentication demo with JWT + OAuth + RBAC. | React, Node.js, Express, MongoDB | Netlify + Render |
| **SyncSkilled** | Skills exchange platform for mentorship & credit trade. | React, Node.js, MongoDB, Stripe | AWS Amplify |
| **Portfolio Core** | This website — dynamic repos, SEO, Forms. | React, TS, Tailwind | Netlify |
| **InvoiceLink Mini** | SaaS prototype for e-invoicing via FIRS API. | React, Node, REST API | Render |
| **QuickLinker (AI Project Generator)** | Generates starter code from user ideas via OpenAI Codex. | React + Express + OpenAI API | Netlify |
| **API Visualizer** | Visualize REST endpoints + responses. | Vite + TypeScript + Axios | Netlify |
| **Form Validator Pro** | Web form validator + JSON export utility. | React + Zod | Netlify |

**Card content:**  
Title • one-line summary • tech badges • links (Live / GitHub / Case Study)  
Graceful fallback message if GitHub API limit is reached.

---

### 4.5 Contact
- **Netlify Forms** (`form-name="contact"`, honeypot enabled).  
- Inputs: *Name*, *Email*, *Message* (required).  
- Success confirmation and fallback `mailto:suge.kanu@gmail.com`.

---

### 4.6 Footer
- © Current Year Kingsley Kanu  
- Quick links: Home | Projects | Contact  
- External links: GitHub • LinkedIn • CV  

---

## 5. Non-Functional Requirements

| Category | Requirement |
|-----------|-------------|
| **Performance** | Lighthouse ≥ 90 (desktop), optimized images. |
| **SEO** | Meta title, description, Open Graph, favicon. |
| **Accessibility** | WCAG 2.1 AA compliant (semantic headings, alt text). |
| **Security** | HTTPS via Netlify SSL; no frontend secrets. |
| **Maintainability** | Component-based React + strict TypeScript. |
| **Cost** | Operates entirely within Free Netlify limits. |

---

## 6. System Interfaces

| Interface | Purpose |
|------------|----------|
| **GitHub API** | Fetches public repositories (`/users/:username/repos`). |
| **Netlify Forms** | Manages contact form submissions. |
| **Netlify Functions** | Optional GitHub API proxy to avoid rate limits. |

---

## 7. Deployment Pipeline
1. **Push to GitHub → Netlify build trigger.**  
2. Build command: `npm run build`  
3. Publish directory: `/dist`  
4. **Environment Variables (Netlify):**
   - `VITE_GITHUB_USER=CaptKay`
5. **DNS Setup:**  
   - CNAME → `your-site-name.netlify.app`

---

## 8. Future Enhancements
- Add Markdown/MDX blog.  
- Dark mode toggle and theme storage.  
- Integrate analytics (Plausible / Netlify Analytics).  
- “Hire Me” dashboard with calendar API.  
- Optional AI widgets (OpenAI Codex / LangChain demo).

---

## 9. Acceptance Criteria
✅ Responsive across devices  
✅ GitHub projects load with fallback  
✅ Contact form submits to Netlify dashboard  
✅ SEO tags verified (Open Graph / Twitter preview)  
✅ Lighthouse ≥ 90 (Perf + Accessibility)  
✅ Deployment succeeds on Free Netlify tier  

---

**End of Document**
