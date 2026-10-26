# Ella Sigue — Cybersecurity Portfolio

A responsive, single-page static website for GitHub + Vercel. It uses plain HTML, CSS, and JavaScript, so there is no package installation or build command.

## What's included

- `index.html` — all site sections and six expandable case studies
- `styles.css` — maroon / warm white / muted gold styling and responsive layouts
- `script.js` — working project search, category filters, case-study expanders, mobile navigation, and copy-email control
- `assets/reports/` — six source reports / worksheets as PDFs
- `assets/certificates/` — three original Fortinet course completion certificate PDFs
- `assets/images/` — supplied Splunk dashboard image and page-one previews from the source reports/certificates

## Local preview

Open `index.html` in a browser. For best testing, use a local static server (for example the VS Code Live Server extension). No build step is needed.

## Deploy with GitHub + Vercel

1. Extract the ZIP so `index.html`, `styles.css`, `script.js`, `assets/`, and `vercel.json` sit at the repository root.
2. Create a new GitHub repository such as `ella-sigue-cybersecurity-portfolio`.
3. Upload the extracted **files and folders** (not the ZIP itself) to the repository root and commit the changes. Alternatively, use Git from a terminal.
4. In Vercel, select **Add New → Project**, import the repository, and deploy it.
5. This is a static site. Leave the framework preset as **Other** (or no framework), with no build command and the project root as the output directory. Vercel will serve `index.html` from the repository root.
6. Once deployed, each commit pushed to the connected production branch can trigger a new deployment.

## Source accuracy notes

- The three supplied Fortinet certificates are listed by their printed course titles: `Cybersecurity and Cloud Fundamentals 1.0`, `Introduction to Next Generation Firewall 1.0`, and `FortiGate 7.6 Operator Self-Paced`. They are described as course completion certificates, not upgraded to professional certifications.
- The incident report is labeled as scenario-based practice. IR-002 covers a ransomware notice scenario; IR-003 covers unauthorized account-access scenario.
- GoPhish was a localhost-only security-awareness simulation using a synthetic recipient and MailHog. Its report documents a dashboard/raw-event discrepancy for the email-open metric.
- Cowrie output is described as a simulated SSH shell, not access to the underlying Kali host.
- OWASP Juice Shop testing was performed against a local intentionally vulnerable training application. Status codes and preliminary severity labels are not presented as proof of a real-world compromise.
- Splunk and Wireshark examples use training data / synthetic captures, not asserted real incidents.

## Public portfolio caution

The included PDFs are the original source documents provided for this portfolio. Before publishing publicly, review screenshots and workbooks for any personal network details or other information you do not intend to share. Do not add passwords, API keys, access tokens, or non-public organizational logs.
