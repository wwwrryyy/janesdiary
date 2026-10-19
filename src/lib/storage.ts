export interface UserAnnotation {
  id: string;
  slug: string;
  quote: string;
  comment: string;
  timestamp: string;
  authorName?: string;
}

const STORAGE_PREFIX = 'janesdiary_annotations_';

export function getLocalAnnotations(slug: string): UserAnnotation[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${slug}`);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read from localStorage', e);
    return [];
  }
}

export function saveLocalAnnotation(slug: string, annotation: Omit<UserAnnotation, 'id' | 'timestamp'>): UserAnnotation {
  const current = getLocalAnnotations(slug);
  const newAnnotation: UserAnnotation = {
    ...annotation,
    id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
  };

  const updated = [newAnnotation, ...current];
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${slug}`, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }

  return newAnnotation;
}

export function deleteLocalAnnotation(slug: string, id: string): void {
  const current = getLocalAnnotations(slug);
  const updated = current.filter((item) => item.id !== id);
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${slug}`, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update localStorage', e);
  }
}

export function exportAnnotationsAsMarkdown(slug: string, essayTitle: string): void {
  const notes = getLocalAnnotations(slug);
  if (notes.length === 0) {
    alert('No personal reader notes found for this essay to export.');
    return;
  }

  let md = `# Reader Marginalia & Scholarly Notes\n`;
  md += `**Essay:** ${essayTitle}\n`;
  md += `**Date:** ${new Date().toLocaleDateString()}\n`;
  md += `**Platform:** Jane's Diary: An Interactive Archive of Feminist Literature\n\n`;
  md += `---\n\n`;

  notes.forEach((note, index) => {
    md += `### Note ${index + 1} (${new Date(note.timestamp).toLocaleString()})\n`;
    md += `> "${note.quote}"\n\n`;
    md += `**Commentary:** ${note.comment}\n\n`;
    md += `---\n\n`;
  });

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `janesdiary-${slug}-annotations.md`;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportAnnotationsAsJson(slug: string): void {
  const notes = getLocalAnnotations(slug);
  const blob = new Blob([JSON.stringify(notes, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `janesdiary-${slug}-annotations.json`;
  a.click();
  URL.revokeObjectURL(url);
}
