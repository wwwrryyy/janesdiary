import type { OrbColor } from './entries';

export interface BlackoutPassage {
  id: string;
  label: string;
  workTitle: string;
  author: string;
  year: number;
  era: string;
  orb: OrbColor;
  citationMLA: string;
  editorialContext: string;
  /** Default indices to showcase an initial blackout poem when loaded or via preset */
  presetKeepIndices: number[];
  text: string;
}

export const BLACKOUT_PASSAGES: BlackoutPassage[] = [
  {
    id: 'yellow-wallpaper-1892',
    label: '01 · Gilman (1892)',
    workTitle: 'The Yellow Wallpaper',
    author: 'Charlotte Perkins Gilman',
    year: 1892,
    era: '1st-Wave Feminist Gothic',
    orb: 'mint',
    citationMLA:
      'Gilman, Charlotte Perkins. "The Yellow Wallpaper." The New England Magazine, Jan. 1892, p. 653.',
    editorialContext:
      'Verified 1892 public-domain excerpt. The narrator deciphers the nocturnal bars of her nursery wallpaper and recognizes the trapped woman creeping behind the domestic pattern.',
    presetKeepIndices: [1, 2, 7, 13, 14, 15, 29, 30, 36, 37, 41, 47, 51, 52, 53],
    text: 'By moonlight the moon shines in all night when there is a moon I would not know it was the same paper. At night in any kind of light, in twilight, candlelight, lamplight, and worst of all by moonlight, it becomes bars! The outside pattern I mean, and the woman behind it is as plain as can be.',
  },
  {
    id: 'frankenstein-1818',
    label: '02 · Shelley (1818)',
    workTitle: 'Frankenstein; or, The Modern Prometheus',
    author: 'Mary Shelley',
    year: 1818,
    era: 'Romantic Proto-Feminism',
    orb: 'rose',
    citationMLA:
      'Shelley, Mary Wollstonecraft. Frankenstein; or, The Modern Prometheus. Lackington, Hughes, Harding, Mavor, & Jones, 1818.',
    editorialContext:
      'Verified 1818 public-domain excerpt. Reclaim speech and fearless agency from Shelley’s philosophical meditation on monstrous creation and dread.',
    presetKeepIndices: [0, 1, 7, 8, 9, 18, 22, 23, 33, 35, 36, 44, 48, 50],
    text: 'Beware, for I am fearless and therefore powerful. I will watch with the wiliness of a snake, that I may sting with its venom. Man, you shall repent of the injuries you inflict. Remember that I have power; you believe yourself miserable, but I can make you so wretched that the light of day will be hateful to you.',
  },
  {
    id: 'sultanas-dream-1905',
    label: '03 · Hossain (1905)',
    workTitle: "Sultana's Dream",
    author: 'Rokeya Sakhawat Hossain',
    year: 1905,
    era: 'Anti-Colonial Feminist Utopia',
    orb: 'sky',
    citationMLA:
      'Hossain, Rokeya Sakhawat. "Sultana’s Dream." The Indian Ladies’ Magazine, Madras, 1905.',
    editorialContext:
      'Verified 1905 public-domain excerpt. Sister Sara explains to Sultana how the women of Ladyland harnessed intellectual power and solar science rather than brute military force.',
    presetKeepIndices: [0, 3, 4, 12, 13, 21, 23, 24, 33, 35, 39, 40, 41, 49, 53, 54],
    text: 'We do not covet other people’s land, we do not fight for a piece of diamond though it may be a thousand-fold brighter than the Koh-i-Noor, nor do we grudge any ruler his peacock throne. We dive deep into the ocean of knowledge and try to find out the precious gems which nature has kept in store for us.',
  },
];
