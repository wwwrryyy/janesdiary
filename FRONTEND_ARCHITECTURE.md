# Jane's Diary: Frontend Architecture, Design System & UI/UX Blueprint
**Author:** Shawn Shaibu Cherian (26BCE1820) — Vellore Institute of Technology, Chennai  
**Deliverable:** Digital Assignment (DA) — Interactive Web Platform  
**Target Deployment:** GitHub Pages (`https://wwwrryyy.github.io/janesdiary/`)  
**Design Identity:** ElevenLabs Design Language (`~/.agents/design-md/design-md/elevenlabs/DESIGN.md`)  
**Architecture Pattern:** 100% Static Site Generation (Next.js 15 App Router `output: 'export'`) + Client-Side Hydration  

---

## 1. Executive Architectural Blueprint & Brand Identity Synthesis

### 1.1 The Synthesis: "Jane's Diary" Meets ElevenLabs
*Jane's Diary* takes its name from ancient parchment scraped and written over, a celebrated metaphor in feminist literary theory (Gilbert & Gubar, Spivak, Woolf) for uncovering marginalized voices buried beneath patriarchal discourse.

Rather than relying on generic academic blog templates or dark developer-tool themes, this platform is translated into the **ElevenLabs design aesthetic**:
- **Quiet Editorial Magazine Voice:** Warm off-white floor (`#f5f5f5` / `#fafafa`), razor-sharp near-black ink typography (`#0c0a09` / `#292524`), and featherlight 1px hairlines (`#e7e5e4`).
- **Photographic / Atmospheric Voltage (Not Chromatic Clutter):** Color is introduced exclusively through subtle, drifting pastel atmospheric gradient orbs (**Mint** `#a7e5d3`, **Peach** `#f4c5a8`, **Lavender** `#c8b8e0`, **Sky** `#a8c8e8`, and **Rose** `#e8b8c4`). These radial gradients sit deep in the z-index behind hero headlines, interactive cards, and the constellation network—never as loud saturated button fills or text colors.
- **Display Typography at Weight 300:** Editorial headlines styled in light serif display (`EB Garamond` / `Waldenburg` surrogate) strictly at weight `300` with tight tracking (`-0.32px` to `-1.92px`). Headings are *never bolded*, preserving high-literary poise.
- **Pill Geometry as the Interaction Standard:** Every primary CTA is a near-black ink pill (`#292524` with `#ffffff` text, 40px height, `rounded-full`). Badges, audio controllers, lens toggles, and metadata chips adhere strictly to `rounded-full` / `rounded-pill`. Cards sit on `rounded-xl` (16px) or `rounded-2xl` (24px).
- **Academic Rigor Meets Frictionless Evaluation:** A dedicated "Evaluator Drawer" badge (`DA Info & Rubric [26BCE1820]`) provides VIT faculty immediate 1-click access to grading criteria, literary coverage matrix, works cited, and a dedicated academic print stylesheet (`Cmd+P`).

```
+---------------------------------------------------------------------------------------------------------+
| [Wordmark: Jane's Diary]    Essays   Constellation   Methodology    [Cmd+K Search]  [DA Info & Rubric]|
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|       (Atmospheric Mint/Sky Gradient Orb)                                                               |
|                                                                                                         |
|                   Unearthing the Erased Layers of Feminist Literature                                   |
|                   An interactive scholarly archive analyzing five seminal axes                          |
|                   from Victorian Gothic confinement to algorithmic cyberfeminism.                       |
|                                                                                                         |
|                             [ Explore Essays (Ink Pill) ]   [ Open Constellation (Outline) ]            |
|                                                                                                         |
+---------------------------------------------------------------------------------------------------------+
|  [ Intersectional Constellation 2D Network: 14 Authors, 5 Eras, 28 Intertextual Edges ]                  |
+---------------------------------------------------------------------------------------------------------+
|  [ Featured Cornerstone Analyses: 5 MDX Essays with Literary Radar & Subtext X-Ray ]                    |
+---------------------------------------------------------------------------------------------------------+
|  [ Floating Era-Matched Ambient Audio Pill: ♫ Victorian Rain & Quill Scratches (Web Audio API) ]        |
+---------------------------------------------------------------------------------------------------------+
```

---

## 2. Visual Language & Design Tokens

### 2.1 Color Tokens Specification
Strictly aligned with the ElevenLabs design tokens:

