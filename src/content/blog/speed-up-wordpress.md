---
title: "10 Practical Ways to Speed Up a WordPress Website"
description: "A slow site loses visitors and rankings. These are the fixes I apply on almost every WordPress project, ordered from biggest impact to smallest."
pubDate: "2026-07-15"
heroImage: "/images/journal/speed-up-wordpress.webp"
---

Speed isn't a nice-to-have. Visitors leave pages that take too long to load, and Google uses page experience signals (Core Web Vitals) as part of how it ranks pages. The good news: most slow WordPress sites suffer from the same handful of problems.

Before changing anything, measure. Run your homepage and a key product or service page through [PageSpeed Insights](https://pagespeed.web.dev/) and note the scores for mobile — that's what most of your visitors use.

## 1. Start with good hosting

No plugin can fix an overloaded server. Cheap shared hosting is the most common cause of a slow site I see. Look for a host that offers **PHP 8.x**, server-level caching, and data centers close to your audience (for Thai customers, Singapore is a common choice).

## 2. Use a lightweight theme and builder

Heavy page builders load a lot of CSS and JavaScript on every page, whether you use those features or not. I build with the **block editor plus [Greenshift](https://greenshiftwp.com/)**, which only loads the styles each block actually needs. Switching from a bloated builder is often the single biggest improvement.

## 3. Turn on page caching

Caching saves a ready-made HTML copy of each page so WordPress doesn't rebuild it for every visitor. Use your host's built-in cache if it has one, or a plugin such as WP Rocket, LiteSpeed Cache (on LiteSpeed servers) or W3 Total Cache. Only run **one** caching plugin at a time.

## 4. Compress and resize images

Images are usually the heaviest part of a page.

- Upload images at the size they're displayed — not straight from the camera.
- Serve modern formats like **WebP** or **AVIF**.
- Let WordPress lazy-load images below the fold (it does this by default since version 5.5).
- Don't lazy-load the main hero image; it should load immediately.

## 5. Audit your plugins

Every plugin adds code. Go through your list and ask of each one: *Do I still use this? Could the theme or another plugin already do it?* Deactivate and delete the ones you don't need — deactivated plugins can still be a security risk.

## 6. Host fonts locally and load fewer of them

Each font family and weight is another file to download. Pick one or two families, only the weights you use, and serve them from your own server instead of loading them from a third party.

## 7. Defer non-critical JavaScript

Chat widgets, analytics, and social embeds don't need to load before your content. Most caching plugins can **delay JavaScript until user interaction**, which makes a big difference on mobile.

## 8. Use a CDN

A content delivery network like Cloudflare serves your images, CSS and JavaScript from servers close to each visitor. Many plans include it for free.

## 9. Clean up the database

Over time WordPress collects post revisions, spam comments and expired temporary data. A cleanup plugin (or your caching plugin's database tools) can clear this out. Take a backup first.

## 10. Keep everything updated

New versions of WordPress, PHP and plugins frequently include performance improvements. Staying current is free speed.

## A realistic goal

You don't need a perfect 100. Aim for pages that **load their main content in under 2.5 seconds on mobile** and don't jump around while loading. That's what users notice.

If your site is still slow after these steps, [get in touch](/contact) — I'm happy to take a look and tell you what's holding it back.
