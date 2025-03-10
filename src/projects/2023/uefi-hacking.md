---
title: UEFI Hacking Game
description: A UEFI bootloader game, that imitates the hacking mini-game from the Fallout games
thumbnail_url: /img/projects/uefi-hacking/screenshot-1.png
image_urls:
  - /img/projects/uefi-hacking/screenshot-1.png
links:
  - title: UEFI Hacking Game source
    url: https://github.com/pilksoc/uefi-hacking-game

languages: ["C"]
year: "2023"
---

A project submitted for the RHUL Fresher's GameJam 2023.

When tasked at building a game, we wanted to challenge ourselves by creating a game in the most unconventional way possible. By taking inspiration from the Fallout games, and boot loader games, we decided to see if we could create a game written for a UEFI bootloader before your computer boots.

A lot of problems we came across were related to the fact we didn't have an operating system available, so we had to bake functionality (like random number generation) into our program instead of calling a library or syscall.

Worked on implementing the cursor movement and the ci pipelines via GitHub Actions.
