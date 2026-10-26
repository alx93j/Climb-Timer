Climb Timer v10 — reliability update

Upload index.html and sw.js to the root of your existing GitHub Pages repository, replacing the old files. Keep your existing manifest.json and icon files.

Changes:
- Consistent 3–2–1 countdown cues and distinct transition cues; stale queued audio canceled.
- Editing a preset no longer changes the active workout until Save.
- One-time migration for legacy Repeat Hangs default with 6s rest; future customizations are respected.
- Improved timer behavior after browser delays and while switching phases.
- Wake lock explicitly released when app is hidden.
- Phase strip follows the current interval.
- Removed incomplete run checkpoint.
- New-version banner for service worker updates.
- Improved offline caching versioning.

Notes:
- Audio playback and screen wake lock still depend on browser/iOS/Android restrictions. No browser can guarantee background audio.
- Presets stored in localStorage remain intact. The default Repeat Hangs workout is 30s Time, 10s rep rest, 2 reps, 4 sets, 120s set rest, 10s Get Ready.
- If the app shows an old version after upload, reopen it online and tap Update when the banner appears.

Validation:
- JavaScript syntax checks passed after individual modifications.
- Node simulated-DOM smoke tests passed for default, phase sequence, edit isolation, timer start/advance/overrun/pause, preset share encoding.
- Not tested on a physical iPhone or Android device; audio and wake lock need real-device confirmation.
