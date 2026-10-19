import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookX } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

export default function NotFound() {
  return (
    <div className="py-24 px-4 text-center max-w-md mx-auto">
      <div className="w-12 h-12 rounded-full bg-surface-strong mx-auto flex items-center justify-center text-ink mb-4">
        <BookX className="w-6 h-6 text-muted" />
      </div>
      <Badge variant="default" className="text-xs mb-3">
        404 · Unrecorded Margin
      </Badge>
      <h1 className="font-serif text-3xl font-light text-ink mb-3">
        Page Not Located
      </h1>
      <p className="text-sm text-body leading-relaxed mb-8">
        The requested entry has not been transcribed in this archive, or may have been erased beneath earlier layers.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-primary hover:bg-ink text-white text-xs font-medium transition-all shadow-sm"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Jane&apos;s Diary</span>
      </Link>
    </div>
  );
}
