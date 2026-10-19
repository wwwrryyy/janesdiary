import React from 'react';
import Link from 'next/link';
import { Feather, GraduationCap, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-hairline bg-canvas-soft text-body text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Col 1: Wordmark & Attribution */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-light text-ink">
                Jane’s Diary
              </span>
              <Badge variant="default" className="text-[10px]">
                DA Archive
              </Badge>
            </div>
            <p className="text-muted leading-relaxed max-w-sm">
              An interactive scholarly archive of feminist literary history, deconstructing female erasure, domestic confinement, and subtextual resistance across two centuries.
            </p>
            <div className="pt-2 text-muted font-mono text-[11px] space-y-1">
              <p>Author: Shawn Shaibu Cherian (26BCE1820)</p>
              <p>Course: Advanced English / Digital Humanities</p>
              <p>Vellore Institute of Technology (VIT), Chennai</p>
            </div>
          </div>

          {/* Col 2: Cornerstone Essays */}
          <div className="space-y-3">
            <h4 className="font-sans font-medium text-xs text-ink uppercase tracking-wider">
              Cornerstone Analyses
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/essays/01-madwoman-to-glitch/" className="text-muted hover:text-ink transition-colors">
                  01. Madwoman vs Glitch
                </Link>
              </li>
              <li>
                <Link href="/essays/02-subaltern-body-battlefield/" className="text-muted hover:text-ink transition-colors">
                  02. Subaltern Battlefield
                </Link>
              </li>
              <li>
                <Link href="/essays/03-room-of-ones-own-digital/" className="text-muted hover:text-ink transition-colors">
                  03. Room in the Algorithm
                </Link>
              </li>
              <li>
                <Link href="/essays/04-speculative-wombs-utopia/" className="text-muted hover:text-ink transition-colors">
                  04. Speculative Wombs
                </Link>
              </li>
              <li>
                <Link href="/essays/05-reclaiming-the-monster/" className="text-muted hover:text-ink transition-colors">
                  05. Reclaiming the Monster
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Theoretical Eras */}
          <div className="space-y-3">
            <h4 className="font-sans font-medium text-xs text-ink uppercase tracking-wider">
              Literary Lineages
            </h4>
            <ul className="space-y-2 text-muted">
              <li>1st-Wave Victorian Gothic</li>
              <li>Romantic Proto-Feminism</li>
              <li>Modernist Materialism</li>
              <li>Postcolonial Subalternity</li>
              <li>Speculative Utopias</li>
              <li>Cyberfeminism & Glitch</li>
            </ul>
          </div>

          {/* Col 4: Platform & Static Edge */}
          <div className="space-y-3">
            <h4 className="font-sans font-medium text-xs text-ink uppercase tracking-wider">
              Static Architecture
            </h4>
            <ul className="space-y-2 text-muted">
              <li>Next.js 15 Static Export</li>
              <li>100% Zero-Backend (SSG)</li>
              <li>D3 / Canvas 2D Physics</li>
              <li>Fuse.js Client Search</li>
              <li>Web Audio Synthesizer</li>
              <li>
                <a
                  href="https://github.com/wwwrryyy/janesdiary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline hover:text-primary inline-flex items-center gap-1"
                >
                  GitHub Repository <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-muted text-[11px]">
          <p>© 2026 Jane’s Diary · Digital Assignment Submission · Shawn Shaibu Cherian (26BCE1820)</p>
          <div className="flex items-center gap-4">
            <Link href="/methodology" className="hover:text-ink">Curatorial Methodology</Link>
            <span>·</span>
            <span>MLA 9th / APA 7th Compliant</span>
            <span>·</span>
            <span>GitHub Pages Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
