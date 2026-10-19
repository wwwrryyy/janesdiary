'use client';

import React, { useState } from 'react';
import { Eye, Sparkles, RefreshCw, Feather } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

interface SubtextRevealProps {
  id: string;
  surface: string;
  subtext: string;
  theory: string;
  globalLensActive?: boolean;
}

export const SubtextReveal: React.FC<SubtextRevealProps> = ({
  id,
  surface,
  subtext,
  theory,
  globalLensActive = false,
}) => {
  const [localActive, setLocalActive] = useState(false);
  const isRevealed = globalLensActive || localActive;

  return (
    <div
      id={id}
      className={`my-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
        isRevealed
          ? 'bg-surface-card border-primary/40 shadow-soft ring-1 ring-primary/10'
          : 'bg-white/80 border-hairline hover:border-hairline-strong'
      }`}
    >
      {/* Header Bar */}
      <div className="px-4 py-2.5 border-b border-hairline/80 flex items-center justify-between bg-canvas-soft/60">
        <div className="flex items-center gap-2">
          <Badge variant={isRevealed ? 'mint' : 'default'} className="text-[10px]">
            {isRevealed ? 'Critical Lens: Subtext Active' : 'Literal Surface Prose'}
          </Badge>
          <span className="font-mono text-[11px] text-muted hidden sm:inline">
            Theory: {theory}
          </span>
        </div>

        <button
          onClick={() => setLocalActive(!localActive)}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-sans font-medium transition-all ${
            isRevealed
              ? 'bg-primary text-white shadow-sm'
              : 'bg-white border border-hairline text-ink hover:bg-surface-strong'
          }`}
          aria-label="Toggle critical subtext lens"
        >
          {isRevealed ? (
            <>
              <Eye className="w-3 h-3 text-[#a7e5d3]" />
              <span>Peel to Surface</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3 h-3 text-[#f4c5a8]" />
              <span>Uncover Subtext</span>
            </>
          )}
        </button>
      </div>

      {/* Dynamic Content Pane */}
      <div className="p-5 transition-all">
        {!isRevealed ? (
          <div>
            <p className="font-serif text-lg text-ink/90 leading-relaxed italic border-l-2 border-hairline-strong pl-4">
              &ldquo;{surface}&rdquo;
            </p>
            <p className="text-[11px] text-muted mt-2 pl-4">
              Click &lsquo;Uncover Subtext&rsquo; above to decode the ideological subtext beneath this passage.
            </p>
          </div>
        ) : (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="p-3.5 rounded-xl bg-canvas-soft border border-hairline">
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-1">
                Decoded Ideological Subtext ({theory})
              </span>
              <p className="font-sans text-[15px] text-ink leading-relaxed">
                {subtext}
              </p>
            </div>
            <div className="pt-1 text-xs text-muted/80 italic flex items-center gap-1.5">
              <Feather className="w-3.5 h-3.5 text-muted-soft" />
              <span>Original Surface: &ldquo;{surface.slice(0, 70)}...&rdquo;</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
