// Build Single-File Standalone HTML
// Inlines all CSS and JS into a 100% self-contained HTML file that runs from file:// in File Explorer
// and as a fallback anywhere without dependencies.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const assetsDir = path.resolve(distDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Error: dist/assets not found. Run "npm run build" first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('Error: Could not find bundled CSS or JS file in dist/assets.');
  process.exit(1);
}

const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf-8');

// Read SVG favicon for inline data URI
const faviconPath = path.resolve(rootDir, 'public', 'favicon.svg');
let faviconDataUri = '';
if (fs.existsSync(faviconPath)) {
  const svg = fs.readFileSync(faviconPath, 'utf-8');
  faviconDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  // Also copy favicon to root for direct root serving
  fs.writeFileSync(path.resolve(rootDir, 'favicon.svg'), svg, 'utf-8');
}

// Ensure .nojekyll in both root and dist to prevent Jekyll processing on GitHub Pages
fs.writeFileSync(path.resolve(rootDir, '.nojekyll'), '', 'utf-8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.resolve(distDir, '.nojekyll'), '', 'utf-8');
}

// Generate self-contained standalone HTML
const standaloneHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VERTEX: Astrophysical Universe & Celestial Atlas</title>
    ${faviconDataUri ? `<link rel="icon" type="image/svg+xml" href="${faviconDataUri}" />` : ''}
    <style>
${cssContent}
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script>
${jsContent}
      // Ensure instant execution if DOM is already ready
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        window.dispatchEvent(new Event('DOMContentLoaded'));
      }
    </script>
  </body>
</html>`;

// Write to root vertex.html (primary) and cosmos.html
const targetVertex = path.resolve(rootDir, 'vertex.html');
const targetCosmos = path.resolve(rootDir, 'cosmos.html');
fs.writeFileSync(targetVertex, standaloneHtml, 'utf-8');
fs.writeFileSync(targetCosmos, standaloneHtml, 'utf-8');

// Also copy to dist/vertex.html and dist/cosmos.html for GitHub Pages dist deployment
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.resolve(distDir, 'vertex.html'), standaloneHtml, 'utf-8');
  fs.writeFileSync(path.resolve(distDir, 'cosmos.html'), standaloneHtml, 'utf-8');
}

console.log(`✓ Generated standalone file: ${targetVertex} (${(Buffer.byteLength(standaloneHtml) / 1024).toFixed(1)} KB)`);
console.log(`✓ Generated standalone file: ${targetCosmos} (${(Buffer.byteLength(standaloneHtml) / 1024).toFixed(1)} KB)`);
console.log(`✓ Generated .nojekyll and sync completed for GitHub Pages`);