| Token Name | Hex Value | Semantic Role in "Jane's Diary" |
|---|---|---|
| `canvas` | `#f5f5f5` | Global body background, standard editorial surface |
| `canvas-soft` | `#fafafa` | Alternating section bands, modal backdrops |
| `canvas-deep` | `#0c0a09` | Dark mode accents, invert containers |
| `surface-card` | `#ffffff` | Pure white cards (Essays, Radar, Marginalia, Citations) |
| `surface-strong` | `#f0efed` | Pill badge plates, tag chips, voice/icon circles |
| `surface-dark` | `#0c0a09` | Inverted hero cards, dark slide-overs |
| `surface-dark-elevated`| `#1c1917` | Elevated cards on dark canvas |
| `ink` | `#0c0a09` | Primary display headlines, high-contrast titles |
| `primary` | `#292524` | Primary CTA ink pill background |
| `primary-active` | `#0c0a09` | Active/pressed state for ink pills |
| `body` | `#4e4e4e` | Long-form essay running copy |
| `body-strong` | `#292524` | Emphasized body text, section subheadings |
| `muted` | `#777169` | Essay metadata (reading time, dates, author names) |
| `muted-soft` | `#a8a29e` | Form placeholders, disabled controls, timeline ticks |
| `hairline` | `#e7e5e4` | Default 1px card and divider borders |
| `hairline-soft` | `#f0efed` | Subtle sub-dividers in marginalia feeds |
| `hairline-strong` | `#d6d3d1` | Secondary outline pill buttons, active input borders |
| `on-primary` | `#ffffff` | Text on ink pill buttons |
| **Pastel Orbs** | | **Atmospheric Depth Only (Never as button fills or text)** |
| `gradient-mint` | `#a7e5d3` | 1st-Wave & Environmental Feminism atmospheric backdrop |
| `gradient-peach` | `#f4c5a8` | Subtext Uncovered X-ray highlight glow & Modernist backdrop |
| `gradient-lavender`| `#c8b8e0` | Postcolonial & Subaltern analysis backdrop |
| `gradient-sky` | `#a8c8e8` | Cyberfeminism & algorithmic economy backdrop |
| `gradient-rose` | `#e8b8c4` | Romantic Proto-Feminism & confessional poetry backdrop |

### 2.2 Typography Scale & Rules
- **Display Serif (`EB Garamond` / `Waldenburg`):** Used for essay titles, hero titles, and major quote callouts. **Strict Rule: Always `fontWeight: 300`**. Never bold display headings.
- **Body Sans (`Inter`):** Used for navigation, essay prose, marginalia comments, controls, and UI labels. Uses loose tracking (`+0.16px`) for an editorial book feel.
- **Metadata Monospace (`JetBrains Mono` / `Fira Code`):** Used for academic registration numbers (`26BCE1820`), publication timestamps, radar quantitative values, citation copy boxes, and keyboard shortcut chips (`Cmd+K`).

| Style Token | Font Family | Size | Weight | Line Height | Tracking | Application |
|---|---|---|---|---|---|---|
| `display-mega` | Serif | 64px / 4rem | 300 | 1.05 | -1.92px | Landing Page Hero H1 |
| `display-xl` | Serif | 48px / 3rem | 300 | 1.08 | -0.96px | Essay Reading Page H1 |
| `display-lg` | Serif | 36px / 2.25rem | 300 | 1.17 | -0.36px | Section Titles (Constellation, Essays) |
| `display-md` | Serif | 32px / 2rem | 300 | 1.13 | -0.32px | Sub-section H2s inside MDX |
| `display-sm` | Serif | 24px / 1.5rem | 300 | 1.20 | 0.00px | Essay Card Titles, Modal Headers |
| `title-md` | Inter | 20px / 1.25rem | 500 | 1.35 | 0.00px | Drawer section heads, Radar title |
| `title-sm` | Inter | 18px / 1.125rem| 500 | 1.44 | +0.18px | Margin annotation author tags |
| `body-md` | Inter | 17px / 1.0625rem| 400 | 1.60 | +0.16px | Essay Running Copy (optimized for reading) |
| `body-strong` | Inter | 17px / 1.0625rem| 500 | 1.60 | +0.16px | MDX strong emphasis |
| `body-sm` | Inter | 15px / 0.9375rem| 400 | 1.47 | +0.15px | Marginalia notes, card summaries |
| `caption-upper`| Inter | 12px / 0.75rem | 600 | 1.40 | +0.96px | Badges, Era pills, Rubric tags (UPPERCASE) |
| `button` | Inter | 15px / 0.9375rem| 500 | 1.00 | 0.00px | CTA Pill labels, tab triggers |
| `mono-code` | Mono | 13px / 0.8125rem| 400 | 1.50 | +0.50px | MLA citations, JSON viewer, student ID |

### 2.3 Geometry & Elevation
- **Border Radii:**
  - `rounded-pill` (`9999px`): All interactive buttons, badges, audio player container, search bar trigger, era selector pills.
  - `rounded-2xl` (`24px`): Atmospheric gradient orb cards, constellation container.
  - `rounded-xl` (`16px`): Essay cards, Evaluator Drawer, Citation generator card, Radar card.
  - `rounded-md` (`8px`): Form inputs, dropdown menus.
- **Borders & Shadows:**
  - Hairline: `1px solid #e7e5e4` on all card perimeters.
  - Soft Drop Shadow: `0 4px 16px rgba(0, 0, 0, 0.04)` on cards, elevating them subtly off the `#f5f5f5` canvas.
  - Floating Elements (Audio Player, Cmd+K, Sticky Lens Bar): `0 12px 32px rgba(12, 10, 9, 0.08)`.

---

## 3. Information Architecture & Page Layouts

