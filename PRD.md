Product Requirements Document (PRD) & System Architecture
Document Metadata	Details
Project Title	Jane's Diary: An Interactive Archive of Feminist Literature
Author	Shawn Shaibu Cherian (26BCE1820)
Institution	Vellore Institute of Technology (VIT), Chennai
Deliverable Type	Digital Assignment (DA) — Interactive Web Platform
Deployment Target	GitHub Pages ([https://wwwrryyy.github.io/janesdiary/](https://wwwrryyy.github.io/janesdiary/))
Architecture Pattern	100% Static Site Generation (SSG) + Client-Side Hydration (Zero-Backend)
Document Version	v2.0 (Final Release Specification)
1. Executive Summary & Vision
Jane's Diary is a static, high-performance interactive web platform engineered to elevate literary analysis beyond conventional text-heavy blogs. Named after the historical practice of scraping off manuscript pages to write anew—a foundational metaphor in feminist literary criticism (popularized by Sandra Gilbert and Susan Gubar) for uncovering women's erased literary voices—this platform combines deep academic research on Feminist Literature with interactive visual mechanics.
Hosted entirely on GitHub Pages for zero-latency evaluation and 100% uptime, the platform leverages MDX (Markdown + Embedded JSX), client-side state hydration, interactive force-directed data visualization, and Web APIs to let readers physically peel back textual layers, explore intertextual connections across eras, and engage with scholarly marginalia.
2. Target Audience & User Personas
1. The Academic Evaluator (Professor / Faculty): ⚬ Needs: Clear adherence to the Digital Assignment rubric, original thematic insights, proper academic citations (MLA 9th), zero broken links, fast page loads, and immediate visibility of student metadata. ⚬ Pain Point Solved: Eliminates generic WordPress/Medium templates and slow cold-start servers; provides a dedicated "Evaluator Drawer" for 1-click access to rubric criteria and bibliography.
2. The Literary Explorer (Peer / Student Reader): ⚬ Needs: Engaging, interactive breakdowns of dense literary theories (First-Wave through Cyberfeminism and Postcolonial Subaltern studies) without drowning in walls of unformatted text. ⚬ Pain Point Solved: Replaces passive scrolling with interactive text x-rays, visual network graphs, and tactile margin annotations.
3. Core Interactive Features (Product Scope)
3.1 "Subtext Uncovered" (Interactive Text X-Ray)
⚬ Description: Feminist authors historically wrote under patriarchal censorship or strict Victorian/colonial social codes, embedding radical subtext beneath polite prose.
⚬ User Experience: Inside any essay, readers can toggle a global or inline "Critical Lens" switch. When toggled, highlighted passages smoothly morph (via Framer Motion) or expand inline to contrast the Literal Surface Text with the Feminist / Psychoanalytic Subtext.
3.2 The Intersectional Constellation (2D Force-Directed Graph)
⚬ Description: An interactive network visualization on the landing page mapping how feminist authors, movements, and tropes connect across centuries and geographies.
⚬ User Experience: Built using D3.js / react-force-graph-2d reading from a static /data/graph.json bundle. Nodes represent authors (e.g., Virginia Woolf, Mahasweta Devi, Donna Haraway) and themes (e.g., Gothic Confinement, Bodily Autonomy). Clicking a node highlights its historical lineage and filters the blog archive to relevant essays.
3.3 "Living Margins" (Hybrid Static + LocalStorage Marginalia)
⚬ Description: Recreates the scholarly intimacy of reading a heavily annotated physical book passed between readers.
⚬ User Experience: ⚬ Pre-Seeded Scholarly Notes: Every article ships with pre-baked annotations stored in /data/marginalia.json anchored to specific paragraphs, explaining literary devices (irony, gothic doubling, stream-of-consciousness). ⚬ Interactive Reader Notes: Users can highlight any quote in the browser (Window.getSelection()), click "Annotate Margin", and pin their own commentary. New notes persist locally via window.localStorage (with a 1-click "Export Notes as JSON/Markdown" button for grading proof) alongside an optional Giscus (GitHub Discussions) integration at the bottom of each post.
3.4 The Literary Radar (Dynamic MDX Metadata Chart)
⚬ Description: A quantitative visual summary at the header of every literary analysis post.
⚬ User Experience: Renders an interactive SVG Radar/Spider Chart evaluating the analyzed literary work across 5 dimensions: Female Agency, Intersectional Depth, Subversion of Tropes, Historical Impact, and Structural Innovation.
3.5 Era-Matched Web Audio Soundscapes
⚬ Description: An optional, minimalist ambient audio controller in the bottom navigation bar.
⚬ User Experience: Uses native HTML5 Audio / Web Audio API to play subtle, loopable ambient textures tailored to the essay's setting (e.g., 19th-century rain and quill scratches for The Yellow Wallpaper; low-fi cybernetic synth drone for A Cyborg Manifesto).
3.6 "Evaluator Mode" Drawer (DA Grading Accelerator)
⚬ Description: A persistent badge in the top navigation bar labeled DA Info & Rubric [26BCE1820].
⚬ User Experience: Clicking opens a slide-over drawer displaying student details, project objectives, an interactive checklist of all literary eras covered, a consolidated Works Cited list, and a button to trigger a clean window.print() stylesheet formatted like an academic journal.
4. Curated Content Architecture (The 5 Cornerstone Essays)
Post ID / Slug	Essay Title	Primary Literary Works Analyzed	Feminist Wave / Theory	Interactive MDX Component Used
01-madwoman-to-glitch	The Madwoman in the Attic vs. The Glitch in the Machine	Charlotte Perkins Gilman’s The Yellow Wallpaper (1892) & Donna Haraway’s A Cyborg Manifesto (1985)	1st-Wave Gothic to 3rd-Wave Cyberfeminism	+ Era Audio Switcher
02-subaltern-body-battlefield	Subaltern Voices & The Body as a Battlefield	Mahasweta Devi’s Draupadi (1978, trans. Gayatri Spivak) & Arundhati Roy’s The God of Small Things (1997)	Postcolonial & Dalit/Subaltern Feminism	+ Historical Timeline Slider
03-room-of-ones-own-digital	A Room of One's Own in the Algorithm Economy	Virginia Woolf’s A Room of One's Own (1929)	Materialist & Modernist Feminism	(Compares 1929 Â£500/yr to 2026 creator economics)
04-speculative-wombs-utopia	Speculative Wombs & Dystopian Blueprints	Rokeya Sakhawat Hossain’s Sultana’s Dream (1905) & Margaret Atwood’s The Handmaid’s Tale (1985)	Feminist Utopian / Dystopian Speculative Fiction	(Ladyland vs. Gilead split-screen)
05-reclaiming-the-monster	Reclaiming the Monster: Creation Anxiety & Female Autonomy	Mary Shelley’s Frankenstein (1818) & Sylvia Plath’s Ariel (1965)	Romantic Proto-Feminism & Confessional Poetics	+
5. Functional & Non-Functional Requirements
5.1 Functional Requirements (FR)
⚬ FR-01 (Static MDX Compilation): All essays must be authored in .mdx format and compiled at build time into static HTML/JS bundles compatible with GitHub Pages.
⚬ FR-02 (Client-Side Fuzzy Search): Implement a Cmd+K / Ctrl+K command palette powered by Fuse.js searching across a static build-time index (search-index.json) by author, era, book title, or literary trope.
⚬ FR-03 (One-Click MLA/APA Citation Generator): Every article footer must feature a citation box allowing users to toggle between MLA 9th and APA 7th formats and copy to clipboard with visual feedback.
⚬ FR-04 (Typography & Accessibility Controls): Readers must be able to switch between three reading themes (Archival Parchment, Midnight Ink, and High-Contrast Paper) and adjust font scaling.
⚬ FR-05 (Subpath Asset Resolution): All internal links, images, and JSON fetches must dynamically respect the GitHub Pages repository subpath (/janesdiary).
5.2 Non-Functional Requirements (NFR)
⚬ NFR-01 (Zero Backend Dependency): The platform must require zero active database servers or paid cloud dynos; 100% of functionality must execute via static assets on GitHub Pages CDN and browser APIs.
⚬ NFR-02 (Performance): Google Lighthouse Performance, Accessibility, and Best Practices scores \ge 95. First Contentful Paint (FCP) < 0.6\text{ seconds}.
⚬ NFR-03 (Responsive Design): Full layout adaptability from 15-inch desktop screens (featuring side-by-side marginalia columns) down to mobile viewports (where marginalia collapses into inline tap-popovers).
6. UI/UX & Editorial Design System
⚬ Aesthetic Direction: "Neo-Archival Editorial"—inspired by The Paris Review, Penguin Classics typography, and digital humanities labs.
⚬ Color Palette: ⚬ Primary Background (Parchment Mode): #FAF6F0 (Warm Archival Paper) ⚬ Secondary Surface: #F1ECE1 (Muted Linen) ⚬ Primary Ink (Text): #181615 (Deep Charcoal Ink) ⚬ Primary Accent: #8B1E24 (Oxblood / Crimson — symbolizing red-ink editorial marginalia) ⚬ Secondary Accent: #4A2545 (Suffragette Violet) ⚬ Dark Mode Background (Midnight Ink): #121110 with #E6E1DA text and #D94E56 accents.
⚬ Typography: ⚬ Headings & Pull Quotes: Cormorant Garamond or Playfair Display (Serif, high-contrast literary elegance). ⚬ Body Copy: Newsreader or Source Serif 4 (Optimized for long-form digital reading). ⚬ UI Controls, Metadata & Code/Citations: Fira Code (Monospace precision for tags, dates, and rubric drawer).
7. System Architecture (GitHub Pages Static Pipeline)
7.1 High-Level Architecture Diagram
+-----------------------------------------------------------------------------------+
|                      1. SOURCE REPOSITORY (GitHub: wwwrryyy)                      |
|  ├── /content/posts/*.mdx          (5 Cornerstone Essays + Inline JSX Tags)       |
|  ├── /public/data/graph.json       (Constellation Nodes & Edges)                  |
|  ├── /public/data/marginalia.json  (Pre-seeded Scholarly Margin Notes)            |
|  ├── /src/components/interactive/  (SubtextReveal, RadarChart, Constellation)     |
|  └── /.github/workflows/deploy.yml (Automated CI/CD Pipeline)                     |
+-----------------------------------------+-----------------------------------------+
                                          | git push origin main
                                          v
+-----------------------------------------------------------------------------------+
|                      2. BUILD & COMPILATION TIER (GitHub Actions)                 |
|  ├── Next.js 15 (`output: 'export'`) Static Compiler                              |
|  ├── MDX Bundler (`next-mdx-remote` / `velite`) -> Compiles MDX to Static HTML/JS |
|  ├── Pre-build Script -> Generates `/public/data/search-index.json` for Fuse.js   |
|  └── Injects `.nojekyll` into `/out` directory to preserve `/_next` static assets |
+-----------------------------------------+-----------------------------------------+
                                          | Uploads `/out` Artifact
                                          v
+-----------------------------------------------------------------------------------+
|                      3. CDN & HOSTING TIER (GitHub Pages Edge)                    |
|                URL: https://wwwrryyy.github.io/janesdiary/                    |
+-----------------------------------------+-----------------------------------------+
                                          | HTTPS Static Delivery
                                          v
+-----------------------------------------------------------------------------------+
|                      4. CLIENT RUNTIME (Evaluator & Reader Browser)               |
|  ├── React 19 Hydration: Activates interactive MDX components inline              |
|  ├── D3 / Canvas Engine: Renders interactive 2D Force Graph at 60fps              |
|  ├── Marginalia Controller: Merges `marginalia.json` + Browser `localStorage`     |
|  ├── Fuse.js Engine: Executes 0ms client-side fuzzy search (`Cmd+K`)              |
|  └── Print Stylesheet Engine: Formats active DOM into Academic PDF via `Cmd+P`    |
+-----------------------------------------------------------------------------------+

7.2 Project Directory Structure
janesdiary/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # Automated GitHub Pages CI/CD workflow
├── content/
│   └── posts/                         # The 5 MDX Feminist Literature essays
│       ├── 01-madwoman-to-glitch.mdx
│       ├── 02-subaltern-body-battlefield.mdx
│       ├── 03-room-of-ones-own-digital.mdx
│       ├── 04-speculative-wombs-utopia.mdx
│       └── 05-reclaiming-the-monster.mdx
├── public/
│   ├── audio/                         # Compressed ambient .mp3/.ogg loops
│   ├── data/
│   │   ├── graph.json                 # Intersectional Constellation dataset
│   │   ├── marginalia.json            # Pre-seeded scholarly margin notes
│   │   └── search-index.json          # Auto-generated build-time search index
│   └── images/                        # Archival book covers & manuscript scans
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Global Navbar, Evaluator Drawer, Audio Player
│   │   ├── page.tsx                   # Hero, Constellation Graph, Essay Grid
│   │   └── essays/
│   │       └── [slug]/
│   │           └── page.tsx           # Static Essay Renderer (`generateStaticParams`)
│   ├── components/
│   │   ├── interactive/
│   │   │   ├── ConstellationGraph.tsx # D3 Force-Directed Network
│   │   │   ├── SubtextReveal.tsx      # Critical Lens Text-Morphing Component
│   │   │   ├── LiteraryRadar.tsx      # 5-Axis SVG Spider Chart
│   │   │   ├── LivingMargins.tsx      # Selection Popover + Margin Column
│   │   │   └── CitationBox.tsx        # 1-Click MLA 9th / APA 7th Generator
│   │   └── layout/
│   │       ├── EvaluatorDrawer.tsx    # DA Rubric & Metadata Slide-over
│   │       └── CommandPalette.tsx     # Cmd+K Fuse.js Search Modal
│   └── lib/
│       ├── mdx.ts                     # Static MDX file reader & frontmatter parser
│       └── storage.ts                 # LocalStorage wrapper for user annotations
├── next.config.mjs                    # Configured with `output: 'export'` & `basePath`
├── tailwind.config.ts                 # Editorial color tokens & typography setup
└── package.json

8. Data Schemas (Static JSON Contracts)
8.1 MDX Frontmatter Contract (/content/posts/*.mdx)
---
title: "The Madwoman in the Attic vs. The Glitch in the Machine"
subtitle: "Tracing female confinement and rebellion from 19th-century Gothic domesticity to 20th-century Cyberfeminism."
slug: "01-madwoman-to-glitch"
publishedAt: "2026-10-19"
readingTime: "8 min read"
era: "1st-Wave Gothic to Cyberfeminism"
primaryWorks:
  - title: "The Yellow Wallpaper"
    author: "Charlotte Perkins Gilman"
    year: 1892
  - title: "A Cyborg Manifesto"
    author: "Donna Haraway"
    year: 1985
radarScores:
  agency: 9
  intersectionality: 8
  subversion: 10
  historicalImpact: 10
  structuralInnovation: 9
mlaCitation: "Cherian, Shawn Shaibu. 'The Madwoman in the Attic vs. The Glitch in the Machine.' Jane's Diary: An Interactive Archive of Feminist Literature, 19 Oct. 2026, wwwrryyy.github.io/janesdiary/essays/01-madwoman-to-glitch."
ambientTrack: "/audio/victorian-rain-to-synth.mp3"
---

8.2 Marginalia Data Contract (/public/data/marginalia.json)
{
  "01-madwoman-to-glitch": [
    {
      "id": "sch-01",
      "paragraphIndex": 3,
      "highlightedQuote": "I personally believe that congenial work, with excitement and change, would do me good.",
      "author": "Shawn Cherian (Author's Note)",
      "tag": "Biographical Criticism",
      "comment": "Gilman directly critiques Dr. Silas Weir Mitchell's 'Rest Cure,' which forbade women diagnosed with 'neurasthenia' from touching a pen or brush—effectively criminalizing female intellectual labor.",
      "timestamp": "2026-10-19"
    }
  ]
}

9. Deployment & Verification Checklist (Definition of Done)
1. Static Export Validation: Run npm run build locally and verify that Next.js outputs a static /out folder containing HTML files for all 5 essay slugs via generateStaticParams().
2. Jekyll Bypass Verification: Confirm .github/workflows/deploy.yml creates ./out/.nojekyll so GitHub Pages serves /_next/static/* CSS and JS bundles without 404 errors.
3. Subpath Routing Check: Ensure all <Link> components and static <img> / JSON fetch paths resolve properly under /janesdiary/....
4. Evaluator Mode Test: Open the live GitHub Pages URL in an Incognito window, open the DA Info & Rubric drawer, test the Critical Lens toggle inside an essay, add a test margin note, and verify 1-click MLA citation copying.
