# xoocies 🍪

**xoocies** is a minimalist VS Code extension built for Hack Clubbers who are tired of dashboard-hopping. It tracks your coding progress in real-time and shows your Cookie count directly in the status bar. Keep your head in the code and your eyes on the prize.

## Why xoocies?
Checking the dashboard mid-grind is a total vibe killer. I built this so you can see your rewards right where you work. Whether you're chasing your next milestone or just vibing with a project, xoocies keeps you updated on your cookies without the drama.

## Features
* **Real-time Sync:** Hits the Hackatime API every 60 seconds to stay updated.
* **Status Bar Integration:** A clean 🍪 icon that stays lowkey in your editor.
* **Pure Accuracy:** Uses official server data so your count always matches the dashboard.
* **Privacy-First:** No hardcoding here. Your API key stays safe in your local settings.

## The Cookie Math 🧮
The extension follows the official Hack Club rule: **10 cookies for every 1 hour of coding.**

The formula used is:  
**Cookies = (Total Seconds / 3600) * 10 (and then we round it down)**

### What does "round it down" mean?
In technical terms, we use a `floor` function. In simple words: **We only count full, completed cookies.** If your math says you have 5.9 cookies, you’ll see **5 Cookies** on your screen. You gotta finish those last few minutes of coding to bake that 6th cookie! Basically, 1 cookie drops every 6 minutes of active work.

## Installation (The Easy Way)
* Download the latest `xoocies-x.x.x.vsix` from the [Releases](https://github.com/aashixhmaurya/XOOCIES/releases) page.
* Open VS Code and jump into the **Extensions** view (`Ctrl+Shift+X`).
* Click the **three dots (...)** at the top right and hit **Install from VSIX...**
* Select the file you just downloaded and you're in.

## Setup
Once you've installed it, you just need to link your account:

* Grab your **API Key** from your Hackatime Settings: [hackatime.hackclub.com/my/settings/access](https://hackatime.hackclub.com/my/settings/access)
* Open VS Code **Settings** (`Ctrl+,`).
* Search for **"xoocies"**.
* Paste your API Key into the **Xoocies: Api Key** box.
* Boom! Your 🍪 count will pop up in the status bar instantly.

## Technical Details
* **Source:** Hackatime Status-bar API
* **Endpoint:** `https://hackatime.hackclub.com/api/hackatime/v1/users/current/statusbar/today`
* **Sync Interval:** 1 minute
* **Stack:** JavaScript / VS Code Extension API