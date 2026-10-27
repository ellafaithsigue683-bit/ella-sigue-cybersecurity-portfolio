# Ella Sigue — Cybersecurity Portfolio

A static, multi-page portfolio built with HTML, CSS, and vanilla JavaScript for deployment on Vercel from GitHub.

## Pages
- `index.html` — Home and featured work
- `projects.html` — Searchable project gallery and expandable case studies, including security-operations and security-lab work
- `security-labs.html` — OWASP Juice Shop, GoPhish/MailHog, and Cowrie lab reports
- `certifications.html` — Fortinet NSE 1–3 credentials and separate course-completion records
- `education.html` — BFA in Cinema and Cyber Threat Monitoring Level 1 training
- `about.html` — Career motivation, technical skills, and relevant professional experience
- `contact.html` — Email and LinkedIn

The former `operations.html` URL redirects to `projects.html` because Operations cases are now part of the Projects page.

## Hero motion background
The home page includes an 8-second, muted, seamless-loop cyber-network MP4 using the maroon and gold palette. The video is stored at `assets/videos/cyber-hero-loop.mp4`; its poster is `assets/images/cyber-hero-poster.jpg`. The video has no audio. The poster is used on small screens and when reduced-motion preferences are enabled. On wide screens, visitors can pause or resume the decorative motion with the visible control.

## Accessibility and interaction
- Body copy and supporting text use a stronger typographic hierarchy and higher-contrast colors.
- The Splunk BOTS v2 dashboard screenshot opens in a keyboard-accessible full-size lightbox from the project preview and case-study evidence image.
- Navigation and project controls are keyboard focusable, with visible focus states.

## Local preview
Open `index.html` in a browser. All pages share `styles.css`, `script.js`, and the `assets/` folder. Keep the `assets/` paths intact. For full video playback behavior, serve the folder locally or deploy the whole package.

## Deploy on Vercel
The site uses plain static files and no build command. Keep the site files at the configured Vercel root directory. If the existing Vercel project uses `Ella-Sigue-Cybersecurity-Portfolio` as its Git root directory, upload the contents of this package into that exact folder in the GitHub repository, not a new nested folder. Commit the changes to `main`; Vercel should redeploy from the connected repository.

## Accuracy notes
- Cyber Threat Monitoring Level 1 was completed through GFG Assessment and Training Center Corp.
- Fortinet NSE 1, NSE 2, and NSE 3 were required credentials for the course and were completed on 26 October 2026. Each credential has official badge artwork and a certificate PDF.
- Fortinet course-completion records are shown separately from the official NSE credential certificates.
- Security exercises use supplied training datasets and contained labs. The site does not claim simulated events were real incidents.
- The resume PDF is not included in the site package. Professional experience is summarized for relevance to the work displayed here.