```
                                      THE PALIMPSEST ROUTE ARCHITECTURE
                                                      │
         ┌────────────────────────────────────────────┼────────────────────────────────────────────┐
         │                                            │                                            │
         ▼                                            ▼                                            ▼
   Landing Page (/)                          Essay Page (/essays/[slug])                   Evaluator Slide-Over
  ├── Global TopNav (64px)                  ├── Global TopNav (64px)                      ├── Student Metadata Card
  │   ├── Logo & Sub-badge                  ├── Sticky Reading Progress + Lens Bar        ├── VIT DA Rubric Checklist
  │   ├── Nav Links                         ├── Essay Header (Title 48px, 300 wt)         ├── 5-Era Literary Matrix
  │   ├── Cmd+K Search Pill                 ├── Literary Radar (5-Axis SVG)               ├── Consolidated Works Cited
  │   └── Evaluator Drawer Pill             ├── Reading Controls (Font Size, Theme)       └── Academic Print PDF Button
  ├── Hero Band (64px H1 + Orbs)            ├── Two-Column Layout (Desktop):
  ├── Constellation 2D Network              │   ├── MDX Body (SubtextReveal inline)
  ├── 5 Cornerstone Essays Grid             │   └── Living Margins Sticky Feed
  ├── Quantitative Archive Stats            ├── 1-Click MLA/APA Citation Box
  ├── Era Audio Pill (Floating)             ├── Next/Previous Essay Navigation
  └── Editorial Footer (5 columns)          └── Era Audio Pill (Floating)
```

### 3.1 Global Top Navigation (64px Height)
Fixed at top with backdrop blur (`rgba(245, 245, 245, 0.85)` + `backdrop-blur-md`):
1. **Left:** Wordmark "Jane's Diary" in Serif 300 (20px, `#0c0a09`) paired with a pill badge `"FEMINIST ARCHIVE"` (`bg-[#f0efed]`, 11px uppercase).
2. **Center:** Minimalist nav links with subtle hover underlines: `Essays`, `Constellation`, `Methodology`, `Works Cited`.
3. **Right:**
   - `Cmd+K` / `Search` pill button (1px outline `#e7e5e4`, 36px height, rounded-full, with mono `⌘K` badge).
   - `DA Info & Rubric [26BCE1820]` primary ink pill button (`bg-[#292524] text-white hover:bg-[#0c0a09]`, rounded-full, 36px height).

### 3.2 Landing Page (`/`) Layout & Pacing
Paced with ElevenLabs' signature **96px section rhythm**:
1. **Hero Band (Padding: 96px top/bottom):**
   - Centered soft atmospheric radial orb (`radial-gradient(circle, #a7e5d3 0%, #a8c8e8 40%, transparent 70%)`, opacity 0.5, blur 48px).
   - Display Mega H1 (64px, weight 300, line-height 1.05, tracking -1.92px): *"Unearthing the Erased Layers of Feminist Literature"*.
   - Subhead in Inter Body MD (17px, `#4e4e4e`, max-w-2xl mx-auto): *"A digital humanities archive examining the subtextual resistance of women writers across two centuries—from Victorian domestic confinement to cyberfeminist futures."*
   - Two CTAs: Primary ink pill `[ Explore 5 Cornerstone Essays ]` and secondary outline pill `[ Launch Constellation Network ]`.
2. **Intersectional Constellation Section:**
   - Display LG H2 (36px, 300 weight): *"The Intersectional Constellation"*.
   - Filter pill row: `All Eras`, `1st-Wave Gothic`, `Modernist Materialism`, `Postcolonial Subaltern`, `Cyberfeminism`, `Speculative Utopias`.
   - 2D Canvas Force-Directed Network container (`rounded-2xl`, border `1px solid #e7e5e4`, bg `#ffffff`, height 540px) with interactive node hover cards, zoom/pan controls, and full-screen expansion.
3. **Curated Cornerstone Essays Grid (2-up & 3-up layout):**
   - Display LG H2: *"Cornerstone Scholarly Analyses"*.
   - Cards (`feature-card` pattern, `rounded-xl`, 24px padding, white background with subtle hover drop `0 4px 16px rgba(0,0,0,0.04)`):
     - **Card 01:** *The Madwoman in the Attic vs. The Glitch in the Machine* (Gilman & Haraway)
     - **Card 02:** *Subaltern Voices & The Body as a Battlefield* (Devi & Roy)
     - **Card 03:** *A Room of One's Own in the Algorithm Economy* (Woolf & Modern Creator Economics)
     - **Card 04:** *Speculative Wombs & Dystopian Blueprints* (Hossain & Atwood)
     - **Card 05:** *Reclaiming the Monster: Creation Anxiety & Female Autonomy* (Shelley & Plath)
   - Each card features: Era uppercase pill badge, 300-weight title, analyzed authors chip, mini 5-axis radar preview thumbnail, reading time (`8 min read`), and right arrow pill link.
4. **Quantitative Archive Metrics Band:**
   - 4-column minimal stat band: `5 Curated Essays`, `14 Primary Works Analyzed`, `134 Years of Canon (1818–2026)`, `100% Static Edge (0ms Server Latency)`.
5. **Editorial Footer (64px padding):**
   - Academic attribution: *Shawn Shaibu Cherian (26BCE1820) · Advanced English / Digital Humanities · Vellore Institute of Technology (VIT), Chennai*.
   - Quick links, GitHub repository link, and static export build version stamp.

### 3.3 Essay Reading Page (`/essays/[slug]`) Layout
Engineered for supreme scholarly immersion:
1. **Sticky Header Bar (Below TopNav on scroll):**
   - Real-time Reading Progress Bar (1.5px ink line).
   - Left: Truncated essay title in Mono 12px.
   - Right: "Critical Lens" (Subtext Uncovered) toggle pill switch (`Surface Text` ⇄ `Feminist Subtext`).
