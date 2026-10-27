# Ella Sigue — Cybersecurity Portfolio

A responsive, multi-page cybersecurity portfolio built with static HTML, CSS, and vanilla JavaScript. The active site lives in `Ella-Sigue-Cybersecurity-Portfolio/` and deploys through Vercel.

## Pages

- `index.html` — Home, introduction, and featured work.
- `projects.html` — Search and category filters, expandable case studies, supporting reports, and an enlarged Splunk dashboard view.
- `certifications.html` — Fortinet credentials and course-completion records.
- `education.html` — Education, academic recognition, and cybersecurity training.
- `about.html` — Background, relevant experience, and technical skills.
- `resume.html` — Structured web resume with a direct **Download resume PDF** action.
- `contact.html` — Email, LinkedIn, and resume access.

The old `operations.html` and `security-labs.html` routes redirect to sections of Projects to preserve previously shared links.

## Current site features

- Shared navigation, responsive mobile menu, skip link, and consistent page numbering.
- Light and dark themes with a visitor preference saved in local storage. Light mode is the default.
- Projects search and category filters, accessible case-study disclosures, and a keyboard-operable dashboard image viewer.
- Responsive layouts, visible keyboard focus, descriptive image alternatives, semantic landmarks, and improved text contrast and control target sizes.
- Résumé content is presented as a webpage, with the uploaded PDF available as a direct download. The web résumé has no print button.
- Home uses an optimized static WebP cybersecurity hero background; there is no autoplaying hero video.
- Page-specific metadata supports search and social sharing.

## Repository layout

- `Ella-Sigue-Cybersecurity-Portfolio/` — Vercel website root, all pages, styles, scripts, and site assets.
- `Ella-Sigue-Cybersecurity-Portfolio/assets/images/` — Project imagery, credential images, favicon, hero poster, and Splunk dashboard.
- `Ella-Sigue-Cybersecurity-Portfolio/assets/reports/` — Downloadable project reports and the résumé PDF.
- `Ella-Sigue-Cybersecurity-Portfolio/assets/certificates/` — Credential and course-completion PDFs.
- `scripts/validate-site.mjs` — Dependency-free local-link and page consistency validator.
- `.github/workflows/validate-site.yml` — Runs the validator on pushes to `main` and pull requests.

Website references were checked before removing unused image source files. Keep site pages and assets inside the Vercel root folder.

## Validation

The automated repository check verifies the seven primary pages, one H1 per page, consistent primary navigation, local links and anchors, and referenced assets (including PDFs). Run it with Node.js 22 or later:

```sh
node scripts/validate-site.mjs
```

## Deploy on Vercel

The Vercel project root directory is `Ella-Sigue-Cybersecurity-Portfolio`. The site is static and needs no build command. Commits to `main` trigger Vercel deployment.

## Content and accuracy notes

- Cyber Threat Monitoring Level 1 was completed through GFG Assessment and Training Center Corp.
- Fortinet NSE 1, NSE 2, and NSE 3 were completed in October 2026; course-completion records are shown separately from official credential certificates.
- Security exercises use supplied training datasets and contained labs. Simulated events are identified as simulations, not real incidents.
- The March 2024 LANTAWAN Magazine shoot was for a previous issue; later Layout Director work is listed separately.
- Resume spelling is used consistently throughout the site.
