# Climb Timer — offline iPhone web app

A minimalist climbing interval timer with hang/rest phases, sets, local presets, beep cues, and shareable preset codes.

## Features
- Hang duration, between-rep rest, reps per set, number of sets, between-set rest, and preparation countdown.
- Start/pause, reset, skip phase; elapsed time is based on a deadline so the display can catch up after a brief interruption.
- Beep cues with Web Audio (sound must be activated by tapping Start; iOS may suspend audio in background).
- Presets saved locally on the device.
- Share one workout as a `CLIMB1-...` code; import a code on another device.
- Export/import all presets as JSON.
- PWA manifest and service worker for offline caching.

## Important iOS limitation
Safari/PWA JavaScript and Web Audio are not guaranteed to continue running while the screen is locked or another app is in the foreground. This app recalculates the remaining time when execution resumes, but cannot guarantee a beep at the exact moment while suspended. For dependable timed audio while locked, a native iOS app is more suitable.

## Install on iPhone
A PWA needs to be served over HTTPS and opened in Safari once. Do not open `index.html` directly from Files if you want service-worker offline support.

1. Upload the contents of this folder to a static HTTPS host, such as GitHub Pages or another static web host.
2. Open the HTTPS site in Safari on your iPhone and wait for it to finish loading.
3. Tap **Share → Add to Home Screen**. If shown, enable **Open as Web App**, then tap Add.
4. Open Climb Timer from the Home Screen while online once. Then test in Airplane Mode.
5. To share a preset, open **Presets & Share → Share** and send the generated code. The recipient opens their own Climb Timer, selects **Import code**, pastes the code, and imports it.

## Preset sharing
- Share one preset: a compact text code, suitable for messages.
- Export all: downloads a JSON file containing all saved presets.
- Import code: accepts either a single `CLIMB1-...` code, a single JSON preset, or an exported JSON file's contents.
- Presets are stored only in the browser/device. There is no online account or shared database; users exchange codes or JSON files.

## Local preview
You can open `index.html` on a computer to inspect the UI, but service-worker installation and offline PWA behavior require HTTPS or localhost. On iPhone, local file previews are not the intended install route.