2. **Essay Header & Literary Radar Stage:**
   - Era badge pill (`rounded-full`, bg `#f0efed`).
   - Display XL H1 (48px, weight 300, line-height 1.08, tracking -0.96px).
   - Subtitle in Inter 18px (`#4e4e4e`).
   - Academic metadata row: Author (`Shawn Shaibu Cherian 26BCE1820`), Date (`19 Oct 2026`), Reading Time (`8 min read`), Era audio track indicator.
   - **Literary Radar Card:** Floating white card with the 5-axis SVG Spider Chart evaluating the works on *Female Agency*, *Intersectional Depth*, *Subversion of Tropes*, *Historical Impact*, and *Structural Innovation*.
3. **The Two-Column Editorial Grid (Desktop >= 1280px):**
   - **Main Reading Column (Left/Center, max-w-[720px]):**
     - Typography optimized for high reading endurance (17px / line-height 1.6).
     - Styled MDX components: Drop caps in Serif 300, pull quotes with hairline borders, interactive `<SubtextReveal>` text spans.
   - **"Living Margins" Sticky Column (Right, width 340px):**
     - Anchored dynamically adjacent to the corresponding essay paragraphs.
     - Scholarly notes (pre-seeded JSON) marked with author tags.
     - Reader personal notes (localStorage) marked with highlight clips.
     - "Add Annotation" trigger on text selection.
   - **Mobile Collapsed Behavior (< 1024px):**
     - Living Margins collapse into inline margin indicator badges `[💬 2]`. Tapping opens a sleek bottom-sheet modal.
4. **Article Post-Reading Section:**
   - **One-Click MLA 9th & APA 7th Citation Generator:** Formatted citation box with 1-click clipboard copy and confirmation toast.
   - **Previous / Next Essay Navigation:** Cards linking to sequential chronological essays.
   - **Export Annotations:** Button allowing reader/evaluator to download their personal highlights as a Markdown/JSON bundle.

### 3.4 Evaluator Drawer (Slide-Over Sheet)
Designed specifically for the VIT Faculty grading experience:
- Persistent trigger button in header: `DA Info & Rubric [26BCE1820]`.
- Slides in smoothly from the right (`width: min(520px, 92vw)`).
- **Tab 1: Student & Assignment Details:**
  - Student: Shawn Shaibu Cherian
  - Registration Number: 26BCE1820
  - Course: Advanced English / Digital Humanities
  - Institution: VIT Chennai
  - Target: GitHub Pages Static Deployment
- **Tab 2: Rubric Adherence Checklist (Interactive):**
  - [x] **Literary Research & Multi-Era Depth:** 5 eras covered (Victorian Gothic, Proto-Feminist Romanticism, Modernism, Postcolonial Subaltern, Cyberfeminism).
  - [x] **Interactive Textual Analysis:** "Subtext Uncovered" Critical Lens morphing active.
  - [x] **Data Visualization Rigor:** Intersectional Constellation 2D force graph + 5-axis Literary Radar.
  - [x] **Marginalia & Scholarship:** Pre-baked scholarly commentary + user annotation engine.
  - [x] **Citation Standards:** MLA 9th and APA 7th compliant citation generators on every page.
  - [x] **Static Architecture:** 100% Zero-backend GitHub Pages static bundle with subpath routing.
- **Tab 3: Consolidated Works Cited:** Complete MLA 9th bibliography of all primary and secondary texts analyzed.
- **Header Action:** `Print Academic PDF (Cmd+P)` button, triggering custom print styling.

---

## 4. Interactive Components & Animations

### 4.1 Subtext Uncovered (Critical Lens Text-Morphing Engine)
- **Concept:** Feminist writers historically encoded dissent under patriarchal censorship. This component lets readers peel back the surface text to reveal the hidden subversive subtext.
- **Component File:** `src/components/interactive/SubtextReveal.tsx`
- **State & Interaction:**
  - Controlled by a global state (via React Context `CriticalLensContext`) or local paragraph toggle.
  - **Surface State:** Displays literal 19th/20th-century text with a warm pastel highlight underline (`#f4c5a8` peach).
  - **Subtext State:** Smooth Framer Motion morphing transition (`transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }`). The literal text crossfades and expands into a distinct editorial card displaying:
    - Badge: `"FEMINIST SUBTEXT"` (`bg-[#f0efed]`, 11px uppercase)
    - Critical Commentary: In-depth psychoanalytic, Marxist, or postcolonial interpretation.
    - Theory Tag: e.g., *Hysteria as Domestic Rebellion*, *Cyborg Hybridity vs Essentialism*.
- **Code Architecture:**
```tsx
interface SubtextRevealProps {
  id: string;
  surfaceText: string;
  subtext: string;
  theory: string;
  lensType?: 'marxist' | 'psychoanalytic' | 'postcolonial' | 'cyberfeminist';
}
```

### 4.2 Intersectional Constellation (2D Force-Directed Network)
- **Concept:** Visualizes the living network of feminist intellectual history, connecting authors, seminal texts, movements, and recurring tropes across centuries.
- **Component File:** `src/components/interactive/ConstellationGraph.tsx`
- **Technology Choice:** HTML5 Canvas powered by `d3-force` simulation (or `react-force-graph-2d`).
  - *Rationale:* Superior 60fps physics performance on mobile and desktop compared to heavyweight SVG DOM trees; flawless zero-backend static compilation.
