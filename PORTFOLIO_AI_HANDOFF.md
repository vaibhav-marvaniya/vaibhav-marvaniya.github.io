# VAIBHAV MARVANIYA — UNITY/C# ENGINEER PORTFOLIO
## Complete project handoff, decisions, implementation, NDA safeguards, and continuation instructions

**Version:** Four-theme portfolio v2 — automatic visit rotation + portrait correction  
**Last updated:** 23 October 2026  
**Project URL (intended deployment):** https://vaibhav-marvaniya.github.io/  
**Status:** Local source package completed and tested with offline structural and simulated browser tests. **NOT deployed** to the public GitHub Pages website by this work.  
**Authoritative project source for a next AI:** The latest delivery ZIP, not an old theme preview or the earlier three-theme/four-theme prototypes.

> **Start here in a future ChatGPT session.** This file preserves the user's decisions and the actual implementation. The source code itself is in the accompanying release ZIP. Reuse and modify it rather than starting over. Do not assume private contracts or proprietary projects can be published merely because titles are removed.

---

## 1. What the user asked for and why

This is a professional recruitment portfolio for **Vaibhav Marvaniya**, a hands-on **Senior Unity Developer / C# mobile-game engineer**. The user wants the site to visibly demonstrate Unity, programming, engineering thinking, gameplay work and release experience, without being gimmicky or disclosing confidential employer material.

Historical context and design decisions:

1. The earlier site was a static GitHub Pages HTML/CSS/JS portfolio with inconsistent navigation, outdated career wording, an old resume, and a broken/misaligned V.M monogram. The original site had 44 game entries: 9 highlighted and 35 in a secondary gallery.
2. An initial technical dark redesign reorganized that content into **6 featured projects and 38 additional public game links**, seven HTML pages and a shared CSS/JS design system. It retained the original icon images and existing GA4 ID.
3. The user wanted a more distinctive design inspired by Unity/C# developer tools, with UI animations, but **explicitly rejected rebuilding the website in Unity or C#**. The implementation must remain plain **HTML, CSS, JavaScript** on GitHub Pages.
4. Four concepts were selected: **Editor Workspace**, **C# Runtime** using the Shader Lab aqua/lavender palette, **Engineering Blueprint**, and **Hybrid**. All must be present on the same website with a header theme picker, not four separately maintained sites.
5. Gameplay videos and screenshots are **not available yet**. Never block basic improvements on obtaining media; use existing icons. Future approved media may be added.
6. The user asked for automatic rotation so visitors see the next design on a future visit, while keeping a manual theme switcher. This was implemented with session-local preservation so navigating pages does not suddenly restyle the website.
7. The user reported the portrait on the About page appeared stretched. It now uses its **original dimensions 1124 × 1096** with proportional, non-cropping CSS.
8. The user asked for a detailed handoff document so another AI can continue after this temporary chat without losing any reasoning or technical context. This is that document.

The portfolio should be **mobile-friendly**, accessible where practical, recruiter-focused, have subtle purposeful animation, and continue to work without any build tool or framework.

---

## 2. Current product and public content

### Pages (7)

| File | Purpose |
|---|---|
| `index.html` | Home. Four different hero compositions selected by the active theme. Engineering positioning, proof blocks, projects and contact CTAs. |
| `projects.html` | Six featured public-project summaries + a local search/filter gallery of 38 additional game entries. |
| `skills.html` | Unity/C#, mobile performance, game systems, releases and engineering strengths. |
| `experience.html` | Professional timeline with earlier public projects and intentionally generalized current-employer work. |
| `about.html` | Personal professional overview, original profile image, values, experience/resume links. |
| `contact.html` | Recruiter-friendly email, LinkedIn and portfolio contact navigation; no backend/contact form. |
| `privacy.html` | Optional GA4 consent explanation and theme-preference storage disclosure. |

### Public career chronology included in the source

The public resume and source supplied by the user were the editorial basis; details have **not** been reverified with employers. The site describes:

