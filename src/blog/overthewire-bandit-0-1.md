---
title: "OverTheWire Bandit: Level 0 → 1"
description: "Notes on my approach and thought process while solving Bandit level 0 to 1."
pubDate: 2025-01-05
tags: ["security", "linux", "overthewire", "bandit"]
---

## Problem Overview
The goal of this level is to connect to the Bandit server via SSH and retrieve
the password for the next level from a file located in the home directory.

## Initial Thoughts
This is an introductory level, so I assumed the challenge would focus on basic
Linux commands and filesystem navigation rather than exploitation.

## Approach
After logging in via SSH, I listed the files in the home directory and identified
the file containing the password. I used standard command-line tools to read its
contents.

## Key Point
Even at this level, the challenge reinforces the importance of being comfortable
with basic Linux commands and understanding file permissions and locations.

## Result
I was able to retrieve the password for the next level and successfully log in.

## What I Learned
- Comfort with basic Linux commands is essential for security work.
- Many security problems start with simple system-level access and observation.