- **Data Source:** `/public/data/graph.json`
- **Node Categories:**
  - `Author` (e.g., Virginia Woolf, Mahasweta Devi, Donna Haraway) — Size: 18px radius, ink fill `#0c0a09`.
  - `Text` (e.g., *A Room of One's Own*, *Draupadi*) — Size: 14px, white card with 1.5px hairline.
  - `Movement` (e.g., *1st-Wave Gothic*, *Postcolonial Feminism*) — Size: 12px, soft pastel ring.
  - `Trope / Theme` (e.g., *Bodily Autonomy*, *Confined Domesticity*) — Size: 10px, muted `#777169`.
- **Interactions:**
  - **Node Hover:** Dim unlinked nodes to 15% opacity; highlight direct 1st-degree connections with crisp `#0c0a09` strokes. Displays an ElevenLabs style hover tooltip card (Author name, era badge, and connection count).
  - **Node Click:** Focuses camera, opens side preview drawer with essay link and primary quote.
  - **Filter Controls:** Pill buttons filter visible nodes by era without resetting user pan/zoom.

### 4.3 Living Margins (Hybrid Scholarly + LocalStorage Marginalia)
- **Concept:** Recreates the tactile intimacy of physical library books with handwritten scholarly annotations in the margins.
- **Component Files:** `src/components/interactive/LivingMargins.tsx` & `src/lib/storage.ts`
- **Dual-Data Hybrid Architecture:**
  1. **Pre-Seeded Scholarly Notes:** Loaded at build time from `/public/data/marginalia.json`. Anchored to specific paragraph indexes. Authored by *Shawn Shaibu Cherian (Author's Note)*.
  2. **Reader Personal Notes:** Created on-the-fly when a reader highlights any sentence (`window.getSelection()`). A floating pill popover `[ Annotate Margin ]` appears. Reader enters commentary; note is saved to `window.localStorage` under key `palimpsest_annotations_${slug}`.
- **Export & Submission Feature:**
  - Readers and evaluators can click `[ Export Margin Notes ]` to immediately download a formatted Markdown / JSON document of all their annotations with timestamps and highlighted quotes.

### 4.4 The Literary Radar (5-Axis SVG Spider Chart)
- **Concept:** A quantitative assessment chart at the head of each essay evaluating the text across 5 dimensions:
  1. *Female Agency*
  2. *Intersectional Depth*
  3. *Subversion of Tropes*
  4. *Historical Impact*
  5. *Structural Innovation*
- **Component File:** `src/components/interactive/LiteraryRadar.tsx`
- **Implementation:**
  - Pure declarative SVG (no heavy chart library overhead, 0kb bundle bloat).
  - Coordinates computed via polar geometry:
    $$\theta_i = \frac{2\pi \cdot i}{5} - \frac{\pi}{2}, \quad x_i = r \cdot \frac{\text{score}_i}{10} \cdot \cos(\theta_i), \quad y_i = r \cdot \frac{\text{score}_i}{10} \cdot \sin(\theta_i)$$
  - Hairline concentric pentagon grid lines (`#e7e5e4`).
  - Polygon Fill: Soft pastel mint with 25% opacity (`rgba(167, 229, 211, 0.3)`), stroke `#0c0a09` (2px).
  - Interactive hover on vertices: Displays tooltip with qualitative rationale for the assigned score.

### 4.5 Ambient Audio Pill Player (Web Audio / HTML5 Audio)
- **Concept:** Subtle era-matched ambient audio loops that immerse the reader in the historical setting of the literature.
  - *Victorian Gothic:* Soft distant rain on windowpane & faint quill scratches.
  - *Cyberfeminist:* Low-frequency warm ambient modular drone.
- **Component File:** `src/components/interactive/AudioAmbientPill.tsx`
- **ElevenLabs Styling:**
  - Floating pill at bottom-right or bottom-center (`rounded-full`, height 42px, bg `#ffffff`, border `1px solid #e7e5e4`, shadow `0 8px 24px rgba(0,0,0,0.06)`).
  - Left: Mini 3-bar animated SVG equalizer (animates when playing).
  - Center: Truncated track name in Inter 13px (e.g., `♫ Victorian Rain · 1892`).
  - Right: Play/Pause circular button (`bg-[#292524] text-white`, 28px diameter), volume slider popover.
- **Audio Policy & Fallback:**
  - Never autoplays (adheres strictly to browser audio autoplay restrictions).
  - Seamless loop handling with 1.5-second volume fade-in and fade-out to prevent clicks/pops.

### 4.6 Cmd+K Command Palette (Fuse.js Fuzzy Search)
- **Concept:** Instant zero-latency search across the entire archive.
- **Component File:** `src/components/layout/CommandPalette.tsx`
- **Implementation:**
  - Keyboard shortcut listener: `Cmd+K` (Mac) and `Ctrl+K` (Windows/Linux).
  - Search engine: `Fuse.js` executing client-side against static `/public/data/search-index.json`.
  - Indexed items:
    - Essay Titles & Subtitles
    - Analyzed Authors (e.g., Virginia Woolf, Mahasweta Devi)
    - Literary Eras & Movements
    - Notable Passages & Theoretical Keywords
    - Scholarly Marginalia Comments
  - ElevenLabs UI: Clean modal card (`rounded-2xl`, border `1px solid #e7e5e4`, bg `#ffffff`), 48px search input with mono search icon, categorized result lists, arrow key navigation, and keyboard badge hints (`↵ to open`, `esc to close`).

### 4.7 Evaluator Drawer (Slide-Over & Academic Print Stylesheet)
- **Component File:** `src/components/layout/EvaluatorDrawer.tsx`
- **Slide-over Sheet:** Framer motion drawer sliding from right viewport margin.
- **Academic Print Stylesheet (`@media print`):**
  - Triggered via `window.print()` button.
  - Strips top navigation, floating audio player, interactive toggles, and side margins.
  - Restructures MDX essay content into standard 2-column academic journal layout (MLA format, serif typography, page numbers, footnotes at bottom, formal works cited appendix).

### 4.8 1-Click MLA 9th & APA 7th Citation Generator
- **Component File:** `src/components/interactive/CitationBox.tsx`
- **Features:**
  - Segmented pill switch: `[ MLA 9th ]` `[ APA 7th ]`.
  - Monospace citation display box with copy button.
  - Visual copy feedback: Button transitions from near-black pill `[ Copy Citation ]` to subtle green state `[ Copied to Clipboard ✓ ]` for 2 seconds.

---

## 5. Component Hierarchy & Module Architecture

### 5.1 Project Directory Structure
```
janesdiary/
├── .github/
│   └── workflows/
│       └── deploy.yml                      # GitHub Pages Automated CI/CD
├── content/
│   └── posts/                              # 5 MDX Cornerstone Essays
│       ├── 01-madwoman-to-glitch.mdx
│       ├── 02-subaltern-body-battlefield.mdx
│       ├── 03-room-of-ones-own-digital.mdx
│       ├── 04-speculative-wombs-utopia.mdx
│       └── 05-reclaiming-the-monster.mdx
├── public/
│   ├── audio/                              # Compressed loopable ambient audio (.mp3)
│   │   ├── victorian-rain.mp3
│   │   └── cyber-drone.mp3
│   ├── data/
│   │   ├── graph.json                      # Constellation nodes & links
│   │   ├── marginalia.json                 # Pre-seeded scholarly annotations
│   │   └── search-index.json               # Build-time generated search index
│   └── images/                             # Archival imagery & diagrams
├── scripts/
│   └── generate-search-index.mjs           # Node script extracting post metadata for Fuse.js
├── src/
│   ├── app/
│   │   ├── layout.tsx                      # Root Layout (TopNav, AudioPlayer, EvaluatorDrawer)
│   │   ├── page.tsx                        # Landing Page (Hero, Constellation, Essay Grid)
│   │   ├── essays/
│   │   │   └── [slug]/
│   │   │       └── page.tsx                # Static MDX Essay Page (generateStaticParams)
│   │   ├── constellation/
│   │   │   └── page.tsx                    # Dedicated Fullscreen Constellation Explorer
│   │   ├── methodology/
│   │   │   └── page.tsx                    # Digital Humanities Methodology & Curatorial Statement
│   │   └── not-found.tsx                   # 404 Page (Styled in ElevenLabs aesthetic)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx                  # ElevenLabs Pill Button (Primary, Outline, Ghost)
│   │   │   ├── Badge.tsx                   # Uppercase Pill Badge
│   │   │   ├── Card.tsx                    # 16px/24px rounded card with hairline & soft drop
│   │   │   └── GradientOrb.tsx             # Pastel atmospheric radial gradient component
│   │   ├── layout/
│   │   │   ├── TopNav.tsx                  # Fixed 64px header with wordmark & drawer button
│   │   │   ├── Footer.tsx                  # Editorial 5-column footer
│   │   │   ├── EvaluatorDrawer.tsx         # Slide-over DA Rubric & Student Metadata
│   │   │   └── CommandPalette.tsx          # Cmd+K Fuse.js Search Modal
│   │   ├── interactive/
│   │   │   ├── ConstellationGraph.tsx      # 2D D3/Canvas Network Graph
│   │   │   ├── SubtextReveal.tsx           # Critical Lens text-morphing component
│   │   │   ├── LiteraryRadar.tsx           # 5-Axis SVG Spider Chart
│   │   │   ├── LivingMargins.tsx           # Selection highlighter & marginalia column
│   │   │   ├── AudioAmbientPill.tsx        # Floating Web Audio controller pill
│   │   │   ├── ReadingProgress.tsx         # Sticky scroll-depth tracker
│   │   │   └── CitationBox.tsx             # 1-Click MLA/APA citation generator
│   │   └── mdx/
│   │       ├── MdxComponents.tsx           # Custom MDX component mappings (Blockquote, DropCap)
│   │       └── SplitComparative.tsx        # Side-by-side textual comparative component
│   ├── context/
│   │   ├── CriticalLensContext.tsx         # Global subtext reveal state manager
│   │   └── AudioContext.tsx                # Global ambient audio playback state
│   ├── hooks/
│   │   ├── useLocalStorage.ts              # SSR-safe LocalStorage hook for annotations
│   │   └── useKeyboardShortcut.ts          # Cmd+K & Esc hotkey listeners
│   ├── lib/
│   │   ├── mdx.ts                          # MDX reader, frontmatter parser & slug extractor
│   │   ├── utils.ts                        # Classnames merge & subpath URL helper
│   │   └── storage.ts                      # Client-side annotation serialization
│   └── styles/
│       └── globals.css                     # Font declarations, Tailwind directives & print rules
├── next.config.mjs                         # Next.js 15 Static Export & Subpath Config
├── tailwind.config.ts                      # ElevenLabs tokens & typography setup
├── tsconfig.json
└── package.json
```

### 5.2 Component Hierarchy Diagram
```
RootLayout (src/app/layout.tsx)
 ├── TopNav (src/components/layout/TopNav.tsx)
 │    ├── Logo & Sub-Badge
 │    ├── NavLinks
 │    ├── CommandPaletteTrigger (⌘K Pill)
 │    └── EvaluatorDrawerTrigger (DA Info & Rubric [26BCE1820])
 ├── CommandPalette (src/components/layout/CommandPalette.tsx) [Modal Portal]
 ├── EvaluatorDrawer (src/components/layout/EvaluatorDrawer.tsx) [Slide-Over Portal]
 ├── AudioAmbientPill (src/components/interactive/AudioAmbientPill.tsx) [Floating Bottom Portal]
 │
 ├── Page Content:
 │    │
 │    ├── Case 1: Landing Page (src/app/page.tsx)
 │    │    ├── HeroBand
 │    │    │    └── GradientOrb (Mint / Sky atmospheric bloom)
 │    │    ├── ConstellationSection
 │    │    │    ├── EraFilterPillRow
 │    │    │    └── ConstellationGraph (D3 / Canvas 2D)
 │    │    ├── FeaturedEssaysSection
 │    │    │    └── EssayCard Grid (5 cornerstone cards + mini radar preview)
 │    │    └── ArchiveMetricsBand
 │    │
 │    └── Case 2: Essay Reading Page (src/app/essays/[slug]/page.tsx)
 │         ├── ReadingProgressBar (Sticky top)
 │         ├── EssayHeader
 │         │    ├── EraBadgePill
 │         │    ├── Title & Subtitle (Display-XL 48px, 300 wt)
 │         │    ├── MetadataRow (Author, Reading Time, Date)
 │         │    └── LiteraryRadar (5-Axis SVG Spider Chart)
 │         ├── ReadingControlsBar (Critical Lens Switch, Font Scaler)
 │         ├── EditorialGrid (2-column desktop / 1-column mobile)
 │         │    ├── MainReadingColumn (MDX compiled prose)
 │         │    │    ├── DropCap
 │         │    │    ├── SubtextReveal (Interactive critical lens morphing)
 │         │    │    ├── SplitComparative (e.g. 1929 vs 2026 economic matrix)
 │         │    │    └── ScholarlyBlockquote
 │         │    └── LivingMarginsColumn
 │         │         ├── PreSeededAnnotationCard (marginalia.json)
 │         │         ├── UserAnnotationCard (localStorage)
 │         │         └── SelectionPopover ("Annotate Margin")
 │         ├── CitationBox (1-Click MLA 9th / APA 7th copy)
 │         └── PostNavigationCards (Prev / Next links)
 │
 └── Footer (src/components/layout/Footer.tsx)
```

---

## 6. GitHub Pages Static Generation Architecture & Subpath Pipeline

### 6.1 Next.js 15 Configuration (`next.config.mjs`)
Deploying an interactive Next.js application to GitHub Pages under the repository subpath `/janesdiary` requires strict build-time configuration:

```javascript
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/janesdiary' : '';

const nextConfig = {
  output: 'export',                      // 100% static HTML/JS export into /out
  basePath: basePath,                    // Prefixes routing with repo name
  assetPrefix: basePath,                 // Prefixes static JS/CSS assets
  trailingSlash: true,                   // Ensures static pages export as /essays/[slug]/index.html
  images: {
    unoptimized: true,                   // Required: GitHub Pages lacks Node image server
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;
```

### 6.2 Universal Subpath Asset Resolution Helper (`src/lib/utils.ts`)
To prevent broken audio loops, images, and JSON fetches when switching between local development (`http://localhost:3000/`) and GitHub Pages (`https://wwwrryyy.github.io/janesdiary/`), all asset paths pass through a single resolver:

```typescript
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
```

### 6.3 Static Slugs & Pre-rendering (`generateStaticParams`)
In `src/app/essays/[slug]/page.tsx`, Next.js pre-compiles all 5 cornerstone essays at build time:
```typescript
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 6.4 Build-Time Search Index Generation (`scripts/generate-search-index.mjs`)
Run as a pre-build step before `next build` in `package.json`:
- Reads all `.mdx` files in `/content/posts/`.
- Extracts frontmatter, headings, keywords, and core quotes.
- Merges with `/public/data/marginalia.json`.
- Writes compressed `/public/data/search-index.json`.

### 6.5 Automated GitHub Actions CI/CD Pipeline (`.github/workflows/deploy.yml`)
1. Checks out repository `wwwrryyy/janesdiary`.
2. Sets up Node.js 20 with `npm` caching.
3. Installs dependencies via `npm ci`.
4. Executes `npm run build` (outputs to `/out`).
5. **Critical Jekyll Bypass:** Injects empty `.nojekyll` file into `./out/.nojekyll` (ensures GitHub Pages does not ignore `_next/` static JS/CSS bundles).
6. Uploads static artifact and deploys directly to GitHub Pages Edge environment.

---

## 7. The 5 Curated Cornerstone Analyses: Thematic Blueprint

The archive curates five exhaustive scholarly analyses bridging two centuries of feminist literary history:

| Slug | Title | Analyzed Texts | Theory & Wave | Core Interactive Component |
|---|---|---|---|---|
| `01-madwoman-to-glitch` | **The Madwoman in the Attic vs. The Glitch in the Machine** | Charlotte Perkins Gilman (*The Yellow Wallpaper*, 1892) & Donna Haraway (*A Cyborg Manifesto*, 1985) | 1st-Wave Victorian Gothic to 3rd-Wave Cyberfeminism | `SubtextReveal` morphs Victorian physician "rest cure" domestic confinement into Haraway's boundary-destroying cyborg hybridity. |
| `02-subaltern-body-battlefield` | **Subaltern Voices & The Body as a Battlefield** | Mahasweta Devi (*Draupadi*, 1978, Spivak translation) & Arundhati Roy (*The God of Small Things*, 1997) | Postcolonial & Dalit/Subaltern Feminism | Historical timeline slider tracing the commodification and weaponization of female subaltern bodies in postcolonial India. |
| `03-room-of-ones-own-digital` | **A Room of One's Own in the Algorithm Economy** | Virginia Woolf (*A Room of One's Own*, 1929) | Materialist & Modernist Feminism | `SplitComparative` table contrasting Woolf's 1929 requirement of "£500 a year and a room of one's own" with the 2026 digital creator economy. |
| `04-speculative-wombs-utopia` | **Speculative Wombs & Dystopian Blueprints** | Begum Rokeya Sakhawat Hossain (*Sultana's Dream*, 1905) & Margaret Atwood (*The Handmaid's Tale*, 1985) | Anti-Colonial Utopianism vs. Dystopian Biopolitics | Split-screen comparative lens examining female-governed Ladyland against Gilead's reproductive servitude. |
| `05-reclaiming-the-monster` | **Reclaiming the Monster: Creation Anxiety & Female Autonomy** | Mary Shelley (*Frankenstein*, 1818) & Sylvia Plath (*Ariel*, 1965) | Romantic Proto-Feminism & Confessional Poetics | Intertextual double-lens exploring maternal trauma, creation anxiety, and poetic monstrousness as patriarchal resistance. |

---

## 8. Architectural Tradeoffs, Risks & User Clarifications

The following architectural decisions have been evaluated, with specific questions surfaced for user confirmation:

### 8.1 Tradeoff Matrix

| Area | Option A | Option B (Selected Blueprint) | Architectural Rationale |
|---|---|---|---|
| **Graph Viz Engine** | SVG DOM tree (`react-force-graph` SVG) | **HTML5 Canvas 2D (`d3-force` / Canvas)** | Canvas maintains smooth 60fps rendering during pan/zoom on mobile devices with high node/edge counts; SVG drops frames under animation. |
| **MDX Compiler** | Runtime client-side MDX (`next-mdx-remote`) | **Build-time Static MDX (`velite` / compiled MDX bundle)** | Build-time compilation guarantees 0ms server latency, zero client compiler runtime weight, and 100% reliability on GitHub Pages static edge. |
| **Typography Substitution** | Proprietary Waldenburg font files | **Google Fonts `EB Garamond` 300 / `Newsreader`** | Waldenburg is a licensed font. `EB Garamond` at `fontWeight: 300` perfectly replicates the light editorial magazine signature without copyright liability or web-font licensing blocks. |
| **Reader Notes Storage** | Cloud Database (Supabase / Firebase) | **LocalStorage + Markdown/JSON Export** | Satisfies strict PRD requirement for **100% Zero-Backend** GitHub Pages deployment. 1-click export allows readers and evaluators to download and submit their annotations. |
| **Audio Playback** | Background autoplay on page load | **Explicit User Pill Interaction with Smooth Fade** | Modern web browsers (Safari, Chrome) strictly block unprompted audio autoplay. The floating pill player honors web audio policies while providing refined 1.5s volume ramps. |

### 8.2 Confirmed Architecture Decisions (Approved by User)
1. **Editorial Display Typography:** Confirmed Google Fonts **`EB Garamond`** strictly configured at **`fontWeight: 300`** with negative tracking (`-1.92px` to `-0.32px`). Replicates ElevenLabs' signature light editorial serif with zero licensing friction and optimal web font delivery.
2. **Marginalia & Commentary System:** Confirmed **100% Zero-Backend** architecture. Ships with pre-seeded scholarly notes (`/public/data/marginalia.json`) + browser `localStorage` note highlighter and 1-click Markdown/JSON export for assignment grading proof without third-party comment dependencies.
3. **Constellation Dataset Scope:** Confirmed **Focused Canon** of the 14 core authors and primary thematic lineages directly featured across the 5 cornerstone essays, ensuring every node and edge connects seamlessly to real analysis within the platform.

---
*Blueprint formulated in strict accordance with `PRD.md` and `~/.agents/design-md/design-md/elevenlabs/DESIGN.md`.*
