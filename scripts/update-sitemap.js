const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.lsvautocloud.com';
const pages = [
    { file: 'index.html', loc: `${baseUrl}/`, changefreq: 'weekly', priority: '1.0' },
    { file: 'dealership-website-builder.html', loc: `${baseUrl}/dealership-website-builder`, changefreq: 'monthly', priority: '0.8' },
    { file: 'car-dealership-website-builder.html', loc: `${baseUrl}/car-dealership-website-builder`, changefreq: 'monthly', priority: '0.8' },
    { file: 'crm-dealership-website.html', loc: `${baseUrl}/crm-dealership-website`, changefreq: 'monthly', priority: '0.8' },
    { file: 'website-builder-crm.html', loc: `${baseUrl}/website-builder-crm`, changefreq: 'monthly', priority: '0.8' },
    { file: 'crm-dealership.html', loc: `${baseUrl}/crm-dealership`, changefreq: 'monthly', priority: '0.8' },
    { file: 'privacy.html', loc: `${baseUrl}/privacy`, changefreq: 'yearly', priority: '0.4' },
    { file: 'terms.html', loc: `${baseUrl}/terms`, changefreq: 'yearly', priority: '0.4' }
];

const formatDate = (date) => date.toISOString().slice(0, 10);

const urlEntries = pages.map(({ file, loc, changefreq, priority }) => {
    const filePath = path.join(__dirname, '..', file);
    const stats = fs.statSync(filePath);
    const lastmod = formatDate(stats.mtime);

    return [
        '    <url>',
        `        <loc>${loc}</loc>`,
        `        <lastmod>${lastmod}</lastmod>`,
        `        <changefreq>${changefreq}</changefreq>`,
        `        <priority>${priority}</priority>`,
        '    </url>'
    ].join('\n');
});

const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries.join('\n'),
    '</urlset>',
    ''
].join('\n');

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), sitemap, 'utf8');
console.log('sitemap.xml updated.');
