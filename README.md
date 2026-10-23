# Vaibhav Marvaniya · Four-theme Unity/C# Developer Portfolio

**Four switchable site-wide themes**, no frameworks, Unity runtime, Node build, or gameplay video requirements.

## Themes

- 01 **Editor Workspace** — dark gray / amber editor chrome, selectable game scene hierarchy and Play Mode mockup.
- 02 **C# Runtime** — code interface with midnight indigo, electric aqua and lavender; simulated console, no real compiler.
- 03 **Engineering Blueprint** — light technical diagram theme with system-flow animations.
- 04 **Hybrid** — original layout combining a build terminal aesthetic with game preview, editor-inspired cards and Shader Lab-style gradients.

### Theme rotation behavior (updated 23 October 2026)

- **First automatic browsing session:** Hybrid.
- **Subsequent new sessions:** Editor Workspace → C# Runtime → Engineering Blueprint → Hybrid, repeating.
- Switching pages or reloading in the **same browser tab/session** does not rotate the theme.
- The theme picker includes **Auto** plus four manual themes. Selecting a manual theme saves that preference and disables rotation until **Auto** is selected again.
- Selecting **Auto** keeps the currently displayed theme for the current session and advances to the next one on the next session.
- Uses `assets/theme-init.js` synchronously in each page's `<head>` so the theme is selected before the page renders. `assets/site.js` wires the theme picker.
- Storage keys: `vm_portfolio_theme_manual_v3` (saved manual override), `vm_portfolio_last_auto_theme_v3` (rotation cursor), `vm_portfolio_session_theme_v3` (active session). Earlier manual choices stored in `vm_portfolio_theme_v2` are supported. If browser storage is blocked, the visual fallback is Hybrid.

Note: browsers may restore sessions/tabs, so a restored tab may retain its current theme. A "visit" here means a new browser tab/session that starts without existing sessionStorage; it does **not** mean every page request. This is intentional to avoid theme changes while reading.

### About portrait fix

The original `icons/vaibhav-profile.png` measures **1124 × 1096 px**. The About page now uses the true intrinsic dimensions and proportional CSS (`width:100%; height:auto; object-fit:contain`) so no distortion or cropping occurs when resized on smaller screens.

## Files

- Seven HTML pages: `index.html`, `projects.html`, `skills.html`, `experience.html`, `about.html`, `contact.html`, `privacy.html`
- `style.css` — responsive theme variables, four homepage compositions and shared components
- `assets/theme-init.js` — early theme selection; auto-rotation and stored manual override
- `assets/site.js` — theme picker, mobile navigation, animation, interactive editor and local game search
- `assets/analytics.js` — **existing GA4 ID preserved (`G-G3SQ6RH85V`)**, opt-in only; anonymous interaction events
- `icons/` — preserved from the prior portfolio package; no additional game assets required
- `vaibhav-resume.pdf`, `vaibhav-resume.docx` — updated NDA-conscious public resume
- Sitemap, robots, favicon, `.nojekyll`

## NDA / editorial precautions

Descriptions for Capermint Technologies contain **general responsibilities only**. Removed internal performance metrics, genre, confidential feature description, game names, unpublished implementations and media from current employment. Excluded current employer project art and original studio code. Earlier public games and previous professional experience are retained from the user-provided resume/portfolio; review their approvals separately if applicable. The illustrative `Portfolio.cs` terminal content is example frontend text, not company Unity source.

**Legal clearance:** This is a best-effort conservative public version, not legal advice, contractual interpretation or proof of NDA compliance. Obtain employer written permission or independent legal review before publishing employer-specific details. Never publish signed NDA or employment agreement PDFs.

## Publish

1. Back up the current GitHub Pages repository first.
2. Upload the **contents of this directory**, keeping `index.html` at the repository root.
3. In GitHub → Settings → Pages confirm the publishing branch and root.
4. Visit the live site to verify pages and all four themes on desktop/mobile.
5. Open GA4 Realtime and verify consent-only tracking. Declining analytics must not load Google Tag.
6. Test external game/store links; delisted games may have moved.

All themes are CSS/JS only. Animations respect `prefers-reduced-motion`; without JavaScript, the default Hybrid content is still readable.

## Test caveats

Structural and code syntax checks can be performed offline; real Google Analytics and external store availability require live browser/network checks. Contact information and previous-project public claims are based on the user-supplied original resume and website, not independently verified.

## AI continuation notes

See `PORTFOLIO_AI_HANDOFF.md` in this release for the complete project history, design rationale, NDA guardrails, test status, file map, storage/analytics behavior, deployment instructions, and ready-to-paste next-conversation prompt. Do not publish signed agreements, private NDA PDFs, internal source code, or unapproved work media.