- **Capermint Technologies:** Senior Unity Developer, January 2026–present. **Current-employer work is confidential**; keep role scope broad and avoid project-specific details and metrics.
- **GameYogi:** Senior Unity Developer, August 2023–December 2025; mentored four Unity developers; past publicly listed game work.
- **Funcell Games:** Unity Developer, October 2021–July 2023; independently developed the **original** Hyper Hostess, with the later released title reaching a reported 10M+ downloads. Do not imply personally owning publisher changes after original handoff.
- **Ultragames:** Unity Developer, July 2020–September 2021; selected multiplayer experience.
- **Dweek Studios:** Unity Developer, January 2019–July 2020; consolidated five Unity projects using AssetBundles.
- **iDivineCreation:** Junior Unity Developer, May 2017–January 2019.

Positioning: **9+ years** of Unity/C# mobile game development. Target audience: hiring managers and recruiters for hands-on senior engineering, **not freelance/second-job advertising**.

### Featured public projects (6)

1. Hyper Hostess
2. Nut Sort – Color Match
3. Color Screw Unscrew and Match
4. Merge Glow – Fashion Design
5. Daily Routine 3D
6. Pills Sort

There are **38 additional archive/project tiles**, preserving the count of **44 projects** from the original portfolio. Existing public store/archive URLs are retained in the source, but many have **not been independently checked** for current availability. Do not invent missing store links, changes in download counts, or project impact.

### Resume deliverables

The project includes the earlier-created **NDA-conscious two-page public resume**:

- `vaibhav-resume.pdf` — the website's download/view target.
- `vaibhav-resume.docx` — editable Word version.

These were derived from the user's final resume, with Capermint-specific performance figures, confidential genre information, particular feature behaviors and other unpublished implementation details generalized or removed. Do not revert to the original resume with confidential metrics when editing the site.

---

## 3. Four visual themes — exact choices

Theme identity is represented by the `data-theme` attribute on the document's `<html>` element.

| Display label | Internal ID | Main visual language | Color direction |
|---|---|---|---|
| **01 · Editor Workspace** | `editor` | Unity-Editor-inspired scene browser, object icons, selectable hierarchy and mock Play Mode | Dark gray + warm amber |
| **02 · C# Runtime** | `runtime` | Programmer/code-window interface with simulated C# source/build console | Shader Lab palette: midnight indigo + aqua + lavender |
| **03 · Blueprint** (Engineering Blueprint) | `blueprint` | Light technical drawing/grid, diagram nodes and flowing connector traces | Powder blue + white + engineering blue |
| **04 · Hybrid** | `hybrid` | Blend of game previews, technical panels, C# visual motifs and aurora accents | Dark blue + turquoise + violet |

**Theme 2 was explicitly renamed from `C# Runtime / Shader` to `C# Runtime`.** Keep the internal `runtime` ID unchanged; this prevents breaking CSS selectors, storage values and implementation logic. The CSS palette remains the Shader Lab-inspired palette.

### Distinct homepage compositions

The homepage contains multiple intentional `.hero-mode` compositions; CSS rules show only the active theme's hero. Shared content and other pages adapt using theme CSS custom properties, so the user is editing **one site with four skins** rather than four forks.

Animations and interactions include scroll/reveal transitions, float/hover motion, the Editor's mock hierarchy and play button, animated blueprint connectors, an illustrative C# terminal build, and themed CSS effects. The example terminal is a **simulation**, not real C# compilation or Unity WebGL; preserve accurate labeling. Respect `prefers-reduced-motion`.

### Logo and profile

The brand logo was changed from a broken vertically arranged V.M emblem to a compact **`<VM/>`** code-inspired monogram, consistent across desktop and mobile.

The original `icons/vaibhav-profile.png` is **1124px wide and 1096px high**. Current About HTML uses `width="1124" height="1096" decoding="async"`, and CSS uses `width:100%; height:auto; max-width:1124px; aspect-ratio:1124 / 1096; object-fit:contain`. This scales proportionally, avoids forced stretching and keeps the full image rather than cropping it. Do not change to `object-fit:cover` or an arbitrary fixed-height portrait crop without user approval.

---

## 4. NEW: automatic theme rotation / manual lock

This is the latest change and must be preserved.

### Required user-visible behavior

- **First automatic visit / new browsing session:** show **Hybrid**.
- For subsequent **new browser sessions**, rotate in this order:

  `Hybrid → Editor Workspace → C# Runtime → Engineering Blueprint → Hybrid → …`

