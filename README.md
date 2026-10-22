# Vaibhav Marvaniya — Senior Unity Developer Portfolio

Static GitHub Pages website. Redesigned from the user's October 2026 repository ZIP and final resume.

## What's included

- `index.html`: new hero, visual game showcase, proof, featured projects, engineering strengths, current career and contact CTA.
- `projects.html`: six credited project profiles and searchable gallery of **38 additional game links**. Together they retain all 44 game entries shown in the original repository (nine featured + 35 additional). External URLs originated from the original website; check these periodically because store/archive pages can move.
- `skills.html`, `experience.html`, `about.html`, `contact.html`: consistent design and accurate professional details.
- `privacy.html`: explanation of optional analytics and preference controls.
- `style.css`: responsive layouts, colors and accessible focus/reduced-motion styles.
- `assets/site.js`: mobile menu, gallery search and current year.
- `assets/analytics.js`: GA4 analytics opt-in and click events.
- `icons/`: original game assets supplied by the user.
- `vaibhav-resume.pdf`: the user's latest final PDF, replacing the previous outdated resume.
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll`: basic web presentation and indexing.

## Publish to GitHub Pages

1. **Back up** the existing repository (or create a branch) before uploading.
2. Extract the ZIP. Move **the contents** of this project folder into the root of your GitHub Pages repository (`vaibhav-marvaniya.github.io`). Keep `index.html` at the repository root.
3. Commit/push to the branch configured in **GitHub → Settings → Pages**.
4. Visit `https://vaibhav-marvaniya.github.io/` after publishing and hard refresh. Check all seven pages and the PDF download.
5. If using a custom domain or different path, update the canonical URLs, Open Graph URLs and `sitemap.xml`.

This is plain HTML, CSS and JavaScript. No framework, npm, environment file, or build command is necessary.

## Existing analytics preserved and extended

The uploaded original site contained **Google Analytics 4** (`gtag.js`) on only `index.html` and `projects.html`, with measurement ID:

`G-G3SQ6RH85V`

The redesigned site **retains that exact ID** in `assets/analytics.js` and loads the Google tag across all pages **only after visitors click “Allow analytics.”** The existing Google tag is a GA4 implementation; no Firebase Web SDK initialization (`initializeApp`) or Firebase app configuration was present in the supplied ZIP. If this GA4 stream is linked to your Firebase project, you can view data there; otherwise it is in the matching GA4 property.

### Custom events

| Event | Fired when |
| --- | --- |
| `navigation_click` | Header, footer or prominent in-site navigation is clicked |
| `project_detail_click` | Featured project case study is opened |
| `project_store_click` | A project store/archive listing is opened |
| `case_study_click` | An engineering case-study link is clicked |
| `resume_view` | A resume viewing link opens the PDF |
| `resume_download` | A PDF download link is clicked |
| `contact_click` | A mail or LinkedIn/GitHub contact link is clicked |
| `project_search` | A gallery search is committed (count only; no typed search string) |
| `privacy_link_click` | Google privacy information is opened |

Events have `link_label`, `destination_type`, `project_name` (when known), `page_name`, `site_section`. **Do not add email addresses, phone numbers, or private game identifiers to event data.**

### Analytics testing after deployment

1. Open the published site in an incognito/new-browser context, click **Allow analytics**, and confirm the choice is retained on navigation.
2. Open your matching Google Analytics property → **Realtime** (or DebugView with appropriate debugging enabled).
3. Click a project-store link (opens a new tab), view/download the resume, and click a contact link; check the above custom event names.
4. On a fresh profile, click **No thanks**; GA4 should not load.
5. Click **Analytics preferences** in the footer to clear the selection and display the choice again.

Website clicks are **not automatically visible to the previous Firebase dashboard** unless the measurement stream/property is correctly connected. You do not need to expose Firebase Web API keys in order to keep the existing GA4 integration.

## Content and NDA

The site uses the user's approved employment details: Capermint (2026–present), GameYogi (2023–2025), Funcell, Ultragames, Dweek and iDivineCreation. Hyper Hostess is identified as the **original game independently developed** by the user, while the publicly released game's download figure is shown as **10M+**. Capermint project identifiers and unapproved internal performance figures are deliberately omitted from site prose. The final resume PDF, supplied by the user, still contains detailed benchmarks: confirm external-sharing permission before publishing the PDF.

## Next visual assets to add

This first version reuses the original PNG assets only. For a richer next iteration, add **approved** 8–15-second gameplay recordings, 2–3 screenshots per selected project, diagrams of architecture you are permitted to disclose, and game-specific engineering outcomes. Never upload NDA source code, private analytics dashboards or confidential screenshots.

## Testing notes

All HTML pages, internal URLs, local image references, resume paths and script syntax have been checked in the source package. Browser-based live rendering was blocked in the preparation environment, so **desktop/mobile visual behavior and live GA4 reception must be checked on the deployed or local site**. Use a local server (`python -m http.server 8000`) or GitHub Pages for manual verification.
