import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteRoot = path.join(repoRoot, 'Ella-Sigue-Cybersecurity-Portfolio');
const pages = [
  'index.html',
  'projects.html',
  'certifications.html',
  'education.html',
  'about.html',
  'resume.html',
  'contact.html',
];
const errors = [];
let checkedReferences = 0;

function read(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    errors.push('Missing file: ' + path.relative(repoRoot, file));
    return '';
  }
}

function hrefsIn(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)].map((match) => match[1]);
}

function primaryNavigation(html, page) {
  const nav = html.match(/<nav\b[^>]*id="primary-nav"[^>]*>([\s\S]*?)<\/nav>/i);
  if (!nav) {
    errors.push(page + ': missing primary navigation');
    return '';
  }
  return hrefsIn(nav[1]).join('|');
}

function checkReference(fromFile, reference) {
  if (/^(?:[a-z]+:|\/\/)/i.test(reference)) return;
  checkedReferences += 1;
  const [pathPart, fragmentPart] = reference.split('#', 2);
  const relativePath = decodeURIComponent(pathPart || '');
  const target = path.resolve(path.dirname(fromFile), relativePath || path.basename(fromFile));
  if (target !== siteRoot && !target.startsWith(siteRoot + path.sep)) {
    errors.push('Link escapes the site folder: ' + path.relative(repoRoot, fromFile) + ' -> ' + reference);
    return;
  }
  if (!fs.existsSync(target)) {
    errors.push('Missing local target: ' + path.relative(repoRoot, fromFile) + ' -> ' + reference);
    return;
  }
  if (fragmentPart && target.endsWith('.html')) {
    const targetHtml = read(target);
    const ids = new Set([...targetHtml.matchAll(/\bid="([^"]+)"/gi)].map((match) => match[1]));
    if (!ids.has(decodeURIComponent(fragmentPart))) {
      errors.push('Missing anchor: ' + path.relative(repoRoot, fromFile) + ' -> ' + reference);
    }
  }
}

let expectedNavigation = null;
for (const page of pages) {
  const file = path.join(siteRoot, page);
  const html = read(file);
  if (!html) continue;
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  if (h1Count !== 1) errors.push(page + ': expected one H1, found ' + h1Count);

  const navigation = primaryNavigation(html, page);
  if (expectedNavigation === null) expectedNavigation = navigation;
  else if (navigation !== expectedNavigation) errors.push(page + ': primary navigation differs from the other pages');

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    checkReference(file, match[1]);
  }
}

// Keep the legacy redirect routes and their destination fragments valid too.
for (const page of ['operations.html', 'security-labs.html']) {
  const file = path.join(siteRoot, page);
  if (!fs.existsSync(file)) continue;
  const html = read(file);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    checkReference(file, match[1]);
  }
}

if (errors.length) {
  console.error(errors.map((error) => '- ' + error).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Site check passed: ' + pages.length + ' pages and ' + checkedReferences + ' local references checked.');
}
