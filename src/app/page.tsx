import React from 'react';
import Link from 'next/link';
import { GradientOrb } from '@/components/common/GradientOrb';
import { Badge } from '@/components/common/Badge';
import { ConstellationGraph } from '@/components/interactive/ConstellationGraph';
import { getAllPosts } from '@/lib/mdx';
import { ArrowRight, BookOpen, GitFork, Sparkles, Activity, Clock, ShieldCheck, Feather } from 'lucide-react';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: HERO BAND */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 px-4 sm:px-6 text-center max-w-5xl mx-auto">
        {/* Soft atmospheric gradient orbs */}
        <GradientOrb color="mint" size="xl" className="top-10 left-1/2 -translate-x-1/2" />
        <GradientOrb color="sky" size="lg" className="top-40 right-10" />

        {/* Academic Tag Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge variant="default" className="text-xs py-1 px-3 bg-white/80 shadow-xs border-hairline-strong">
            Digital Assignment Archive · VIT Chennai
          </Badge>
        </div>

        {/* Display Mega Headline - Strictly Weight 300 */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-light text-ink tracking-tight-mega leading-[1.05] max-w-4xl mx-auto mb-6">
          Unearthing the Erased Layers of Feminist Literature
        </h1>

        {/* Subhead */}
        <p className="font-sans text-base sm:text-lg text-body max-w-2xl mx-auto leading-relaxed mb-10 tracking-editorial">
          An interactive digital humanities archive dissecting female confinement, carceral biopolitics, and subversive subtexts across two centuries—from 1818 Romantic monstrosity to 1985 cyberfeminism and 2026 algorithmic labor.
        </p>

        {/* Pill CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="#essays"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-primary hover:bg-ink text-white font-sans text-[15px] font-medium shadow-sm transition-all"
          >
            <span>Explore 5 Cornerstone Essays</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="#constellation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-white border border-hairline-strong hover:bg-surface-strong/60 text-ink font-sans text-[15px] font-medium transition-all shadow-xs"
          >
            <GitFork className="w-4 h-4 text-muted" />
            <span>Launch Constellation Graph</span>
          </Link>
        </div>

        {/* Author Metadata Bar */}
        <div className="pt-12 mt-12 border-t border-hairline/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-muted">
          <span>Author: Shawn Shaibu Cherian (26BCE1820)</span>
          <span>·</span>
          <span>Target: GitHub Pages Static Edge</span>
          <span>·</span>
          <span>MLA 9th / APA 7th Standard</span>
        </div>
      </section>

      {/* SECTION 2: INTERSECTIONAL CONSTELLATION */}
      <section id="constellation" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-hairline/60">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="lavender" className="mb-2 text-[10px]">
            Visual Literary Mapping
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink tracking-tight-lg mb-3">
            The Intersectional Constellation
          </h2>
          <p className="text-sm sm:text-base text-body leading-relaxed">
            Feminist literature is not an isolated chronology, but an interconnected matrix of intellectual revolt. Interact with the 2D force-directed network below to trace how themes of bodily autonomy, gothic doubling, and cybernetic hybridity bridge across centuries.
          </p>
        </div>

        <ConstellationGraph />
      </section>

      {/* SECTION 3: 5 CORNERSTONE SCHOLARLY ANALYSES */}
      <section id="essays" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-hairline/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Badge variant="mint" className="mb-2 text-[10px]">
              Curated Scholarly Corpus
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink tracking-tight-lg">
              Cornerstone Analyses
            </h2>
            <p className="text-sm text-body mt-1">
              Five exhaustive, comparative digital assignments examining primary literary texts through interactive critical lenses.
            </p>
          </div>
          <span className="font-mono text-xs text-muted">
            5 Articles · Full MDX Compilation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article
              key={post.frontmatter.slug}
              className={`rounded-xl border border-hairline bg-surface-card p-6 shadow-soft hover:shadow-elevated hover:border-hairline-strong transition-all duration-200 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="default" className="text-[10px]">
                    {post.frontmatter.era}
                  </Badge>
                  <span className="font-mono text-xs text-muted flex items-center gap-1">
                    <Clock className="w-3 h-3 text-muted-soft" />
                    {post.frontmatter.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-light text-ink leading-snug mb-2 group">
                  <Link
                    href={`/essays/${post.frontmatter.slug}/`}
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-body leading-relaxed mb-4 line-clamp-3">
                  {post.frontmatter.subtitle}
                </p>

                {/* Primary Works Analyzed Chips */}
                {post.frontmatter.primaryWorks && (
                  <div className="space-y-1 mb-5 pt-3 border-t border-hairline-soft">
                    <span className="font-mono text-[10px] uppercase text-muted tracking-wider block">
                      Primary Texts Analyzed:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {post.frontmatter.primaryWorks.map((work, wIdx) => (
                        <span
                          key={wIdx}
                          className="px-2 py-0.5 rounded-full bg-canvas-soft border border-hairline text-[11px] font-sans text-ink"
                        >
                          <em className="font-serif">{work.title}</em> ({work.author}, {work.year})
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom CTA & Radar Preview */}
              <div className="pt-4 border-t border-hairline flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
                  <Activity className="w-3.5 h-3.5 text-primary" />
                  <span>Subversion: {post.frontmatter.radarScores.subversion}/10</span>
                </div>

                <Link
                  href={`/essays/${post.frontmatter.slug}/`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill bg-canvas-soft hover:bg-primary hover:text-white text-ink text-xs font-sans font-medium transition-all border border-hairline"
                >
                  <span>Read Analysis</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 4: QUANTITATIVE ARCHIVE STATS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-hairline/60">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-surface-card border border-hairline shadow-soft">
            <span className="font-serif text-4xl sm:text-5xl font-light text-ink block mb-1">
              5
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Cornerstone Analyses
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-surface-card border border-hairline shadow-soft">
            <span className="font-serif text-4xl sm:text-5xl font-light text-ink block mb-1">
              14
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Primary Works & Authors
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-surface-card border border-hairline shadow-soft">
            <span className="font-serif text-4xl sm:text-5xl font-light text-ink block mb-1">
              134
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Years of Canon (1818–2026)
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-surface-card border border-hairline shadow-soft">
            <span className="font-serif text-4xl sm:text-5xl font-light text-ink block mb-1">
              100%
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Static Edge (Zero Server)
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 5: CURATORIAL METRIC STATEMENT */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-10 rounded-2xl bg-canvas-soft border border-hairline relative overflow-hidden">
          <GradientOrb color="peach" size="md" className="top-0 right-0" />
          <h3 className="font-serif text-2xl font-light text-ink mb-3">
            The Digital Assignment Methodology
          </h3>
          <p className="text-sm text-body leading-relaxed max-w-2xl mx-auto mb-6">
            Constructed for faculty review at VIT Chennai, Jane’s Diary bridges traditional literary close-reading with interactive web engineering. All margin annotations, radar analyses, and citation contracts execute purely in the browser without server dependencies.
          </p>
          <div className="inline-flex items-center gap-3">
            <Link
              href="/methodology"
              className="px-5 py-2.5 rounded-pill bg-white border border-hairline-strong text-xs font-medium text-ink hover:bg-surface-strong transition-all shadow-xs"
            >
              Read Full Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
