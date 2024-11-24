# User-agent: *: This applies to all web crawlers (* means all).
User-agent: *

# Disallow the robots to view these files 
# Disallow: /admin/: Prevents crawlers from accessing the /admin/ directory.
Disallow: /admin/
Disallow: /login/
Disallow: /private-files/

# Allow all robots to access everything else
# Allow: /: Allows crawlers to access the rest of the site.
Allow: /

# Link to the sitemap for search engines
# Sitemap:: Provides a link to the sitemap, which helps crawlers understand the structure of your website and find all pages.
Sitemap: https://example.com/sitemap.xml


# Types of Sitemaps:

# XML Sitemap (most common):
Primarily for search engines.
Contains a structured format (XML) that includes the URLs of the site, their importance (priority), last modification date, and frequency of changes.

# HTML Sitemap:
A sitemap page designed for human visitors, listing important links in a readable format.
Usually placed on a "Sitemap" page, where users can navigate through the website easily.

# Key Components of an XML Sitemap:
URL: The full URL of the page you want to include in the sitemap.
<lastmod>: (Optional) The last date the page was modified, which tells crawlers when content was updated.
<changefreq>: (Optional) A hint to the crawler about how frequently the content is likely to change (e.g., daily, weekly, monthly).
<priority>: (Optional) Defines the priority of the page relative to other pages on the same site. Values range from 0.0 to 1.0, with 1.0 being the highest priority.

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/blog</loc>
    <lastmod>2024-01-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/contact</loc>
    <lastmod>2024-01-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