- **Do not rotate for every page navigation or refresh.** A visitor should be able to read Home, Projects and About in the same visual design.
- The theme picker stays visible in the header and has **Auto** plus four manually selectable themes.
- Manually selecting a theme changes the design immediately, saves the choice for future visits, and **pauses automatic rotation**.
- Selecting **Auto** again resumes rotation. The current appearance remains until the next browsing session; that next session advances to the theme after the currently displayed one.
- A prior manual preference saved by the original four-theme version is migrated to the new mechanism.
- If storage is blocked, gracefully fall back to Hybrid; do not crash the website.

### Actual source files

- `assets/theme-init.js`: **nondeferred**, included in each page `<head>` before rendering. Determines `data-theme`, session choice and persistent overrides. Exposes `window.portfolioTheme` with `mode`, `theme`, `setManual(next)`, and `useAuto()`.
- `assets/site.js`: **deferred**, binds the picker, updates the Auto option text dynamically (e.g. `Auto · Hybrid`), handles UI transitions, and retains the mobile menu, search, simulated controls, scroll reveals and current year.
- Every HTML file has the theme selector with `<option value="auto">` and option `value="runtime"` labeled **02 · C# Runtime**.
- `style.css`: theme styling selected via `html[data-theme="..."]`.

### Browser storage keys — do not rename casually

| Storage | Key | Purpose |
|---|---|---|
| `localStorage` | `vm_portfolio_theme_manual_v3` | Explicit manual theme choice. If set to a valid theme, overrides auto-rotation on future visits. |
| `localStorage` | `vm_portfolio_last_auto_theme_v3` | Cursor tracking the most recently automatically shown theme (updated when Auto is reactivated). |
| `sessionStorage` | `vm_portfolio_session_theme_v3` | Theme shown in the current tab/session so navigating between pages or reloading does not rotate. |
| `localStorage` | `vm_portfolio_theme_v2` | Legacy key from prior release; read/migrated as a manual preference, then cleared by a new manual/Auto change. |
| `localStorage` | `vm_analytics_consent_v1` | Independent GA4 permission; do **not** confuse with theme settings. |

### Why sessions rather than page loads?

Changing the theme on every page request makes navigation visually jarring, particularly for a recruiter moving between résumé, projects and experience. Using sessionStorage provides a coherent visual session while returning users can see the next variation. **Browser session restoration may preserve sessionStorage**; this is a browser behavior, not a failure. "Next visit" is therefore best understood as a newly started browsing session, not a guaranteed calendar-day boundary, and not every refresh.

### Quick manual QA recipe

1. Open the site in a fresh browser profile; expect **Auto · Hybrid**.
2. Navigate to About and Projects, and refresh; expect Hybrid unchanged.
3. Start a new browsing session without the old tab's sessionStorage, retaining localStorage; expect Editor. Then Runtime, Blueprint, Hybrid on subsequent sessions.
4. Choose **02 · C# Runtime** manually; navigate/reopen, expect Runtime and a selected manual option.
5. Choose **Auto**; current page stays Runtime; new session advances to Blueprint.
6. Test that the picker, layout and navbar fit a 360px mobile viewport.

---

## 5. Technical architecture and file tree

Site is intentionally **vanilla HTML/CSS/JavaScript**, with no npm, framework, bundler, Unity player, server-side code or build command. Deploy directly to GitHub Pages.

```text
vaibhav-marvaniya.github.io/     ← deploy the CONTENTS at repository publishing root
├── index.html
├── projects.html
├── skills.html
├── experience.html
├── about.html
├── contact.html
├── privacy.html
├── style.css
├── assets/
│   ├── theme-init.js            ← NEW: early auto-rotation/session/manual state
│   ├── site.js                  ← picker, menu, scroll animations, search, demos
│   └── analytics.js             ← original GA4 measurement, opt-in consent
├── icons/                       ← 45 existing PNGs, incl. original portrait
├── vaibhav-resume.pdf           ← NDA-conscious public resume
├── vaibhav-resume.docx          ← editable NDA-conscious public resume
├── favicon.svg
├── sitemap.xml
├── robots.txt
├── .nojekyll
├── README.md
└── PORTFOLIO_AI_HANDOFF.md     ← this document
```

