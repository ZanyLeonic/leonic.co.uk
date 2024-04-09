---
title: CrackedFM
description: Tune into 102.7FM and, listen to the finest AI generated pirate radio. We have phonk, listener text-in support, news and, interviews.
thumbnail_url: /img/projects/crackedfm/thumbnail.jpg
image_urls:
  - /img/projects/hackaway-v6/A7400497.jpg
  - /img/projects/hackaway-v6/A7400305.jpg
  - /img/projects/hackaway-v6/A7400443.jpg
  - /img/projects/hackaway-v6/A7400761.jpg
  - /img/projects/hackaway-v6/A7400975.jpg
  - /img/projects/hackaway-v6/IMG_4893.JPG
  - /img/projects/hackaway-v6/IMG_5045.JPG
  - /img/projects/hackaway-v6/IMG_5051.JPG
links:
  - title: Hackaway v6
    icon: "https://archive.daemondemon.co.uk/royalhackaway/favicon-32x32.png"
    url: https://archive.daemondemon.co.uk/royalhackaway
  - title: Royal Holloway Computing Society
    icon: "https://computingsociety.co.uk/favicon-32x32.png"
    url: https://computingsociety.co.uk/
  - title: Royal Hackaway Website Source
    url: https://github.com/rhul-compsoc/royalhackaway.com
  - title: RHUL CompSoc Website Source
    url: https://github.com/rhul-compsoc/computingsociety.co.uk
  - title: Royal Hackaway Overlay Source
    url: https://github.com/rhul-compsoc/hackaway-overlay

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
