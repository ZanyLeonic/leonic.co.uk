---
title: CompSoc Message Wall
description: Migrated project away from Twitter to a more self-hosted solution.
thumbnail_url: /img/projects/twitter-stream/thumbnail.png
image_urls:
  - /img/projects/twitter-stream/landing.png
  - /img/projects/twitter-stream/message-wall.png
links:
  - title: Source Code
    url: https://github.com/rhul-compsoc/twitter-stream

languages: ["TypeScript", "SQL"]
year: "2023"
---

The past couple years, the Computing Society help run a student union night called 809000's.
For our contribution to the night, the committee decided to run a message board that displays approved messages on a wall.

This code existed previously, but used a Twitter hashtag to grab messages, however due to API changes - this was no longer possible.

**What I contributed:**

- Migrating the wall away from Twitter as a data source to our own MySQL database
- Improving admin frontend by improving layout and user experience
- Utilised Discord OAuth to authenticate admin users to access the moderation portal
