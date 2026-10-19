'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, Menu, X, BookOpen, GitFork } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

interface NavbarProps {
  onOpenEvaluator: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvaluator, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 bg-canvas/85 backdrop-blur-md border-b border-hairline/80 transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-tight text-ink group-hover:text-primary transition-colors">
              Jane’s Diary
            </span>
            <Badge variant="default" className="hidden sm:inline-flex bg-surface-strong/80 text-[10px]">
              Feminist Archive
            </Badge>
          </Link>
        </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/#essays"
            className="text-[15px] font-medium text-body hover:text-ink transition-colors"
          >
            Cornerstone Essays
          </Link>
          <Link
            href="/#constellation"
            className="text-[15px] font-medium text-body hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <GitFork className="w-3.5 h-3.5 text-muted" />
            Constellation
          </Link>
          <Link
            href="/methodology"
            className="text-[15px] font-medium text-body hover:text-ink transition-colors"
          >
            Methodology
          </Link>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Cmd+K Search Pill */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 h-9 px-3.5 rounded-pill border border-hairline-strong bg-white/70 hover:bg-white text-muted hover:text-ink text-xs transition-all shadow-sm"
            aria-label="Search archive"
          >
            <Search className="w-3.5 h-3.5 text-muted-soft" />
            <span className="font-sans text-xs">Search canon...</span>
            <kbd className="hidden lg:inline-block ml-1 px-1.5 py-0.5 rounded bg-surface-strong text-[10px] font-mono font-medium text-muted">
              ⌘K
            </kbd>
          </button>

          {/* Evaluator Drawer Pill */}
          <button
            onClick={onOpenEvaluator}
            className="inline-flex items-center gap-2 h-9 px-3.5 sm:px-4 rounded-pill bg-primary hover:bg-ink text-white font-sans text-xs sm:text-[13px] font-medium tracking-tight shadow-sm transition-all"
            aria-label="Open Digital Assignment Evaluator Drawer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a7e5d3]" />
            <span>DA Rubric</span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-white/15 text-[10px] font-mono">
              26BCE1820
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink rounded-lg hover:bg-surface-strong transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas border-b border-hairline px-4 py-4 space-y-3">
          <Link
            href="/#essays"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-body hover:text-ink"
          >
            Cornerstone Essays
          </Link>
          <Link
            href="/#constellation"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-body hover:text-ink"
          >
            Intersectional Constellation
          </Link>
          <Link
            href="/methodology"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-body hover:text-ink"
          >
            Methodology & Curation
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full text-left py-2 text-sm font-medium text-body hover:text-ink flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-muted" /> Search Archive (Cmd+K)
          </button>
        </div>
      )}
    </nav>
  );
};
