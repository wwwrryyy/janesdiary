# Jane's Diary: An Interactive Archive of Feminist Literature

**Author:** Shawn Shaibu Cherian (26BCE1820)  
**Institution:** Vellore Institute of Technology (VIT), Chennai  
**Deliverable:** Digital Assignment (DA) — Advanced English / Digital Humanities  
**Deployment Target:** GitHub Pages (`https://wwwrryyy.github.io/janesdiary/`)  
**Design Identity:** ElevenLabs Editorial Design Specification (`~/.agents/design-md/design-md/elevenlabs/DESIGN.md`)  
**Architecture:** 100% Static Site Generation (SSG) + Client-Side Hydration (Zero-Backend)  

---

## 1. Executive Summary & Vision

*Jane's Diary* is an interactive digital humanities archive examining the historical suppression, domestic confinement, and subtextual rebellion of women writers across two centuries. 

Named after the ancient practice of the **palimpsest**—parchment scraped clean to write anew, a foundational metaphor in feminist literary criticism (Gilbert & Gubar, Spivak, Woolf) for uncovering women's erased voices—the platform elevates literary analysis into an interactive, multi-sensory web experience.

Hosted entirely on GitHub Pages with **0ms server latency and 100% uptime**, the platform combines deep academic research with interactive visual mechanics:
- **Display Typography at Weight 300:** Editorial light serif display (`EB Garamond` surrogate for Waldenburg Light) with refined negative tracking (`-0.32px` to `-1.92px`).
- **Atmospheric Pastel Gradient Orbs:** Drifting radial orbs (Mint `#a7e5d3`, Peach `#f4c5a8`, Lavender `#c8b8e0`, Sky `#a8c8e8`, Rose `#e8b8c4`) providing atmospheric brand depth without chromatic clutter.
- **Pill Interaction Geometry:** Near-black ink pill buttons (`#292524`, 40px height, `rounded-full`) and uppercase badges.

---

## 2. Interactive Features Suite

### 2.1 "Subtext Uncovered" (Critical Lens Text-Morphing Engine)
Feminist authors historically wrote under strict patriarchal censorship and domestic surveillance, embedding radical subtext beneath polite prose. Readers can toggle an inline or global "Critical Lens" switch to morph literal Victorian prose into decoded psychoanalytic, Marxist, or postcolonial subtexts via smooth Framer Motion transitions.

### 2.2 The Intersectional Constellation (2D Force-Directed Network)
An interactive Canvas 2D force-directed network mapping 14 core authors (Charlotte Perkins Gilman, Donna Haraway, Mahasweta Devi, Gayatri Spivak, Arundhati Roy, Virginia Woolf, Begum Rokeya, Margaret Atwood, Mary Shelley, Sylvia Plath, Gilbert & Gubar, Simone de Beauvoir, Audre Lorde) and 23 intertextual lineages across centuries. Features real-time physics, era filter chips, ego-network highlighting, and essay links.

### 2.3 "Living Margins" (Hybrid Scholarly + LocalStorage Marginalia)
Recreates the intimacy of physical library books with handwritten margin annotations:
- **Pre-Seeded Scholarly Notes:** Build-time commentary anchored to paragraph indexes.
- **Reader Personal Notes:** Highlight any passage in the browser (`window.getSelection()`) to pin custom annotations. Persists locally in `window.localStorage` with a 1-click **Export Notes as Markdown / JSON** button for academic grading submission.

### 2.4 The Literary Radar (5-Axis SVG Spider Chart)
A quantitative visual summary evaluating analyzed texts across 5 critical dimensions:
1. *Female Agency*
2. *Intersectional Depth*
3. *Subversion of Tropes*
4. *Historical Impact*
5. *Structural Innovation*

### 2.5 Generative Ambient Audio Pill Player
A floating pill audio controller utilizing the browser's native **Web Audio API** to dynamically synthesize soothing, loopable era-matched textures (Victorian rain & quill scratches, cybernetic sub-bass drone) with zero external audio assets.

### 2.6 Evaluator Drawer (Digital Assignment Grading Accelerator)
A persistent pill badge in the top navigation bar labeled `DA Info & Rubric [26BCE1820]`. Clicking opens a slide-over sheet containing student metadata, an interactive rubric compliance checklist, a consolidated Works Cited bibliography (MLA 9th), and an **Academic Print PDF (`Cmd+P`)** button.

### 2.7 1-Click MLA 9th & APA 7th Citation Generator
Every essay concludes with an academic citation box allowing readers and evaluators to toggle between MLA 9th and APA 7th standards and copy formatted citations with instant clipboard feedback.

---

## 3. The 5 Curated Cornerstone Analyses

| Slug | Title | Primary Works Analyzed | Theoretical Framework |
|---|---|---|---|
| `01-madwoman-to-glitch` | **The Madwoman in the Attic vs. The Glitch in the Machine** | Charlotte Perkins Gilman's *The Yellow Wallpaper* (1892) & Donna Haraway's *A Cyborg Manifesto* (1985) | 1st-Wave Gothic Confinement to 3rd-Wave Cyberfeminism |
| `02-subaltern-body-battlefield` | **Subaltern Voices & The Body as a Battlefield** | Mahasweta Devi's *Draupadi* (1978, Spivak trans.) & Arundhati Roy's *The God of Small Things* (1997) | Postcolonial & Dalit/Subaltern Feminism |
| `03-room-of-ones-own-digital` | **A Room of One's Own in the Algorithm Economy** | Virginia Woolf's *A Room of One's Own* (1929) | Materialist & Modernist Feminism (1929 £500/yr vs 2026 digital creator precarity) |
| `04-speculative-wombs-utopia` | **Speculative Wombs & Dystopian Blueprints** | Begum Rokeya Sakhawat Hossain's *Sultana's Dream* (1905) & Margaret Atwood's *The Handmaid's Tale* (1985) | Anti-Colonial Techno-Utopianism vs. Theocratic Biopolitics |
| `05-reclaiming-the-monster` | **Reclaiming the Monster: Creation Anxiety & Female Autonomy** | Mary Shelley's *Frankenstein* (1818) & Sylvia Plath's *Ariel* (1965) | Romantic Proto-Feminism & Confessional Monstrous Poetics |

---

## 4. Local Development & Verification

### Prerequisites
- Node.js >= 18.18.0 (Tested on Node.js v26.3.0)
- npm >= 9.0.0

### Commands
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Generate Fuse.js search index & compile static export
npm run build
```

Upon running `npm run build`, Next.js compiles all pages into the `/out` directory ready for 1-click deployment to GitHub Pages.

---
*Authored by Shawn Shaibu Cherian (26BCE1820) for Advanced English / Digital Humanities at VIT Chennai.*
