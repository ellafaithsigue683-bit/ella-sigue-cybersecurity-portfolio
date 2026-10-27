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
- `contact.html` — Email, LinkedIn, and recruiter contact actions.
- `resume.html` — Accessible web résumé with a print / save-as-PDF action.

The legacy `operations.html` and `security-labs.html` routes remain as small redirects into the relevant categories on `projects.html`, so previously shared links continue to work without maintaining duplicate project content.

## Static cybersecurity hero background

The homepage uses an optimized static WebP image of the burgundy-and-gold cybersecurity operations scene, with a dark left-side gradient to keep the headline readable. No video files or autoplay are needed for the hero.

- Homepage background: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-poster.webp`
- Alternate poster: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-poster.jpg`
- Full-resolution illustration: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-illustration-1920x1080.png`
- Original image source: `Ella-Sigue-Cybersecurity-Portfolio/assets/images/cybersecurity-hero-source.png`

## Accessibility and interactions

- Improved type hierarchy and text contrast, including small metadata and secondary copy.
- A résumé link is available in the global navigation and on key recruiter paths (Home, Projects, About, and Contact).
- Keyboard-accessible zoom/lightbox for the Splunk dashboard.
- Visible keyboard focus and accessible project controls.
- Static hero image, with no autoplay or motion requirements.

## Assets

The active `assets/` folder holds certificate PDFs, badge images, project covers, reports, the Splunk dashboard image, favicon, and the cybersecurity hero image. These are referenced by the website and should not be deleted without checking their links first.

## Deploy on Vercel

The Vercel project root directory should remain `Ella-Sigue-Cybersecurity-Portfolio`. The site is plain static HTML, CSS, and JavaScript and does not require a build command.

When editing the repository, update files inside that folder. Commit to `main`; Vercel automatically deploys changes from the connected GitHub repository.

## Accuracy notes

- Cyber Threat Monitoring Level 1 was completed through GFG Assessment and Training Center Corp.
- Fortinet NSE 1, NSE 2, and NSE 3 were course requirements and were completed in October 2026.
- Fortinet course-completion records are separate from the official NSE credential certificates.
- Security exercises use supplied training datasets and contained labs. Simulated events are not presented as real incidents.
- The résumé is available as a responsive web page with a browser print / save-as-PDF action. The page is based on the uploaded two-page résumé; its content is not re-presented as a downloadable copy of the original uploaded PDF.


## Design, accessibility, and sharing

- Each page has one semantic H1 followed by a consistent heading hierarchy.
- Project case labels follow display order, and expandable case-study controls announce the project and expanded state to assistive technology.
- Open Graph and Twitter preview metadata use page-specific titles, descriptions, canonical URLs, and a shared branded image.
- The homepage's static WebP background is preloaded at high priority; the featured Splunk dashboard image is loaded eagerly while supporting project images remain lazy-loaded.
- Accumulated hero overrides are consolidated into one responsive hero block. Page-specific heading styles preserve the visual hierarchy after semantic heading updates.
