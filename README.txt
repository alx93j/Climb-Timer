CLIMB TIMER v12 — PRESET MANAGEMENT UPDATE

INSTALL (existing GitHub Pages site)
1. Unzip this archive.
2. In the existing GitHub repo, replace index.html and sw.js in the repo root.
3. Commit both changes.
4. Open the published app online. When it offers an update, finish/reset your workout and approve it.
5. Leave manifest.json and your existing icons unchanged.

WHAT'S NEW
- Easier preset cards: Edit and Load on each card, other actions under the three-dot menu.
- Duplicate any preset safely (the original is untouched).
- Favorite presets; favorites appear first. Move up/down inside the favorites or other group.
- Deletion offers a 15-second Undo window (within the current open app session).
- Separate Save preset (does NOT change current workout) from Save & Use (applies and resets timer).
- Import review before changing presets. On matching names, choose Keep both or Replace matches.
- Restore backups directly from a JSON file. Backup exports also retain favorite markers.
- Existing CLIMB1 share codes and localStorage presets remain compatible.
- Keep-screen-awake, timer, audio cues and v11 update flow retained.

BEHAVIOR AND SAFETY
- Delete Undo is time-limited and is lost on page reload; export backups for long-term recovery.
- Imported or edited presets don't interrupt an active workout unless Save & Use or Load is chosen.
- A saved active workout can differ from its edited preset until you load the newer settings.
- Presets remain stored locally on the current device/browser. Back up before clearing site data.
- Offline installation requires existing manifest.json and icons already in your repository.
- Browser sound/background behavior still depends on the mobile OS.

CHECKS COMPLETED
- JavaScript syntax check: pass.
- Existing v11 regressions: default 30/10/2/4 workout; countdown scheduling; silent/minimal sound modes;
  skip/pause/resume; updates waiting for approval; share-code round trip; timer stall recovery: pass.
- New presets checks: save vs apply; duplicate; cancel without mutation; add preset; favorite sorting;
  manual reorder; delete/undo restore with favorite; guard last preset; import keep/replace;
  backup favorites; stored-preset compatibility; repeated incoming names; stale review invalidation;
  preset name escaping: pass.
- Static HTML: unique IDs and expected controls present: pass.
- Physical iOS/Android playback and visual layout: not tested. Headless Chromium launch succeeded,
  but navigation to local/localhost URLs was blocked by the test environment.