### Major code locations / conventions

- Theme colors: top of `style.css` with `html[data-theme="editor"]` implicit root defaults and explicit `runtime`, `blueprint`, `hybrid` variables. Updating colors here changes shared pages too.
- Theme-specific hero selection: `.hero-editor`, `.hero-runtime`, `.hero-blueprint`, `.hero-hybrid` CSS selectors. A single `index.html` holds all four hero compositions.
- About image: `.profile-box img` in `style.css`; corresponding `<img>` in `about.html`.
- Theme picker: `#theme-select` in each HTML header, connected by `assets/site.js`.
- Selectable Editor mini-scene: `[data-editor-game]`, `#scene-icon-main`, `#inspector-title`, `#inspector-body` and `.play-mode` in index/site.js.
- C# simulated build: `#build-demo`, `#demo-console` in index/site.js (not a real compiler).
- Searchable game archive: `#project-search`, `.gallery-card`, `data-search`, `#search-count` in projects/site.js. Query input is not sent to analytics.
- Responsive navigation: `.nav-toggle`, `#site-nav`; JS handles click, Escape, outside click and link selection.
- Reduced motion: CSS media rules and `IntersectionObserver` in site.js.
- Analytics consent: `assets/analytics.js` builds the optional banner, controls persistent consent and only loads gtag once consent is accepted.

Maintain the four theme IDs and storage keys unless migration behavior is deliberately updated and tested.

---

## 6. Analytics / privacy — existing property preserved

The previous website already used **Google Analytics 4** with measurement ID **`G-G3SQ6RH85V`**. The user has confirmed they have access to this GA4 property and wish to keep it. Do not replace it without asking.

`assets/analytics.js` loads `gtag.js` **only after the visitor accepts optional analytics**. Consent states are saved to `localStorage` under `vm_analytics_consent_v1`; the footer "Analytics preferences" action clears this and reloads the page. Event handling includes project links, navigation, resume, themes and interactive-demo events. Some events are only emitted after explicit interaction and only after consent.

**No Firebase Web SDK configuration was supplied.** The GA4 measurement ID is not proof of Firebase integration.

The privacy page now describes theme rotation localStorage/sessionStorage and confirms it operates independently from optional Google Analytics. Project search runs locally; GA4 may receive only result counts after consent, not typed search queries. Avoid collecting or transmitting personal contact details in event parameters.

**Still outstanding:** verification with the real GA4 property in Realtime/DebugView after deploying, plus consent-denial network tests in a normal browser. Local simulated checks do not establish live Google data receipt.

---

## 7. NDA, confidentiality and editorial rules — critically important

The user supplied a **signed Capermint employment agreement and a signed NDA** as private background documents. **Neither belongs in the website source ZIP, public repository, GitHub Pages hosting, project media or downloadable résumé.** The contracts contain personal/legal information. Do not quote or expose confidential contract details in the public site.

The NDA broadly describes confidential information including nonpublic technical work, clients, visual data, processes, derivative information and intellectual property, not merely game titles. The safest working editorial policy:

- **Current Capermint role:** include title, dates and broad capabilities such as Unity/C#, mobile gameplay engineering, profiling/debugging, UI, production collaboration and mentoring, **without** identifying a game, genre, feature-specific implementation, unreleased media, algorithms, private architecture, SDK configuration, client or performance benchmark.
- **Remove or withhold:** any unpublished current-project name/type, test-device FPS before/after, exact loading-time reduction, obstacle-dodging behavior, backend event/reward-system description, internal code, asset screenshots and proprietary dashboards.
- **Prior public games:** use the public titles and links from the user's résumé and portfolio, but keep individual contribution wording accurate. Public listing alone is not permission to release proprietary source/media.
- **Hyper Hostess:** state independent authorship of the **original** game, distinguish later publisher updates and the overall released game's public milestone from personal ownership of future iterations.
- **Do not claim legal clearance:** this site's wording is a conservative editorial strategy, **not** legal advice or a guarantee of compliance. Employer written approval or review by a qualified Indian lawyer is recommended if publishing employer-specific technical content. Do not infer an NDA is safe merely because specific game names are hidden.
- **Contact copy:** recruiter/job-opportunity emphasis, not marketing for moonlighting or client work while employed.

