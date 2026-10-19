import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface PrimaryWork {
  title: string;
  author: string;
  year: number;
}

export interface RadarScores {
  agency: number;
  intersectionality: number;
  subversion: number;
  historicalImpact: number;
  structuralInnovation: number;
}

export interface SubtextSnippet {
  id: string;
  surface: string;
  subtext: string;
  theory: string;
}

export interface PostFrontmatter {
  title: string;
  subtitle: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
  era: string;
  primaryWorks: PrimaryWork[];
  radarScores: RadarScores;
  mlaCitation: string;
  apaCitation: string;
  ambientTrackName: string;
  ambientMode: string;
  subtextSnippets: SubtextSnippet[];
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));

  const posts = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as PostFrontmatter,
      content,
    };
  });

  // Sort by filename / slug
  return posts.sort((a, b) => a.frontmatter.slug.localeCompare(b.frontmatter.slug));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.frontmatter.slug === slug);
  return post || null;
}
