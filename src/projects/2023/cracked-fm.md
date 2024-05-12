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
  - title: DevPost
    url: https://devpost.com/software/crackedfm
  - title: Source code
    url: https://github.com/djpiper28/hack-sussex-23
  - title: Recording of the radio running
    url: https://www.youtube.com/watch?v=-jFAQGD__Qc

languages: ["Python", "SQL"]
year: "2023"
---

This was the project that me and my friends created at [HackSussex 2023](https://www.hacksussex.com/events/hackathon).

This project won "Best In-Person Hack".

The idea came from out from one of group members (Danny) interest in radio and creating our own station. However, we decided it would be a great way to see how we could get an LLM to generate a script from it already pre-trained data and minimal prompts we fed to it.

This radio station supported dynamic content in the form of viewers sending in texts, and the presenter would read the text and craft a response from it.

We trained ElevenLabs on samples of our voices and some other figures to see how it would perform (and funny it would be) reading scripts generated from GPT-3.5 Turbo.

From this project we all learnt a lot about how important it is to build safe guards around the LLM (securing the system prompt) and or building a hypervisor on-top of it to reset it every so often to stop it hallucinating badly.

My contributions on the project:

- Communication between the main radio program and Spotify (e.g. pause music when a text is being read, and queuing or dequeuing music)
- Glue code or maintenance on parts of the program that needed extra hands.
