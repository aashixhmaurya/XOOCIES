# xoocies 🍪

**xoocies** is a minimalist VS Code extension built for Hack Clubbers. It tracks your coding progress in real-time and displays your "Cookie" count directly in the status bar, so you never have to break your flow to check the Hackatime dashboard.

## Why xoocies?
Checking the dashboard every few minutes to see if you've hit your next milestone is a flow-killer. I wanted a way to keep that motivation visible without leaving the editor. Whether you're grinding on a project or just starting your session, xoocies keeps you updated on your rewards as you code. No drama, just cookies.

## Features
* **Real-time Sync:** Fetches data directly from the Hackatime API every 60 seconds.
* **Status Bar Integration:** Clean UI with a 🍪 icon that stays out of your way.
* **Accuracy:** Uses the official server-side data to ensure your count matches the dashboard perfectly.
* **Privacy-First:** No hardcoded keys. Your API key is stored securely in your local VS Code settings.

## How it works
The extension follows the standard Hack Club reward logic. It retrieves your total active coding seconds for the day and applies the 10 cookies/hour rule:

**Cookies = floor((Total Seconds / 3600) * 10)**

Essentially, your count increments by **1 cookie every 6 minutes** of active coding.

## Installation

### Method 1: Install from VSIX (Recommended)
* Download the latest `xoocies-x.x.x.vsix` from the [Releases](https://github.com/aashixhmaurya/XOOCIES/releases) page.
* Open VS Code and go to the **Extensions** view (`Ctrl+Shift+X`).
* Click the **three dots (...)** in the top right and select **Install from VSIX...**
* Choose the downloaded file.

### Method 2: From Source
* Clone this repository.
* Run `npm install`.
* Press `F5` to launch the extension in a new window.

## Setup
Once installed, you need to link your Hackatime account to see your progress:

* Go to your **Hackatime Settings** here: [hackatime.hackclub.com/my/settings/access](https://hackatime.hackclub.com/my/settings/access)
* Copy your **API Key**.
* In VS Code, open **Settings** (`Ctrl+,`).
* Search for **"xoocies"**.
* Paste your API Key into the **Xoocies: Api Key** field.
* Your 🍪 count will appear in the status bar immediately.

## Technical Details
* **Source:** Hackatime Status-bar API.
* **Endpoint:** `https://hackatime.hackclub.com/api/hackatime/v1/users/current/statusbar/today`
* **Sync Interval:** 1 minute.
* **Stack:** JavaScript / VS Code Extension API.
### 🎥 How it looks
<img width="1477" height="244" alt="Screenshot 2026-04-29 224942" src="https://github.com/user-attachments/assets/f0c75984-fcd4-49dd-a798-192f23fe8a2c" />
