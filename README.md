# Vaibhav Marvaniya · Four-theme Unity/C# Developer Portfolio

**Four switchable site-wide themes**, no frameworks, Unity runtime, Node build, or gameplay video requirements.

## Themes

- 01 **Editor Workspace** — dark gray / amber editor chrome, selectable game scene hierarchy and Play Mode mockup.
- 02 **C# Runtime / Shader** — code interface with midnight indigo, electric aqua and lavender; simulated console, no real compiler.
- 03 **Engineering Blueprint** — light technical diagram theme with system-flow animations.
- 04 **Hybrid** — original layout combining a build terminal aesthetic with game preview, editor-inspired cards and Shader Lab-style gradients.

Switch themes with **Theme** selector. Selection persists using `localStorage` on all seven pages.

## Files

- Seven HTML pages: `index.html`, `projects.html`, `skills.html`, `experience.html`, `about.html`, `contact.html`, `privacy.html`
- `style.css` — responsive theme variables, four homepage compositions and shared components
- `assets/site.js` — theme persistence, mobile navigation, animation, interactive editor and local game search
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
