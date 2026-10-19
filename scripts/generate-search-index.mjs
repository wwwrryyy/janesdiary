import fs from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'content', 'posts');
const marginaliaPath = path.join(process.cwd(), 'public', 'data', 'marginalia.json');
const outputPath = path.join(process.cwd(), 'public', 'data', 'search-index.json');

function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, content: fileContent };

  const rawYaml = match[1];
  const bodyContent = fileContent.slice(match[0].length);
  const data = {};

  const lines = rawYaml.split(/\r?\n/);
  let currentKey = null;

  for (const line of lines) {
    if (!line.trim()) continue;
    const kvMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (kvMatch && !line.startsWith(' ') && !line.startsWith('  -')) {
      const key = kvMatch[1];
      let val = kvMatch[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      data[key] = val;
      currentKey = key;
    } else if (line.trim().startsWith('- title:') && currentKey === 'primaryWorks') {
      if (!Array.isArray(data.primaryWorks)) data.primaryWorks = [];
      const titleMatch = line.match(/- title:\s*["']?([^"']+)["']?/);
      if (titleMatch) data.primaryWorks.push(titleMatch[1]);
    }
  }

  return { data, content: bodyContent };
}

function generateSearchIndex() {
  const searchIndex = [];

  // Index posts
  if (fs.existsSync(postsDir)) {
    const filenames = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));

    for (const filename of filenames) {
      const fullPath = path.join(postsDir, filename);
      const rawContent = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = parseFrontmatter(rawContent);

      // Clean markdown tags for search preview
      const cleanContent = content
        .replace(/#+\s+/g, '')
        .replace(/>\s+/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .slice(0, 800);

      searchIndex.push({
        id: `post-${data.slug}`,
        type: 'Essay',
        title: data.title || filename.replace('.mdx', ''),
        subtitle: data.subtitle || '',
        era: data.era || '',
        slug: data.slug,
        url: `/essays/${data.slug}/`,
        excerpt: cleanContent.slice(0, 240) + '...',
        keywords: [
          data.title,
          data.subtitle,
          data.era,
          ...(Array.isArray(data.primaryWorks) ? data.primaryWorks : []),
        ].filter(Boolean).join(' '),
      });
    }
  }

  // Index marginalia notes
  if (fs.existsSync(marginaliaPath)) {
    const rawMarginalia = JSON.parse(fs.readFileSync(marginaliaPath, 'utf8'));
    for (const [slug, notes] of Object.entries(rawMarginalia)) {
      for (const note of notes) {
        searchIndex.push({
          id: `margin-${note.id}`,
          type: 'Scholarly Margin Note',
          title: `${note.tag}: "${note.highlightedQuote.slice(0, 50)}..."`,
          subtitle: `By ${note.author}`,
          era: 'Marginalia',
          slug: slug,
          url: `/essays/${slug}/#${note.id}`,
          excerpt: note.comment,
          keywords: `${note.tag} ${note.author} ${note.highlightedQuote} ${note.comment}`,
        });
      }
    }
  }

  // Ensure output dir exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2), 'utf8');
  console.log(`[Search Index] Generated ${searchIndex.length} searchable items into ${outputPath}`);
}

generateSearchIndex();
