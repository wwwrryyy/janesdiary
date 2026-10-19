'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EvaluatorDrawer } from '@/components/layout/EvaluatorDrawer';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { AudioAmbientPill } from '@/components/interactive/AudioAmbientPill';

export const ClientShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [evaluatorOpen, setEvaluatorOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global hotkey listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar
        onOpenEvaluator={() => setEvaluatorOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="flex-1 pt-16">
        {children}
      </main>

      <Footer />

      <EvaluatorDrawer
        isOpen={evaluatorOpen}
        onClose={() => setEvaluatorOpen(false)}
      />

      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <AudioAmbientPill
        mode="victorian"
        trackName="Victorian Rain & Quill Scratches"
      />
    </>
  );
};
