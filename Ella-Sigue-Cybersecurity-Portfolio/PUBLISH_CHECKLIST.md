# Publish checklist

## 1. Upload to GitHub

1. Extract `Ella-Sigue-Cybersecurity-Portfolio.zip` on your computer.
2. Open GitHub and create a repository named `ella-sigue-cybersecurity-portfolio`.
3. Upload the contents of the extracted project folder to the repository root: `index.html`, `styles.css`, `script.js`, `vercel.json`, `README.md`, and the `assets` folder.
4. Commit the uploaded files.

Do not upload the ZIP itself expecting GitHub to unpack it; upload the extracted project contents.

## 2. Deploy with Vercel

1. Open Vercel and choose **Add New → Project**.
2. Import the GitHub repository you just created.
3. Use the project root as the root directory.
4. This is a static site: no build command is needed. Leave the framework preset as **Other** (or no framework) and deploy.
5. Wait for Vercel to finish and open the provided `.vercel.app` URL.

After the repository is connected, pushes to the production branch can trigger new deployments automatically. Official guide: https://vercel.com/docs/git

## Before making it public

- Confirm the email and LinkedIn links are correct.
- Open all six project reports and all three course certificates from the deployed page.
- Review the original source PDFs for anything you do not want to publish, especially network details in screenshots/workbooks.
- Confirm that the GoPhish project is described as a localhost-only synthetic simulation and the incident reports as scenario exercises.
