import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ClientShell } from '@/components/layout/ClientShell';

export const metadata: Metadata = {
  title: "Jane’s Diary: An Interactive Archive of Feminist Literature",
  description:
    "An interactive scholarly archive analyzing five seminal axes of feminist literature from Victorian Gothic domesticity to 21st-century cyberfeminism. Authored by Shawn Shaibu Cherian (26BCE1820) for VIT Chennai.",
  keywords: [
    'Feminist Literature',
    'Jane’s Diary',
    'Shawn Shaibu Cherian',
    '26BCE1820',
    'The Yellow Wallpaper',
    'A Cyborg Manifesto',
    'Mahasweta Devi',
    'Draupadi',
    'Virginia Woolf',
    'A Room of One’s Own',
    'Sultana’s Dream',
    'The Handmaid’s Tale',
    'Frankenstein',
    'Sylvia Plath',
    'Digital Humanities',
    'VIT Chennai',
  ],
  authors: [{ name: 'Shawn Shaibu Cherian (26BCE1820)' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-canvas text-ink min-h-screen flex flex-col font-sans selection:bg-[#f4c5a8]/40 selection:text-ink">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
