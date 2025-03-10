---
title: HackHack Revolution
description: A web based dance dance revolution clone using our own "IoT dance mat"
thumbnail_url: /img/projects/hack-hack-revolution/thumbnail.gif
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
  - title: DevPost
    url: https://devpost.com/software/hack-hack-revolution
  - title: Source code
    url: https://github.com/chazzox/brunel-hack

languages: ["C", "Typescript"]
year: "2022"
---

A project that started around the novel idea of getting a PS1-era DDR mat to become an IoT device using an ESP32 board with Wifi.

Due to the diverse set of skills our team had, we decided to split the project into different parts;

- Custom ESP32 firmware to process the inputs from the mat, and send it to a server (Embedded C)
- A browser rhythm game that communicated with the input server (Svelte)
- A high score table that takes a picture of you in action (App Script in Google Sheets)

My contributions were mainly writing the firmware for the ESP32, and assisting with the hardware modifications on the dance mat and ESP32.
