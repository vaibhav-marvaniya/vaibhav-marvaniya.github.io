# Portfolio version history

## v2 — 23 October 2026 (latest; not deployed)
- Added automatic four-theme rotation **per new browsing session**. First automatic session: Hybrid. Subsequent sessions: Editor Workspace → C# Runtime → Engineering Blueprint → Hybrid.
- Kept the header theme selector and manual selection. Manual choices persist across visits, suspend rotation, and can be reset using **Auto**.
- Added `assets/theme-init.js` to initialize the theme before rendering and share state between all seven pages.
- Added backward compatibility for the older `vm_portfolio_theme_v2` saved manual preference.
- Renamed the visible second theme from **C# Runtime / Shader** to **C# Runtime** on every page; kept the Shader Lab palette and stable `runtime` internal ID.
- Corrected About portrait sizing using original **1124×1096** dimensions and `height:auto; object-fit:contain` to avoid stretching/cropping.
- Updated privacy explanation, README and comprehensive AI handoff.
- Performed simulated-browser and static QA. The site remains **not deployed**.

## v1 — 23 October 2026 (previous local baseline)
- Built one seven-page site with four design options: Editor Workspace, C# Runtime / Shader, Engineering Blueprint and Hybrid.
- Added animated theme-specific home compositions, responsive navigation, project gallery and illustrative interactive controls.
- Preserved 6 featured public projects and 38 additional games, user icons, revised NDA-conscious resume, GA4 consent and GitHub Pages static architecture.

## Earlier redesign — 22 October 2026
- Replaced inconsistent original multi-page portfolio with a consistent seven-page responsive system.
- Corrected employment dates, resume references and public project attribution.
- Consolidated existing GA4 code and explicit consent.
- Reorganized original 44 public game entries into 6 featured and 38 archive entries.

See `PORTFOLIO_AI_HANDOFF.md` for full development history, detailed behavior, NDA safeguards, test caveats and continuation instructions.
