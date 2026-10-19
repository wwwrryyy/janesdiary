'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, MessageSquare, ArrowRight, CornerDownLeft } from 'lucide-react';
import Fuse from 'fuse.js';
import { getAssetPath } from '@/lib/utils';
import { Badge } from '@/components/common/Badge';

interface SearchResultItem {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  era: string;
  slug: string;
  url: string;
  excerpt: string;
  keywords: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [fuseInstance, setFuseInstance] = useState<Fuse<SearchResultItem> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch search index JSON
    const fetchIndex = async () => {
      try {
        const res = await fetch(getAssetPath('/data/search-index.json'));
        if (res.ok) {
          const data: SearchResultItem[] = await res.json();
          const fuse = new Fuse(data, {
            keys: [
              { name: 'title', weight: 0.4 },
              { name: 'subtitle', weight: 0.2 },
              { name: 'keywords', weight: 0.3 },
              { name: 'excerpt', weight: 0.1 },
            ],
            threshold: 0.35,
            ignoreLocation: true,
          });
          setFuseInstance(fuse);
          setResults(data.slice(0, 5)); // Initial top 5 items
        }
      } catch (e) {
        console.error('Failed to load search index', e);
      }
    };

    fetchIndex();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!fuseInstance) return;
    if (query.trim() === '') {
      // Default view
      const defaultItems = fuseInstance.getIndex().size() ? fuseInstance.search('').map((r) => r.item) : [];
      setResults(defaultItems.slice(0, 6));
    } else {
      const searchResults = fuseInstance.search(query).map((res) => res.item);
      setResults(searchResults.slice(0, 8));
      setSelectedIndex(0);
    }
  }, [query, fuseInstance]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      onClose();
      router.push(results[selectedIndex].url);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-2xl bg-surface-card rounded-2xl border border-hairline shadow-modal overflow-hidden z-10"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-hairline gap-3 bg-canvas-soft">
          <Search className="w-5 h-5 text-muted-soft shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search feminist canon, authors, quotes, or marginalia..."
            className="w-full bg-transparent font-sans text-sm sm:text-base text-ink placeholder:text-muted-soft focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-muted hover:text-ink rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white border border-hairline text-[11px] font-mono text-muted">
            esc
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-hairline-soft">
          {results.length === 0 ? (
            <div className="py-12 text-center text-muted text-sm">
              No matching archival entries found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={onClose}
                  className={`block p-3 rounded-xl transition-all ${
                    isSelected ? 'bg-surface-strong' : 'hover:bg-canvas-soft'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      {item.type === 'Essay' ? (
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <MessageSquare className="w-3.5 h-3.5 text-muted" />
                      )}
                      <span className="font-serif text-[15px] font-medium text-ink">
                        {item.title}
                      </span>
                    </div>
                    <Badge variant={item.type === 'Essay' ? 'default' : 'outline'} className="text-[9px]">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted line-clamp-1 pl-5">
                    {item.excerpt}
                  </p>
                </Link>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-canvas-soft border-t border-hairline flex items-center justify-between text-[11px] text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white border border-hairline rounded font-mono text-[10px]">↑</kbd>
              <kbd className="px-1 py-0.5 bg-white border border-hairline rounded font-mono text-[10px]">↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="w-3 h-3 text-muted-soft" /> select
            </span>
          </div>
          <span className="font-mono text-[10px]">Jane’s Diary Search</span>
        </div>
      </div>
    </div>
  );
};
