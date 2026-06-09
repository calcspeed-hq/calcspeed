import type { APIRoute } from 'astro';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/mortgage-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/bmi-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/age-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/salary-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/calorie-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/percentage-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/time-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/grade-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/tip-calculator/', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.5', changefreq: 'yearly' },
  { url: '/contact', priority: '0.5', changefreq: 'yearly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

const site = 'https://calcspeed.com';
const now = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${site}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
