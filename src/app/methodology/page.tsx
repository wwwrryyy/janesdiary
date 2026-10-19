import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Layers, Sparkles, Award, Code, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

export default function MethodologyPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-sans text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Jane&apos;s Diary Archive</span>
        </Link>
      </div>

      <header className="mb-12">
        <Badge variant="mint" className="mb-3 text-[10px]">
          Digital Assignment Curatorial Statement
        </Badge>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-ink tracking-tight-xl leading-[1.1] mb-4">
          Methodology & Curatorial Architecture
        </h1>
        <p className="font-sans text-lg text-body leading-relaxed">
          How Jane&apos;s Diary synthesizes feminist literary theory, digital close-reading, and zero-backend web engineering for academic evaluation at VIT Chennai.
        </p>
      </header>

      <div className="space-y-12 prose prose-stone max-w-none text-body">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-light text-ink border-b border-hairline pb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            1. The Palimpsest as Foundational Metaphor
          </h2>
          <p className="text-[16px] leading-[1.68]">
            In their seminal 1979 treatise <em>The Madwoman in the Attic</em>, feminist critics Sandra Gilbert and Susan Gubar conceptualized women&apos;s writing under patriarchal history as a <strong>palimpsest</strong>: an ancient vellum parchment whose surface has been scraped clean and rewritten, yet whose original, erased inscriptions bleed through beneath the dominant text.
          </p>
          <p className="text-[16px] leading-[1.68]">
            Nineteenth- and early twentieth-century female authors—subjected to domestic containment, psychiatric pathologization, and censorship—could not write their radical dissent transparently. Instead, they embedded subversive feminist codes within polite Victorian prose, gothic monster fables, and utopian dreams. Jane&apos;s Diary turns this literary metaphor into interactive web architecture through the <strong>Subtext Uncovered</strong> mechanism.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-light text-ink border-b border-hairline pb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            2. The 5 Cornerstone Curatorial Axes
          </h2>
          <p className="text-[16px] leading-[1.68]">
            To ensure comprehensive coverage of the feminist canon across two centuries, the archive curates five comparative analyses spanning distinct literary movements and theoretical paradigms:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="p-4 rounded-xl border border-hairline bg-surface-card">
              <span className="font-mono text-[10px] text-muted uppercase">Axis 01</span>
              <h4 className="font-serif text-base font-medium text-ink mt-0.5">Victorian Gothic to Cyberfeminism</h4>
              <p className="text-xs text-muted mt-1">Charlotte Perkins Gilman (1892) & Donna Haraway (1985)</p>
            </div>
            <div className="p-4 rounded-xl border border-hairline bg-surface-card">
              <span className="font-mono text-[10px] text-muted uppercase">Axis 02</span>
              <h4 className="font-serif text-base font-medium text-ink mt-0.5">Subalternity & The Carnal Battlefield</h4>
              <p className="text-xs text-muted mt-1">Mahasweta Devi (1978, Spivak trans.) & Arundhati Roy (1997)</p>
            </div>
            <div className="p-4 rounded-xl border border-hairline bg-surface-card">
              <span className="font-mono text-[10px] text-muted uppercase">Axis 03</span>
              <h4 className="font-serif text-base font-medium text-ink mt-0.5">Materialist Modernism & Digital Labor</h4>
              <p className="text-xs text-muted mt-1">Virginia Woolf (1929) to 2026 Platform Enclosure</p>
            </div>
            <div className="p-4 rounded-xl border border-hairline bg-surface-card">
              <span className="font-mono text-[10px] text-muted uppercase">Axis 04</span>
              <h4 className="font-serif text-base font-medium text-ink mt-0.5">Speculative Wombs & Dystopian Biopolitics</h4>
              <p className="text-xs text-muted mt-1">Begum Rokeya Hossain (1905) & Margaret Atwood (1985)</p>
            </div>
            <div className="p-4 rounded-xl border border-hairline bg-surface-card sm:col-span-2">
              <span className="font-mono text-[10px] text-muted uppercase">Axis 05</span>
              <h4 className="font-serif text-base font-medium text-ink mt-0.5">Romantic Proto-Feminism & Confessional Monstrosity</h4>
              <p className="text-xs text-muted mt-1">Mary Shelley (1818) & Sylvia Plath (1965)</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-light text-ink border-b border-hairline pb-2 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            3. Digital Assignment Compliance Matrix
          </h2>
          <div className="space-y-2.5 not-prose my-4">
            <div className="p-3.5 rounded-lg border border-hairline bg-canvas-soft flex items-center justify-between text-xs">
              <span className="font-medium text-ink flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                MLA 9th & APA 7th Rigor
              </span>
              <span className="text-muted font-mono">1-Click Generator on all essays</span>
            </div>
            <div className="p-3.5 rounded-lg border border-hairline bg-canvas-soft flex items-center justify-between text-xs">
              <span className="font-medium text-ink flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Zero Backend Dependency
              </span>
              <span className="text-muted font-mono">100% Static GitHub Pages Export</span>
            </div>
            <div className="p-3.5 rounded-lg border border-hairline bg-canvas-soft flex items-center justify-between text-xs">
              <span className="font-medium text-ink flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Evaluator Drawer
              </span>
              <span className="text-muted font-mono">1-Click Rubric & Print PDF</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
