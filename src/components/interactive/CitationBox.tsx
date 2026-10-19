'use client';

import React, { useState } from 'react';
import { Copy, Check, Quote, BookmarkCheck } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

interface CitationBoxProps {
  mlaCitation: string;
  apaCitation: string;
  essayTitle: string;
}

export const CitationBox: React.FC<CitationBoxProps> = ({
  mlaCitation,
  apaCitation,
  essayTitle,
}) => {
  const [format, setFormat] = useState<'MLA' | 'APA'>('MLA');
  const [copied, setCopied] = useState(false);

  const activeCitation = format === 'MLA' ? mlaCitation : apaCitation;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCitation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      console.error('Clipboard copy failed', e);
    }
  };

  return (
    <div className="my-10 p-5 sm:p-6 rounded-2xl border border-hairline bg-surface-card shadow-soft">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Quote className="w-4 h-4 text-primary" />
          <h3 className="font-serif text-base sm:text-lg font-light text-ink">
            Scholarly Citation Generator
          </h3>
          <Badge variant="default" className="text-[10px]">
            Academic Standard
          </Badge>
        </div>

        {/* Format Selector Pills */}
        <div className="flex items-center gap-1 p-1 rounded-pill bg-canvas-soft border border-hairline">
          <button
            onClick={() => setFormat('MLA')}
            className={`px-3 py-1 rounded-pill text-xs font-sans font-medium transition-all ${
              format === 'MLA'
                ? 'bg-primary text-white shadow-xs'
                : 'text-muted hover:text-ink'
            }`}
          >
            MLA 9th Edition
          </button>
          <button
            onClick={() => setFormat('APA')}
            className={`px-3 py-1 rounded-pill text-xs font-sans font-medium transition-all ${
              format === 'APA'
                ? 'bg-primary text-white shadow-xs'
                : 'text-muted hover:text-ink'
            }`}
          >
            APA 7th Edition
          </button>
        </div>
      </div>

      {/* Citation Box */}
      <div className="relative p-4 rounded-xl bg-canvas-soft border border-hairline mb-4 font-mono text-xs text-ink leading-relaxed break-words select-all">
        {activeCitation}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted">
          Format: {format === 'MLA' ? 'Modern Language Association (9th ed.)' : 'American Psychological Association (7th ed.)'}
        </span>

        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill font-sans text-xs font-medium transition-all ${
            copied
              ? 'bg-emerald-600 text-white'
              : 'bg-primary hover:bg-ink text-white shadow-sm'
          }`}
          aria-label="Copy citation to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Citation</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
