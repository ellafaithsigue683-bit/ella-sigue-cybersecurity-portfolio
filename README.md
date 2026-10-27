# Ella Sigue — Cybersecurity Portfolio

A static, multi-page cybersecurity portfolio built with HTML, CSS, and vanilla JavaScript and deployed through Vercel.

## Repository structure

- `Ella-Sigue-Cybersecurity-Portfolio/` — The active website root configured for Vercel.
- `README.md` — This repository guide.

Keep website pages and their `assets/` folder inside `Ella-Sigue-Cybersecurity-Portfolio/`. The former duplicate website files at the repository root have been removed to avoid two competing copies.

## Website pages

- `index.html` — Home and featured work.
- `projects.html` — Searchable project gallery and expandable case studies for SOC/SIEM, network analysis, web security, and controlled security labs.
- `certifications.html` — Fortinet NSE 1–3 credentials and separate course-completion records.
- `education.html` — BFA in Cinema and Cyber Threat Monitoring Level 1 training.
- `about.html` — Career motivation, technical skills, and relevant professional experience.
- `contact.html` — Email and LinkedIn.

The legacy `operations.html` and `security-labs.html` routes remain as small redirects into the relevant categories on `projects.html`, so previously shared links continue to work without maintaining duplicate project content.

## Hero video

The homepage uses a silent 8-second looping cyber-network video:
- Video: `Ella-Sigue-Cybersecurity-Portfolio/assets/videos/cyber-hero-loop.mp4`
- Poster/fallback: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cyber-hero-poster.jpg`

The video is decorative, muted, and plays inline on supported desktop viewports. Small screens and users who prefer reduced motion receive the static branded poster. Desktop visitors have a pause/resume control.

## Accessibility and interactions

- Improved type hierarchy and text contrast.
- Keyboard-accessible zoom/lightbox for the Splunk dashboard.
- Visible keyboard focus and accessible project controls.
- Reduced-motion fallback for the homepage video.

## Assets

The active `assets/` folder holds the certificate PDFs, certificate badge images, project cover images, reports, dashboard image, favicon, hero poster, and hero video. These are referenced by the website and should not be deleted without checking their links first.

## Deploy on Vercel

The Vercel project root directory should remain `Ella-Sigue-Cybersecurity-Portfolio`. The site is plain static HTML, CSS, and JavaScript and does not require a build command.

When editing the repository, update files inside that folder. Commit to `main`; Vercel automatically deploys changes from the connected GitHub repository.

## Accuracy notes

- Cyber Threat Monitoring Level 1 was completed through GFG Assessment and Training Center Corp.
- Fortinet NSE 1, NSE 2, and NSE 3 were course requirements and were completed on 26 October 2026.
- Fortinet course-completion records are separate from the official NSE credential certificates.
- Security exercises use supplied training datasets and contained labs. Simulated events are not presented as real incidents.
- The résumé PDF is not published in the website; professional experience is summarized for relevance to the work shown.
