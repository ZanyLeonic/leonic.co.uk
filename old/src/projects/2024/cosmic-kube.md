---
title: CosmicKube
description: An GPT-powered game about combining elements created during Hack the Burgh 2024.
thumbnail_url: /img/projects/cosmickube/title_screen.jpg
image_urls:
  - /img/projects/cosmickube/title_screen.jpg
  - /img/projects/cosmickube/client_screenshot.png
  - /img/projects/cosmickube/cache_screenshot.png
links:
  - title: Proof of Concept Client
    url: https://archive.daemondemon.co.uk/cosmickube
    icon: "https://archive.daemondemon.co.uk/cosmickube/index.icon.png"
  - title: Cache Server Viewer
    url: https://hack.djpiper28.co.uk/cache/
    icon: "/img/projects/unknown.png"
  - title: Source code
    url: https://github.com/pilksoc/cosmickube
  - title: DevPost
    url: https://devpost.com/software/cosmickube
# TODO: Add live version

languages: ["TypeScript", "Go", "Rust", "GDScript"]
year: "2024"
---

**Please note:** This project is still under active development, and stray or completely change from the initial design. A playable version will be released and linked here potentially.

In addition, the art in this is mainly comprised of placeholder art.

This was the project that me and my friends created at [HackTheBurgh X](https://2024.hacktheburgh.com/).

This project won in the "GameDev Co-Op" and "System Administration Mastery" categories.

The idea came up when we were thinking about different projects we could make with different levels of interactivity, we chose to make a game but by using new bleeding edge technology (GPT-4 + DALLe 2) and to see how it work.

What we came up with is a generative game where you combine elements together to create a new element, to eventually create more complex systems or objects.

The architecture of the project mainly consists of three parts:

- Game server - for processing commands from the game and modifying + replicating the game state across clients
- Cache server - caching generated tiles and reusing them. If a tile doesn't exist, it will send a request to GPT-4 to get a description of the object to get from DALLe which it will cache
- Game client - currently written in Godot and published to web, which sends commands to the server to modify game state

What I worked on:

- CI/CD pipelines compiling and packaging each part of project to production
- Architecting how the client and server would communicate with each other
- Stitching each part of the stack together and writing any glue code needed
