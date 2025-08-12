const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Path to your Angular routing module
const routingFile = path.resolve(__dirname, 'src/app/app-routes.ts');

// Read the file and extract route paths
const fileContent = fs.readFileSync(routingFile, 'utf-8');

// Regex to match: path: 'something'
const routeRegex = /path:\s*'([^']*)'/g;
let match;
const links = [];

while ((match = routeRegex.exec(fileContent)) !== null) {
  const routePath = match[1];
  // Skip empty path (root) as it's already '/'
  if (routePath === '') {
    links.push({ url: '/', changefreq: 'weekly', priority: 1.0 });
  } else {
    links.push({ url: `/${routePath}`, changefreq: 'monthly', priority: 0.8 });
  }
}

// Create sitemap stream
const stream = new SitemapStream({ hostname: 'https://doitrighthandymanllc.com' });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    const outputDir = path.resolve(__dirname, 'dist/handyman-site/browser');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });
