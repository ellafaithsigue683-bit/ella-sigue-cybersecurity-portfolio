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

## Full HD cybersecurity hero background

The homepage uses a silent, six-second Full HD cinematic video loop with a matching static poster. Burgundy-and-gold command-center artwork sits behind the hero copy with a dark left-side gradient for readability.

- Video: `Ella-Sigue-Cybersecurity-Portfolio/assets/videos/cybersecurity-hero-loop.mp4`
- Poster fallback: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-poster.jpg`
- WebP poster fallback: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-poster.webp`
- Full-resolution illustration: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-illustration-1920x1080.png`

The video is muted, loops, and has a pause/resume control on supported desktop viewports. Small screens and visitors who prefer reduced motion receive a static poster.

## Accessibility and interactions

- Improved type hierarchy and text contrast.
- Keyboard-accessible zoom/lightbox for the Splunk dashboard.
- Visible keyboard focus and accessible project controls.
- Reduced-motion fallback for the scroll-responsive hero character.

## Assets

The active `assets/` folder holds certificate PDFs, badge images, project covers, reports, the Splunk dashboard image, favicon, and the hero character sprite. These are referenced by the website and should not be deleted without checking their links first.

## Deploy on Vercel

The Vercel project root directory should remain `Ella-Sigue-Cybersecurity-Portfolio`. The site is plain static HTML, CSS, and JavaScript and does not require a build command.

When editing the repository, update files inside that folder. Commit to `main`; Vercel automatically deploys changes from the connected GitHub repository.

## Accuracy notes

- Cyber Threat Monitoring Level 1 was completed through GFG Assessment and Training Center Corp.
- Fortinet NSE 1, NSE 2, and NSE 3 were course requirements and were completed in October 2026.
- Fortinet course-completion records are separate from the official NSE credential certificates.
- Security exercises use supplied training datasets and contained labs. Simulated events are not presented as real incidents.
- The résumé PDF is not published in the website; professional experience is summarized for relevance to the work shown.