The public résumé included in the project was updated in the previous iteration with this conservative approach. The confidential earlier final résumé DOCX and signed contract PDFs are inputs, **not publishable site assets**.

---

## 8. Accessibility, responsiveness, animations and UX

The site is mobile-first/responsive in CSS with dedicated breakpoints. A collapsible mobile nav appears at narrower widths; selected colors adapt through CSS custom properties. Focus indication, a skip-to-content link and reduced-motion handling are present. Selected runtime text and floating elements are deliberately animated to communicate game-development skills, while body content remains readable without gameplay video.

Do not add autoplay sound, unnecessary loading screens, intrusive particle effects or scroll-blocking transitions. Those slow down recruiters and degrade mobile accessibility. Animation must be secondary to reading and navigation.

The icon/profile folder is user-provided and preserved. Some publicly linked game icons may reflect current marketplace branding, but those marketplace listings can change over time; do not invent replacement imagery or create misleading representations of personal code ownership.

---

## 9. QA completed for the latest update — exact scope

### Confirmed by source/simulated browser checks

- Seven HTML pages have updated head initialization and selector labels.
- **New-session theme sequence tested:** Hybrid → Editor → C# Runtime → Blueprint → Hybrid.
- Navigating between pages within a simulated session preserves the current theme.
- Choosing a manual theme persists into a simulated later session.
- Returning to Auto resumes rotation after the currently displayed theme.
- Prior `vm_portfolio_theme_v2` saved manual preference is recognized.
- All local `href`/`src` references resolve within the release folder; the site has 6 featured projects and 38 archive entries.
- JS syntax check passed for theme-init.js and site.js (Node `--check`).
- About image loads at **1124 × 1096** intrinsic pixels and retains original ratio at **360, 375, 390, 768, 1024 and 1440px**. It uses `object-fit:contain` with no detected viewport horizontal overflow during these responsive checks.
- Mobile overflow checks performed on other six pages at 390px.
- The updated theme picker displays `02 · C# Runtime` (no `/ Shader`).
- Existing public project listings, NDA-conscious résumé assets and analytics.js were preserved.

### Environment limits / not yet verified

The development sandbox blocked Chromium navigation to real HTTP/file URLs, so the new rotation QA used Playwright `set_content` with bundled CSS/JS/images and simulated `localStorage`/`sessionStorage` objects. This exercises the UI and state logic but is **not** a substitute for full live-browser QA.

Still needed: standard-browser desktop/mobile screenshots on actual GitHub Pages hosting; real session restoration behavior on Safari/Firefox/mobile; keyboard/screen-reader checks; Lighthouse/Core Web Vitals; real GA4 consent/network tests; external store/archive-link reachability; final NDA/public résumé clearance. **No GitHub deployment was made.**

---

## 10. Deployment / how to run

### Local preview

1. Extract the latest website ZIP.
2. For simplest local inspection open `index.html` in a browser. Because some browsers treat `file://` storage differently, **prefer a simple local HTTP server** for theme-rotation testing:

   ```bash
   cd /path/to/extracted/website
   python -m http.server 8000
   ```

3. Open `http://localhost:8000/` on desktop and mobile-sized viewports; check all four themes and the About portrait.
4. To test rotation repeatedly without disturbing production browser data, use a fresh browser profile and start new tabs/sessions. A browser's "restore previous tabs" option may preserve the session theme.

### GitHub Pages

1. Back up/branch the current repository `vaibhav-marvaniya.github.io` first.
2. **Upload the contents of the website folder to the configured publishing root**. Do not add another enclosing folder. `index.html` must be at the root.
3. Confirm Pages configuration in GitHub → Settings → Pages. No framework/build task is required.
4. Verify all seven pages and the header theme picker on desktop, mobile and keyboard navigation.
5. Check public résumé PDF and Word file, all 44 project links, favicon and sitemap.
6. Opt in to GA4 and verify analytics events in the correct live property. Use a separate fresh browser profile to verify "No thanks" does not load the Google tag.
7. Review published source for unwanted legal/confidential documents **before** merging/uploading.

