# Jane's Diary (`janesdiary`)

**An Interactive Archive of Feminist Literature**  
**Author:** Shawn Shaibu Cherian (`26BCE1820`)  
**Institution:** Vellore Institute of Technology (VIT), Chennai  
**Deliverable:** English Digital Assignment (DA)  
**Live Deployment URL:** [https://wwwrryyy.github.io/janesdiary/](http://wwwrryyy.github.io/janesdiary/)

---

## 1. Quick Start (Local Development)

Both development and production use the exact same `/janesdiary/` base path so links and assets always match GitHub Pages:

```bash
# Install dependencies
npm install

# Start the development server at http://localhost:4321/janesdiary/
npm run dev

# Type-check all Astro & TypeScript files
npm run check

# Build static production output into ./dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 2. How to Write Your Original Essays

Because this is graded university coursework, all essay bodies and critical subtext readings are set up with clearly marked placeholders for you to replace with your own prose:

1. **Main Essay Prose (Markdown)**:
   Edit the five Markdown files in `src/content/essays/`:
   - `src/content/essays/01-madwoman-to-glitch.md` (*The Yellow Wallpaper* & *A Cyborg Manifesto*)
   - `src/content/essays/02-subaltern-body-battlefield.md` (*Draupadi* & *The God of Small Things*)
   - `src/content/essays/03-room-of-ones-own-digital.md` (*A Room of One's Own*)
   - `src/content/essays/04-speculative-wombs-utopia.md` (*Sultana's Dream* & *The Handmaid's Tale*)
   - `src/content/essays/05-reclaiming-the-monster.md` (*Frankenstein* & *Ariel*)

2. **Interactive Critical Lens Passages & Section Prompts**:
   Edit `src/data/entries.ts` to replace the `[Critical Lens Analysis Placeholder ...]` and `[Primary Quote Placeholder ...]` fields with your own fair-use quotations (with page citations) and subtextual readings.
   - Public-domain works (Gilman 1892, Shelley 1818, Hossain 1905) already include verified verbatim primary excerpts.
   - Copyrighted twentieth-century works (Haraway, Devi/Spivak, Roy, Woolf, Atwood, Plath) have fair-use quotation placeholders ready for your selected passages.

---

## 3. Interactive Features

1. **"By a Lady" Byline Reveal (`/janesdiary/#bylines`)**:
   Interactive cards showing how six canonical works by women (Jane Austen, Mary Shelley, Charlotte Brontë, Emily Brontë, Anne Brontë, and Mary Ann Evans / George Eliot) were originally published under male pseudonyms or anonymity. Click any card—or **Flip All Bylines**—to reveal the author and historical publishing context.
2. **Critical Lens Toggle (`/janesdiary/entries/<slug>/`)**:
   Switch individual passages—or the entire essay via the sticky toolbar switch—between the **Surface Text** and the **Critical Lens (Subtext)** reading.
3. **ElevenLabs-Style Read-Aloud Player (`/janesdiary/entries/<slug>/`)**:
   Built on the browser's native Web Speech API (`window.speechSynthesis`), styled after ElevenLabs' `audio-waveform-card`. Supports Play/Pause/Stop, voice selection, `0.75x–1.5x` speed control, and section-by-section highlighting.
4. **Blackout Poetry Studio (`/janesdiary/blackout/`)**:
   Interactive erasure poetry tool featuring three public-domain passages (*The Yellow Wallpaper*, *Frankenstein*, and *Sultana's Dream*). Click words to black them out, isolate your emergent poem, or export a high-DPI PNG broadside via HTML5 `<canvas>`.

---

## 4. Deploying to GitHub Pages

A GitHub Actions workflow is pre-configured in `.github/workflows/deploy.yml`:

1. Create a public repository named **`janesdiary`** under your GitHub account (`wwwrryyy`).
2. Push this branch (`main`) to `https://github.com/wwwrryyy/janesdiary.git`.
3. In your GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Every push to `main` will automatically build and deploy the site to `https://wwwrryyy.github.io/janesdiary/`.
