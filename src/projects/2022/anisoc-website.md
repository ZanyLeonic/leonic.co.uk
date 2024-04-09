---
title: Anime and Manga Society Website (22/23 - 23/24)
description: A modular and responsive website, designed and architected to use pre-existing resources provided by the student union.
thumbnail_url: /img/projects/anisoc-website/home-section.png
image_urls:
  - /img/projects/anisoc-website/home-section.png
  - /img/projects/anisoc-website/about-joinus-section.png
  - /img/projects/anisoc-website/event-section.png
  - /img/projects/anisoc-website/committee-section.png
links:
  - title: Snapshot of the site
    icon: "https://archive.daemondemon.co.uk/rhulanisoc/favicon-32x32.png"
    url: https://archive.daemondemon.co.uk/rhulanisoc
  - title: Source code
    url: https://github.com/lwarchive/animesoc-website

languages: ["TypeScript"]
year: "2022"
---

This project was decided by the committee to update the pre-existing Django based site with new one that was designed with mobile devices in mind,
along with utilising technologies and services that allowed serving static sites whilst still being dynamic and low cost.

In addition, this site needed to be easy for non-programmers to update the content of the site easily.

To achieve these goals, the following services and technologies were chosen:

- Cloudflare Pages for hosting the static site
- Next.JS (with React + TS) for creating the SPA
- Google Calendar to act as an CMS for the event section.
  - Allowing committee members to simply add society events to the calendar and attach an image.
- Google Docs App Script to act as a serverless function to provide the calendar data (via a CSV) without the need of an API key on the site.

Please Note: With the exception of those who gave permission, previous committee members have been removed and replaced with fictional characters to preserve their privacy.