---

## 11. Maintenance recipes for the next AI

### Change theme order or default

Edit `const ORDER` in `assets/theme-init.js`. The **first** entry is the initial theme when no prior auto state exists, and the rotation order is the sequence of that array. Changing internal IDs requires updating CSS `html[data-theme]`, homepage hero selectors, `<option value>` across all pages, and storage migration; avoid changing IDs for a cosmetic rename.

### Change one theme's colors

Edit the CSS custom properties at the top of `style.css` for `html[data-theme="..."]`. Also review hardcoded accents in hero-specific CSS before assuming all styling will change automatically. Do not confuse the **C# Runtime** label with its intentionally retained Shader Lab colors.

### Add a fifth theme later

Add a new ID to the `ORDER`/`VALID` initialization code, an option in all seven headers, a corresponding CSS variables section and hero composition if appropriate. Update `SHORT_LABELS` and theme selectors in `assets/site.js`; update privacy/readme/handoff. Test old storage states and mobile nav again.

### Update biography / About photo

Edit `about.html`; preserve `<img>` original aspect ratio and `object-fit:contain`. Do not inject fixed forced height that changes proportions. The current source image resides at `icons/vaibhav-profile.png`.

### Add approved gameplay media later

Ask for permission/approval first. Add responsive screenshots or muted clips to 3–6 public project cards/case studies, with optimized sizes, lazy loading, reduced-motion/keyboard considerations, and truthful attribution. Do not add current-employer confidential gameplay clips/screenshots.

### Add case studies

Use actual challenge → individual contribution → implementation at a **nonconfidential** level → verified outcome. Existing featured summaries are not detailed private technical case studies. Do not invent architecture diagrams, FPS results, growth/retention outcomes or personal ownership of publisher updates.

### Analytics changes

Keep `G-G3SQ6RH85V` unless user requests a change. Modify `assets/analytics.js` only with consent-sensitive testing. Ensure no `gtag` calls fire before acceptance and no email/contact details are sent.

---

## 12. Open priorities for future work

1. User review of all four themes and the new session-rotation behavior in their own browser.
2. Live GitHub Pages publishing **only after** reviewing NDA/privacy/public résumé approval and taking a backup.
3. Live mobile QA, external game-store URLs, performance/accessibility review.
4. Real GA4 event check after deployment.
5. Approved project gameplay screenshots/videos and 4–6 substantive technical case studies when media/details become available.
6. Optional refinements to header layout, animation pacing and visual details based on screenshots from the live site.

Do not repeatedly ask for gameplay videos: user explicitly said they cannot provide them now and they may be added later.

---

## 13. Recommended prompt to paste into the next ChatGPT conversation

> Continue my **Vaibhav Marvaniya Senior Unity Developer portfolio** from the attached **latest four-theme website ZIP** and **PORTFOLIO_AI_HANDOFF.md**. Do **not** start over. It is a static HTML/CSS/JS GitHub Pages site with seven pages, four site-wide themes (Editor Workspace, C# Runtime in midnight/aqua/lavender, Engineering Blueprint, Hybrid), the existing GA4 consent mechanism (`G-G3SQ6RH85V`), six featured projects and a 38-game archive. The most recent changes added `assets/theme-init.js` and automatic new-session rotation: Hybrid → Editor → C# Runtime → Blueprint, while manual theme choices remain saved until Auto is selected. The About portrait must remain proportionally scaled from the original 1124×1096 image with no cropping. Preserve the NDA-conscious Capermint descriptions and public résumé; do not expose signed agreements, current project names/genres, internal metrics or proprietary code/media. Current work is **not deployed**. The site must remain mobile-friendly, animated but usable, and must not require Unity, WebGL or gameplay media. First inspect and preserve the current code, then help me test/refine/publish as requested.

---

## 14. Scope and provenance of this document

This handoff is based on the user's source ZIP, predecessor handoff/audit notes, latest created four-theme site, user design decisions from the conversation, NDA-conscious résumé package, and local state/UI checks. It distinguishes implemented features from unverified live deployment. It is not a legal opinion; never treat public-resume edits as employer authorization to disclose confidential information.
