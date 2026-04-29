# xoocies 🍪

**xoocies** is a minimalist VS Code extension built for Hack Clubbers. It tracks your coding progress in real-time and displays your "Cookie" count directly in the status bar, so you never have to break your flow to check the Hackatime dashboard.


## Why xoocies?
Checking the dashboard every few minutes to see if you've hit your next milestone is a flow-killer. I wanted a way to keep that motivation visible without leaving the editor. Whether you're grinding on a project or just starting your session, xoocies keeps you updated on your rewards as you code.


## Features
* **Real-time Sync:** Fetches data directly from the Hackatime API every 60 seconds.
* **Status Bar Integration:** Clean UI with a 🍪 icon that stays out of your way.
* **Accuracy:** Uses the official server-side data to ensure your count matches the dashboard perfectly.
* **Privacy-First:** No hardcoded keys. Your API key is stored securely in your local VS Code settings.


## How it works
The extension follows the standard Hack Club reward logic. It retrieves your total active coding seconds for the day and applies the 10 cookies/hour rule:

**Cookies = floor((Total Seconds / 3600) * 10)**

This means you’ll see your count increase by **1 cookie for every 6 minutes** of active coding.


## Installation

### Method 1: Install from VSIX (Easiest)
1. Download the latest `xoocies-0.0.1.vsix` from the [Releases](https://github.com/aashixhmaurya/XOOCIES/releases) page.
2. In VS Code, go to the **Extensions** view (`Ctrl+Shift+X`).
3. Click the **three dots (...)** in the top right corner and select **Install from VSIX...**
4. Select the downloaded file.

### Method 2: From Source
1. Clone this repository.
2. Run `npm install`.
3. Press `F5` to open the Extension Development Host.


## Setup
Once installed, you need to link your Hackatime account:

1. Go to your **Hackatime Settings** and copy your **API Key**.
2. In VS Code, open **Settings** (`Ctrl+,`).
3. Search for **"xoocies"**.
4. Paste your API Key into the **Xoocies: Api Key** field.
5. Your cookies will appear in the status bar immediately!


## Technical Details
* **API Endpoint:** `https://hackatime.hackclub.com/api/hackatime/v1/users/current/statusbar/today`
* **Refresh Rate:** 1 minute.
* **Language:** JavaScript (VS Code Extension API).


## License
[MIT](LICENSE) © [Ashish Maurya](https://github.com/aashixhmaurya)