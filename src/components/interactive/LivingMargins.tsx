'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, Trash2, Download, Bookmark, Sparkles, X, Plus } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import {
  UserAnnotation,
  getLocalAnnotations,
  saveLocalAnnotation,
  deleteLocalAnnotation,
  exportAnnotationsAsMarkdown,
  exportAnnotationsAsJson,
} from '@/lib/storage';
import { getAssetPath } from '@/lib/utils';

export interface ScholarlyNote {
  id: string;
  paragraphIndex: number;
  highlightedQuote: string;
  author: string;
  tag: string;
  comment: string;
  timestamp: string;
}

interface LivingMarginsProps {
  slug: string;
  essayTitle: string;
}

export const LivingMargins: React.FC<LivingMarginsProps> = ({ slug, essayTitle }) => {
  const [scholarlyNotes, setScholarlyNotes] = useState<ScholarlyNote[]>([]);
  const [userNotes, setUserNotes] = useState<UserAnnotation[]>([]);
  const [selectedText, setSelectedText] = useState<string>('');
  const [selectionPopoverPos, setSelectionPopoverPos] = useState<{ top: number; left: number } | null>(null);
  const [isAnnotating, setIsAnnotating] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [readerName, setReaderName] = useState('');

  // Load pre-seeded scholarly notes from /data/marginalia.json
  useEffect(() => {
    fetch(getAssetPath('/data/marginalia.json'))
      .then((res) => res.json())
      .then((data: Record<string, ScholarlyNote[]>) => {
        if (data[slug]) {
          setScholarlyNotes(data[slug]);
        }
      })
      .catch((e) => console.error('Failed to load marginalia notes', e));

    // Load local reader notes
    setUserNotes(getLocalAnnotations(slug));
  }, [slug]);

  // Listen to browser text selection
  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setSelectionPopoverPos(null);
        return;
      }

      const text = selection.toString().trim();
      if (text.length > 5) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectedText(text);
        setSelectionPopoverPos({
          top: rect.top + window.scrollY - 44,
          left: Math.max(16, rect.left + window.scrollX + rect.width / 2 - 80),
        });
      } else {
        setSelectionPopoverPos(null);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleAddAnnotation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedText || !newComment.trim()) return;

    const saved = saveLocalAnnotation(slug, {
      slug,
      quote: selectedText,
      comment: newComment.trim(),
      authorName: readerName.trim() || 'Reader Note',
    });

    setUserNotes([saved, ...userNotes]);
    setNewComment('');
    setIsAnnotating(false);
    setSelectedText('');
    setSelectionPopoverPos(null);
  };

  const handleDelete = (id: string) => {
    deleteLocalAnnotation(slug, id);
    setUserNotes(userNotes.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* Floating Selection Popover */}
      {selectionPopoverPos && !isAnnotating && (
        <div
          style={{ top: `${selectionPopoverPos.top}px`, left: `${selectionPopoverPos.left}px` }}
          className="fixed z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <button
            onClick={() => setIsAnnotating(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-primary hover:bg-ink text-white font-sans text-xs font-medium shadow-elevated transition-transform active:scale-95"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-[#a7e5d3]" />
            <span>Annotate Margin</span>
          </button>
        </div>
      )}

      {/* Annotation Creation Modal */}
      {isAnnotating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/20 backdrop-blur-xs">
          <div className="w-full max-w-md bg-surface-card rounded-2xl border border-hairline shadow-modal p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-serif text-base font-light text-ink flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#a7e5d3]" /> Pin Margin Annotation
              </span>
              <button
                onClick={() => setIsAnnotating(false)}
                className="p-1 rounded-full text-muted hover:text-ink"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-lg bg-canvas-soft border border-hairline mb-3">
              <span className="font-mono text-[10px] text-muted uppercase block mb-1">
                Selected Passage:
              </span>
              <p className="font-serif italic text-xs text-ink line-clamp-3">
                &ldquo;{selectedText}&rdquo;
              </p>
            </div>

            <form onSubmit={handleAddAnnotation} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your Name / Moniker (e.g. Student Evaluator)"
                  value={readerName}
                  onChange={(e) => setReaderName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-hairline text-xs text-ink placeholder:text-muted-soft focus:outline-none focus:border-ink"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  required
                  placeholder="Enter your scholarly commentary or analytical marginalia..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-hairline text-xs text-ink placeholder:text-muted-soft focus:outline-none focus:border-ink resize-none"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAnnotating(false)}
                  className="px-3 py-1.5 rounded-pill text-xs text-muted hover:text-ink"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-pill bg-primary hover:bg-ink text-white text-xs font-medium"
                >
                  Pin Note to Margins
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Living Margins Column Content */}
      <div className="space-y-4">
        {/* Header & Export Actions */}
        <div className="p-4 rounded-xl bg-canvas-soft border border-hairline">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-serif text-base font-light text-ink flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-primary" />
              Living Margins
            </h4>
            <span className="font-mono text-[11px] text-muted">
              {scholarlyNotes.length + userNotes.length} Notes
            </span>
          </div>
          <p className="text-[11px] text-muted leading-relaxed mb-3">
            Scholarly commentary anchored to prose. Highlight any passage in the essay to append your personal margin note.
          </p>

          <div className="flex items-center gap-2 pt-1 border-t border-hairline">
            <button
              onClick={() => exportAnnotationsAsMarkdown(slug, essayTitle)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-pill bg-white border border-hairline text-[10px] font-sans font-medium text-body hover:text-ink shadow-xs"
              title="Download your annotations as Markdown file"
            >
              <Download className="w-3 h-3 text-muted" />
              Export .MD
            </button>
            <button
              onClick={() => exportAnnotationsAsJson(slug)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-pill bg-white border border-hairline text-[10px] font-sans font-medium text-body hover:text-ink shadow-xs"
              title="Download your annotations as JSON file"
            >
              <Download className="w-3 h-3 text-muted" />
              Export .JSON
            </button>
          </div>
        </div>

        {/* User Reader Notes (LocalStorage) */}
        {userNotes.length > 0 && (
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider block">
              Reader Annotations ({userNotes.length})
            </span>
            {userNotes.map((note) => (
              <div
                key={note.id}
                className="p-3.5 rounded-xl border border-hairline bg-white shadow-soft transition-all hover:border-hairline-strong relative group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Badge variant="mint" className="text-[9px]">
                    {note.authorName || 'Reader Note'}
                  </Badge>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-muted hover:text-semantic-error transition-all"
                    title="Delete note"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
                <blockquote className="font-serif italic text-xs text-ink/80 border-l border-primary/40 pl-2.5 my-1.5">
                  &ldquo;{note.quote}&rdquo;
                </blockquote>
                <p className="text-xs text-body leading-relaxed">
                  {note.comment}
                </p>
                <span className="font-mono text-[9px] text-muted-soft block mt-2">
                  {new Date(note.timestamp).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Pre-Seeded Scholarly Notes */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] uppercase text-muted tracking-wider block">
            Pre-Seeded Scholarly Commentary
          </span>
          {scholarlyNotes.map((note) => (
            <div
              key={note.id}
              id={note.id}
              className="p-3.5 rounded-xl border border-hairline bg-white shadow-soft hover:border-hairline-strong transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <Badge variant="default" className="text-[9px]">
                  {note.tag}
                </Badge>
                <span className="font-mono text-[10px] text-muted">
                  § Para {note.paragraphIndex}
                </span>
              </div>
              <blockquote className="font-serif italic text-xs text-ink/80 border-l border-hairline-strong pl-2.5 my-1.5">
                &ldquo;{note.highlightedQuote}&rdquo;
              </blockquote>
              <p className="text-xs text-body leading-relaxed">
                {note.comment}
              </p>
              <div className="flex items-center justify-between pt-2 mt-2 border-t border-hairline-soft text-[10px] font-mono text-muted">
                <span>{note.author}</span>
                <span>{note.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
