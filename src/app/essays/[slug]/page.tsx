import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { Badge } from '@/components/common/Badge';
import { LiteraryRadar } from '@/components/interactive/LiteraryRadar';
import { LivingMargins } from '@/components/interactive/LivingMargins';
import { SubtextReveal } from '@/components/interactive/SubtextReveal';
import { CitationBox } from '@/components/interactive/CitationBox';
import { Clock, Calendar, ArrowLeft, ArrowRight, UserCheck, Sparkles, Feather } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.frontmatter.slug,
  }));
}

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.frontmatter.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Simple Markdown paragraph and heading parser for static rendering
  const parseSections = (rawContent: string) => {
    const rawParagraphs = rawContent.split(/\n\n+/);
    return rawParagraphs.map((para, i) => {
      const trimmed = para.trim();
      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="font-serif text-2xl sm:text-3xl font-light text-ink tracking-tight-md mt-10 mb-4 pt-4 border-t border-hairline/60"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('> ')) {
        return (
          <blockquote
            key={i}
            className="font-serif italic text-lg sm:text-xl text-ink/90 border-l-2 border-primary/60 pl-5 my-6 leading-relaxed bg-canvas-soft/40 py-2.5 rounded-r-lg"
          >
            {trimmed.replace(/^>\s*/gm, '')}
          </blockquote>
        );
      }
      if (trimmed.startsWith('|')) {
        // Render Markdown Table
        const rows = trimmed.split('\n').filter((r) => !r.includes('---'));
        return (
          <div key={i} className="my-6 overflow-x-auto rounded-xl border border-hairline bg-surface-card">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody>
                {rows.map((row, rIdx) => {
                  const cells = row.split('|').filter(Boolean).map((c) => c.trim());
                  const isHeader = rIdx === 0;
                  return (
                    <tr
                      key={rIdx}
                      className={isHeader ? 'bg-canvas-soft font-semibold text-ink border-b border-hairline' : 'border-b border-hairline-soft'}
                    >
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map((l) => l.replace(/^- /, ''));
        return (
          <ul key={i} className="list-disc list-inside space-y-1.5 my-4 text-body text-[16px] pl-2">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="font-sans text-[16.5px] text-body leading-[1.68] my-4 tracking-editorial">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/#essays"
          className="inline-flex items-center gap-1.5 text-xs font-sans text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Jane&apos;s Diary Archive</span>
        </Link>
      </div>

      {/* Essay Header Container */}
      <header className="max-w-4xl mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="default" className="text-xs">
            {frontmatter.era}
          </Badge>
          <span className="font-mono text-xs text-muted">
            Essay #{slug.split('-')[0]}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-light text-ink tracking-tight-xl leading-[1.08] mb-5">
          {frontmatter.title}
        </h1>

        <p className="font-sans text-lg sm:text-xl text-body leading-relaxed mb-6 tracking-editorial">
          {frontmatter.subtitle}
        </p>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-hairline text-xs font-mono text-muted">
          <span className="flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-primary" />
            Shawn Shaibu Cherian (26BCE1820)
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {frontmatter.publishedAt}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {frontmatter.readingTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5 text-[#a7e5d3]" />
            Ambient: {frontmatter.ambientTrackName}
          </span>
        </div>
      </header>

      {/* Literary Radar Chart Banner */}
      <div className="mb-12 max-w-xl">
        <LiteraryRadar scores={frontmatter.radarScores} />
      </div>

      {/* Main Two-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Long-Form Essay Prose */}
        <article className="lg:col-span-8 max-w-[720px]">
          {/* Render Parsed Prose */}
          <div className="prose prose-stone max-w-none">
            {parseSections(content)}
          </div>

          {/* Interactive Critical Lens Subtext Section */}
          {frontmatter.subtextSnippets && frontmatter.subtextSnippets.length > 0 && (
            <div className="my-12 pt-8 border-t border-hairline">
              <div className="mb-6">
                <Badge variant="mint" className="mb-2 text-[10px]">
                  Interactive Close-Reading
                </Badge>
                <h3 className="font-serif text-2xl font-light text-ink tracking-tight-md">
                  Subtext Uncovered (Critical Lens)
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Toggle the critical lens below to peel back the patriarchal surface prose and reveal the latent subversive feminist commentary.
                </p>
              </div>

              <div className="space-y-4">
                {frontmatter.subtextSnippets.map((snippet) => (
                  <SubtextReveal
                    key={snippet.id}
                    id={snippet.id}
                    surface={snippet.surface}
                    subtext={snippet.subtext}
                    theory={snippet.theory}
                  />
                ))}
              </div>
            </div>
          )}

          {/* MLA 9th & APA 7th Citation Generator */}
          <CitationBox
            mlaCitation={frontmatter.mlaCitation}
            apaCitation={frontmatter.apaCitation}
            essayTitle={frontmatter.title}
          />

          {/* Sequential Essay Navigation */}
          <div className="mt-12 pt-8 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/essays/${prevPost.frontmatter.slug}/`}
                className="p-4 rounded-xl border border-hairline bg-surface-card hover:border-hairline-strong transition-all flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase text-muted flex items-center gap-1 mb-1">
                  <ArrowLeft className="w-3 h-3" /> Previous Analysis
                </span>
                <span className="font-serif text-sm font-medium text-ink hover:underline">
                  {prevPost.frontmatter.title}
                </span>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link
                href={`/essays/${nextPost.frontmatter.slug}/`}
                className="p-4 rounded-xl border border-hairline bg-surface-card hover:border-hairline-strong transition-all flex flex-col justify-between text-right"
              >
                <span className="font-mono text-[10px] uppercase text-muted flex items-center justify-end gap-1 mb-1">
                  Next Analysis <ArrowRight className="w-3 h-3" />
                </span>
                <span className="font-serif text-sm font-medium text-ink hover:underline">
                  {nextPost.frontmatter.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </article>

        {/* Right Column: Living Margins Sticky Feed */}
        <aside className="lg:col-span-4">
          <div className="sticky top-20">
            <LivingMargins slug={slug} essayTitle={frontmatter.title} />
          </div>
        </aside>
      </div>
    </div>
  );
}
