import type { OrbColor } from './entries';

export interface BylineRecord {
  id: string;
  publishedByline: string;
  trueAuthor: string;
  workTitle: string;
  year: number;
  publisherLocation: string;
  orb: OrbColor;
  archivalNote: string;
}

export const BYLINE_ARCHIVE: BylineRecord[] = [
  {
    id: 'sense-and-sensibility',
    publishedByline: '“By a Lady”',
    trueAuthor: 'Jane Austen',
    workTitle: 'Sense and Sensibility',
    year: 1811,
    publisherLocation: 'Thomas Egerton, Military Library, Whitehall, London',
    orb: 'peach',
    archivalNote:
      'Published on commission at the author’s own financial risk; Austen’s legal name never appeared on the title page of any novel published during her lifetime.',
  },
  {
    id: 'frankenstein-1818',
    publishedByline: 'Anonymous (Preface signed by Percy Bysshe Shelley)',
    trueAuthor: 'Mary Wollstonecraft Shelley',
    workTitle: 'Frankenstein; or, The Modern Prometheus',
    year: 1818,
    publisherLocation: 'Lackington, Hughes, Harding, Mavor, & Jones, London',
    orb: 'rose',
    archivalNote:
      'Critics in 1818 assumed the anonymous three-volume Gothic philosophical novel was written by a man—specifically Percy Shelley or William Godwin—until the 1823 second edition credited Mary Shelley.',
  },
  {
    id: 'jane-eyre-1847',
    publishedByline: 'Currer Bell',
    trueAuthor: 'Charlotte Brontë',
    workTitle: 'Jane Eyre: An Autobiography',
    year: 1847,
    publisherLocation: 'Smith, Elder & Co., Cornhill, London',
    orb: 'mint',
    archivalNote:
      'Adopted so Victorian reviewers would not judge the manuscript with the double standard applied to "authoresses." When reviewers suspected a woman’s hand, they immediately called the novel "coarse" and "unchristian."',
  },
  {
    id: 'wuthering-heights-1847',
    publishedByline: 'Ellis Bell',
    trueAuthor: 'Emily Brontë',
    workTitle: 'Wuthering Heights',
    year: 1847,
    publisherLocation: 'Thomas Cautley Newby, London',
    orb: 
      'lavender',
    archivalNote:
      'Emily Brontë guarded her gender-ambiguous pseudonym fiercely until her death in 1848; Charlotte Brontë formally revealed their identities in the 1850 Biographical Notice of Ellis and Acton Bell.',
  },
  {
    id: 'middlemarch-1871',
    publishedByline: 'George Eliot',
    trueAuthor: 'Mary Ann Evans',
    workTitle: 'Middlemarch: A Study of Provincial Life',
    year: 1871,
    publisherLocation: 'William Blackwood and Sons, Edinburgh & London',
    orb: 'sky',
    archivalNote:
      'Evans adopted a male pen name to distance her philosophical realism from stereotyping of "silly novels by lady novelists" and to shield her private domestic life from Victorian moral policing.',
  },
  {
    id: 'agnes-grey-1847',
    publishedByline: 'Acton Bell',
    trueAuthor: 'Anne Brontë',
    workTitle: 'Agnes Grey',
    year: 1847,
    publisherLocation: 'Thomas Cautley Newby, London',
    orb: 'rose',
    archivalNote:
      'Published in a three-volume set alongside Wuthering Heights under the Bell pseudonym; Anne later wrote the signed Preface to the second edition of The Tenant of Wildfell Hall (1848) defending a woman’s right to depict unvarnished truth.',
  },
];
