# Library software website

## Purpose and deployment

Static public website for library staff and collection managers. The repository
root is the existing product selector; `web_chat/` contains the separate Libra AI
page for RAG-based search and chat over OCR-extracted document data.
`web_ocr/` is the CatalogPlus informational website with the approved white,
light beige and dark green design. No build tool or backend is required.

GitHub Pages deploys `master` from the repository root. CatalogPlus is served at
https://xyadam.github.io/arrabona_digitalizalas_weboldal/web_ocr/.
Only commit or push when explicitly requested by Adam.

## CatalogPlus structure

- `web_ocr/index.html`: semantic page structure, inline vector icons and initial
  Hungarian content. `data-i18n` keys connect elements to the external copy.
- `web_ocr/css/catalogplus.css`: CatalogPlus-only layout, colours, responsive rules
  and language selector. Root `css/style.css` remains for the legacy pages.
- `web_ocr/js/lang_ocr_hun.js`, `lang_ocr_eng.js`: authoritative Hungarian and
  English copy, including metadata, image descriptions and accessibility labels.
  Keep matching keys in both dictionaries. Trusted inline HTML preserves emphasis.
- `web_ocr/js/catalogplus.js`: language selection, localised images and native
  dialog image viewer. `?lang=hu` is Hungarian, `?lang=en` English. The query string
  preserves the language on refresh and in shared links; no cookies are needed.
- `web_ocr/img/app-hu.png`: original software screenshot, intentionally Hungarian
  in both languages. `archive.png` is the shared catalogue-drawer illustration.
- `web_ocr/img/process-hu.png`, `process-en.png`: four-stage process illustrations.
- `web_ocr/img/features-hu.png`, `features-en.png`: independent feature panels.
  The English illustrations were created with the built-in image generator using
  their Hungarian counterparts as edit targets. Keep the ivory/green palette,
  Latin sample records and composition; translate interface labels only.
- Native `details name="catalogplus-faq"` provides an exclusive FAQ accordion.

Edit copy in the language files. Keep initial Hungarian HTML consistent when
changing content so it remains useful before JavaScript loads. Never load the
legacy root `js/main.js` or its shared stylesheet into the CatalogPlus page.
CSS and script URLs in index.html carry a version query; update it when those
assets change so returning visitors do not mix old language files with new code.

## Content boundaries

The core benefit is making an existing paper catalogue searchable and reusable
as digital data. AI extracts and organises the entries so library staff do not
have to type them in individually. Customers receive a searchable database and
can purchase the CatalogPlus client to search, enrich, edit and export records.

Write for nontechnical librarians, including older beginners: explain what they
receive and how it helps their everyday work, with concise, calm wording. Avoid
technical implementation detail, aggressive “do this, not that” slogans and
patronising explanations. Highlight CatalogPlus selectively in bold green.

Describe AI catalogue processing, a searchable database and an optional desktop
client. Cover handwritten cards, printed records, tables and indexes generally;
historical Latin records are illustrations, not a restriction on supported material.
Do not state who performs scanning or that scanning is unavailable. Refer to the
service team as “we”, not Arrabona, on the CatalogPlus page.

Search, USMARC enrichment, review/editing and Excel export are independent
features. There is no subscription. Processing is a one-time fee: under 250,000
cards 100 HUF/card; 250,000–499,999 cards 90 HUF/card; 500,000–1,000,000 cards
80 HUF/card. The optional client costs 35,000 HUF/computer once. Other materials,
imports and larger volumes receive individual quotes; VAT treatment is agreed
in the quotation. Do not reuse the legacy source's older price tiers.

Results figures (3 months for 100,000 cards, 5–10 years of work saved, 10× faster
search) are owner-supplied indicative figures from the original website, not
independently measured benchmarks. Retain the short qualification.

## Legacy pages and backup

Root `index.html`, root `css/`, root `js/`, root `img/` and `web_chat/` retain their
existing product-selector and Libra AI implementation. Their language files and
root `js/main.js` are separate from the new CatalogPlus scripts.

`backup/2026-09-06-before-catalogplus/` holds the original project files and the
approved standalone Desktop HTML. `manifest.json` records SHA-256 checksums for
the original project files. The backup is local and excluded from Git; existing
Git history remains available separately. `_config.yml`
excludes backups and development documentation from the published Pages site.
Restore relative paths from the backup only after explicit user instruction.

## Verification

Before deployment, check both languages at 1440, 768 and 390 pixels: no horizontal
overflow, missing images, JavaScript errors or clipped text. Inspect screenshots
visually as well as DOM measurements. Check every dictionary key, translated
metadata and alt labels, language switching and reload, localised image paths,
FAQ exclusivity, enlarged images and Escape. The English hero screenshot remains
Hungarian intentionally. After push, wait for the exact commit's Pages workflow
to succeed and repeat the key checks against the live URL.

The site has no runtime dependencies. For browser QA on Adam's Windows machine,
Playwright can use installed Edge (`channel: 'msedge'`). A local file URL works;
the page uses external scripts rather than fetch-based language loading.
