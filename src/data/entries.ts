export type OrbColor = 'mint' | 'peach' | 'lavender' | 'sky' | 'rose';

export interface PrimaryWork {
  title: string;
  author: string;
  year: number;
  translatorOrNote?: string;
  copyrightStatus: 'Public Domain' | 'Copyrighted (Fair-Use Citation)';
}

export interface CriticalLensPassage {
  id: string;
  passageNumber: string;
  workTitle: string;
  author: string;
  year: number;
  isPublicDomain: boolean;
  contextLabel: string;
  surfaceQuote: string;
  surfaceCitation: string;
  criticalLensPrompt: string;
  guidingQuestion: string;
}

export interface EssaySectionPrompt {
  numeral: string;
  heading: string;
  promptPlaceholder: string;
  guidingPoints: string[];
  suggestedWords: string;
}

export interface ArchivalImage {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  secondarySrc?: string;
  secondaryAlt?: string;
  secondaryCaption?: string;
}

export interface EssayEntry {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  era: string;
  orb: OrbColor;
  readingTime: string;
  publishedAt: string;
  subsection: string;
  subsectionSlug: string;
  subsectionDescription: string;
  archivalImage: ArchivalImage;
  primaryWorks: PrimaryWork[];
  editorialAbstract: string;
  sections?: EssaySectionPrompt[];
  criticalLensPassages?: CriticalLensPassage[];
  worksCitedMLA: string[];
}

export const ESSAY_ENTRIES: EssayEntry[] = [
  {
    number: '01',
    slug: '01-madwoman-to-glitch',
    title: 'The Madwoman in the Attic vs. The Glitch in the Machine',
    subtitle:
      'Tracing female confinement, medicalized surveillance, and subversive rebellion from nineteenth-century Gothic domesticity to late-twentieth-century Cyberfeminism.',
    era: '1st-Wave Gothic to 3rd-Wave Cyberfeminism',
    orb: 'mint',
    readingTime: '8 min read',
    publishedAt: '2026-10-19',
    subsection: 'Victorian Gothic & Confinement',
    subsectionSlug: 'gothic-confinement',
    subsectionDescription: 'Medical surveillance, the patriarchal rest cure, and domestic imprisonment from 1892 to cybernetic resistance.',
    archivalImage: {
      src: '/images/archival/charlotte-perkins-gilman-c-1900.jpg',
      alt: 'Charlotte Perkins Gilman photographic portrait c. 1900',
      caption: 'Charlotte Perkins Gilman (c. 1900), whose autobiographical Gothic novella challenged Dr. Silas Weir Mitchell\'s medicalized rest cure.',
      credit: 'Charles Fletcher Lummis / Adam Cuerden, public domain, via Wikimedia Commons',
      secondarySrc: '/images/archival/willow-bough.jpg',
      secondaryAlt: 'William Morris Willow Bough wallpaper pattern (1887)',
      secondaryCaption: 'Victorian domestic wallpaper design (William Morris, 1887, Met Museum CC0), evoking the claustrophobic nursery patterns of the 1892 narrative.',
    },
    primaryWorks: [
      {
        title: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        year: 1892,
        copyrightStatus: 'Public Domain',
      },
      {
        title: 'A Cyborg Manifesto',
        author: 'Donna Haraway',
        year: 1985,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 01 juxtaposes the barred colonial nursery of Charlotte Perkins Gilman’s 1892 feminist Gothic novella with the integrated circuit of Donna Haraway’s 1985 Socialist-Feminist manifesto, asking how patriarchal architectures diagnose female intellectual autonomy as pathology or system error.',
    sections: [
      {
        numeral: 'I',
        heading: 'The Architecture of the Rest Cure & Domestic Surveillance',
        promptPlaceholder:
          '[Author’s Entry Section I — Write your opening thesis comparing Gilman’s barred nursery to Haraway’s cybernetic grid (~200–250 words). Edit directly in src/content/essays/01-madwoman-to-glitch.md]',
        guidingPoints: [
          'Examine how physician-husband John enforces Silas Weir Mitchell’s "Rest Cure" by prohibiting writing and intellectual labor.',
          'Analyze the ancestral hall and former nursery (barred windows, bolted bedstead, rings in the wall) as an asylum disguised as domestic care.',
        ],
        suggestedWords: '200–250 words',
      },
      {
        numeral: 'II',
        heading: 'Textual Doubling: The Woman Behind the Pattern',
        promptPlaceholder:
          '[Author’s Entry Section II — Analyze the narrator’s projection onto the yellow wallpaper and Gilbert & Gubar’s "Madwoman" archetype (~250 words). Edit directly in src/content/essays/01-madwoman-to-glitch.md]',
        guidingPoints: [
          'Track how the wallpaper transforms from an aesthetic annoyance into a barred prison holding a creeping double.',
          'Discuss why peeling the wallpaper becomes an act of desperate counter-inscription when pen and paper are forbidden.',
        ],
        suggestedWords: '250 words',
      },
      {
        numeral: 'III',
        heading: 'From Organic Monster to Cybernetic Glitch',
        promptPlaceholder:
          '[Author’s Entry Section III — Synthesize Gilman’s nineteenth-century escape with Donna Haraway’s cyborg boundary breakdowns (~250 words). Edit directly in src/content/essays/01-madwoman-to-glitch.md]',
        guidingPoints: [
          'Contrast Victorian essentialist binaries (mind/body, male/female, reason/hysteria) with Haraway’s rejection of organic wholeness.',
          'Conclude on how the "madwoman" of 1892 evolves into the "glitch" in 1985—refusing patriarchal coding from within the network.',
        ],
        suggestedWords: '250 words',
      },
    ],
    criticalLensPassages: [
      {
        id: 'gilman-01',
        passageNumber: '01',
        workTitle: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        year: 1892,
        isPublicDomain: true,
        contextLabel: 'Public-Domain Primary Text · Rest Cure Prescription',
        surfaceQuote:
          '“John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster. You see he does not believe I am sick! And what can one do?”',
        surfaceCitation: 'Gilman, Charlotte Perkins. "The Yellow Wallpaper." The New England Magazine, Jan. 1892, p. 647.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how parenthetical confession ("dead paper") exposes the epistemic violence of nineteenth-century marital and medical authority.]',
        guidingQuestion:
          'How does the narrator’s secret diary function as an illicit counter-diagnosis against her husband’s clinical dismissal?',
      },
      {
        id: 'gilman-02',
        passageNumber: '02',
        workTitle: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        year: 1892,
        isPublicDomain: true,
        contextLabel: 'Public-Domain Primary Text · Gothic Spatial Confinement',
        surfaceQuote:
          '“By moonlight—the moon shines in all night when there is a moon—I wouldn’t know it was the same paper. At night in any kind of light, in twilight, candlelight, lamplight, and worst of all by moonlight, it becomes bars! The outside pattern I mean, and the woman behind it is as plain as can be.”',
        surfaceCitation: 'Gilman, Charlotte Perkins. "The Yellow Wallpaper." The New England Magazine, Jan. 1892, p. 653.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading contrasting solar/rational paternal order with lunar/nocturnal female recognition of the barred pattern.]',
        guidingQuestion:
          'Why does the sub-pattern only become legible by moonlight, and what does the "woman behind it" represent in feminist psychoanalysis?',
      },
      {
        id: 'haraway-01',
        passageNumber: '03',
        workTitle: 'A Cyborg Manifesto',
        author: 'Donna Haraway',
        year: 1985,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation from Donna Haraway’s "A Cyborg Manifesto" (1985) with page citation here]',
        surfaceCitation:
          'Haraway, Donna. "A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late Twentieth Century." Socialist Review, no. 80, 1985.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading connecting Haraway’s cyborg myth to the dismantling of naturalist gender binaries.]',
        guidingQuestion:
          'How does Haraway’s cyborg reframe technological alienation into an ironic political tool for feminist coalition?',
      },
    ],
    worksCitedMLA: [
      'Gilman, Charlotte Perkins. "The Yellow Wallpaper." The New England Magazine, vol. 11, no. 5, Jan. 1892, pp. 647–56.',
      'Gilbert, Sandra M., and Susan Gubar. The Madwoman in the Attic: The Woman Writer and the Nineteenth-Century Literary Imagination. Yale UP, 1979.',
      'Haraway, Donna. "A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late Twentieth Century." Socialist Review, no. 80, 1985, pp. 65–108.',
    ],
  },
  {
    number: '02',
    slug: '02-subaltern-body-battlefield',
    title: 'Subaltern Voices & The Body as a Battlefield',
    subtitle:
      'State violence, caste hierarchy, and corporeal resistance in Mahasweta Devi’s Draupadi and Arundhati Roy’s The God of Small Things.',
    era: 'Postcolonial & Subaltern Feminism',
    orb: 'lavender',
    readingTime: '9 min read',
    publishedAt: '2026-10-19',
    subsection: 'Postcolonial & Subaltern Bodies',
    subsectionSlug: 'subaltern-bodies',
    subsectionDescription: 'State violence, tribal insurgency, and the politicized female body across postcolonial South Asia.',
    archivalImage: {
      src: '/images/archival/kolkata-0.jpg',
      alt: 'Kolkata collotype postcard c. 1900',
      caption: 'Bengal in the early twentieth century (collotype postcard, CC BY 4.0), setting the geopolitical backdrop for Mahasweta Devi\'s subaltern literature.',
      credit: 'W. Roessler, Kolkata, CC BY 4.0, via Wikimedia Commons',
    },
    primaryWorks: [
      {
        title: 'Draupadi',
        author: 'Mahasweta Devi',
        year: 1978,
        translatorOrNote: 'Trans. Gayatri Chakravorty Spivak (1981)',
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
      {
        title: 'The God of Small Things',
        author: 'Arundhati Roy',
        year: 1997,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 02 examines how postcolonial feminist literature confronts the intersection of gender, indigenous/tribal dispossession, and caste endogamy—where the subaltern body is targeted by state and familial policing yet refuses silent erasure.',
    sections: [
      {
        numeral: 'I',
        heading: 'Rewriting the Epic: Dopdi Mejhen vs. Classical Sanskrit Myth',
        promptPlaceholder:
          '[Author’s Entry Section I — Write your analysis contrasting the Mahabharata’s royal Draupadi (rescued by divine intervention) with Mahasweta Devi’s Santhal rebel Dopdi Mejhen (~200–250 words). Edit in src/content/essays/02-subaltern-body-battlefield.md]',
        guidingPoints: [
          'Explain Gayatri Spivak’s translator foreword and the tension between metropolitan theory and tribal subaltern resistance.',
          'Examine how Senanayak embodies the intellectual bureaucrat who studies the tribal revolutionary only to destroy her.',
        ],
        suggestedWords: '200–250 words',
      },
      {
        numeral: 'II',
        heading: 'The Unclothed Body as Counter-Weapon',
        promptPlaceholder:
          '[Author’s Entry Section II — Analyze the final confrontation in Draupadi where Dopdi refuses to clothe herself before Senanayak (~250 words). Edit in src/content/essays/02-subaltern-body-battlefield.md]',
        guidingPoints: [
          'Discuss how Dopdi inverts the patriarchal script of custodial shame into terrifying indictment.',
          'Analyze why Senanayak’s epistemological mastery collapses in the face of her unarmed, unashamed presence.',
        ],
        suggestedWords: '250 words',
      },
      {
        numeral: 'III',
        heading: 'The Love Laws & Caste Policing in Ayemenem',
        promptPlaceholder:
          '[Author’s Entry Section III — Connect Devi’s critique of state violence to Arundhati Roy’s critique of the "Love Laws" in The God of Small Things (~250 words). Edit in src/content/essays/02-subaltern-body-battlefield.md]',
        guidingPoints: [
          'Examine how Ammu and Velutha transgress caste and patriarchal boundaries ("who should be loved, and how. And how much").',
          'Synthesize how both texts expose the complicity of postcolonial institutions in policing female desire and Dalit/Adivasi lives.',
        ],
        suggestedWords: '250 words',
      },
    ],
    criticalLensPassages: [
      {
        id: 'devi-01',
        passageNumber: '01',
        workTitle: 'Draupadi (Trans. Gayatri Chakravorty Spivak)',
        author: 'Mahasweta Devi',
        year: 1978,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation from Mahasweta Devi’s "Draupadi" (trans. Spivak) with page citation here]',
        surfaceCitation:
          'Devi, Mahasweta. "Draupadi." Translated by Gayatri Chakravorty Spivak, Critical Inquiry, vol. 8, no. 2, 1981, pp. 381–402.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Devi subverts the classical disrobing episode of the Mahabharata.]',
        guidingQuestion:
          'How does the absence of a male divine savior transform Dopdi’s final gesture into an unprecedented crisis for state authority?',
      },
      {
        id: 'roy-01',
        passageNumber: '02',
        workTitle: 'The God of Small Things',
        author: 'Arundhati Roy',
        year: 1997,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation from Arundhati Roy’s The God of Small Things (1997) regarding the "Love Laws" or "History House" with page citation here]',
        surfaceCitation: 'Roy, Arundhati. The God of Small Things. IndiaInk / Random House, 1997.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading analyzing how intimate domestic spaces reproduce colonial and caste hierarchies.]',
        guidingQuestion:
          'In what ways does Roy’s non-linear, fragmented narrative structure mirror trauma and the survival of "Small Things" against "Big Things"?',
      },
    ],
    worksCitedMLA: [
      'Devi, Mahasweta. "Draupadi." Translated by Gayatri Chakravorty Spivak, Critical Inquiry, vol. 8, no. 2, 1981, pp. 381–402.',
      'Roy, Arundhati. The God of Small Things. Random House, 1997.',
      'Spivak, Gayatri Chakravorty. "Can the Subaltern Speak?" Marxism and the Interpretation of Culture, edited by Cary Nelson and Lawrence Grossberg, U of Illinois P, 1988, pp. 271–313.',
    ],
  },
  {
    number: '03',
    slug: '03-room-of-ones-own-digital',
    title: "A Room of One's Own in the Algorithm Economy",
    subtitle:
      'Revisiting Virginia Woolf’s materialist thesis—five hundred pounds a year and a lock on the door—in an era of digital labor and algorithmic visibility.',
    era: 'Materialist & Modernist Feminism',
    orb: 'peach',
    readingTime: '7 min read',
    publishedAt: '2026-10-19',
    subsection: 'Materialist Modernism & Digital Labor',
    subsectionSlug: 'materialist-modernism',
    subsectionDescription: 'The political economy of female literary production: from Woolf\'s 500 pounds to the 2026 algorithmic creator economy.',
    archivalImage: {
      src: '/images/archival/george-charles-beresford-virginia-woolf-in-1902.jpg',
      alt: 'Virginia Woolf portrait in 1902 by George Charles Beresford',
      caption: 'Virginia Woolf in 1902 (George Charles Beresford restoration), who articulated the materialist necessity of money and space for women writers.',
      credit: 'George Charles Beresford / Adam Cuerden, public domain, via Wikimedia Commons',
    },
    primaryWorks: [
      {
        title: "A Room of One's Own",
        author: 'Virginia Woolf',
        year: 1929,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 03 interrogates Virginia Woolf’s foundational 1929 lecture at Newnham and Girton Colleges, translating her materialist critique of literary production—financial independence, spatial privacy, and the parable of Judith Shakespeare—into twenty-first-century digital authorship.',
    sections: [
      {
        numeral: 'I',
        heading: 'Material Preconditions of Genius: The Lock on the Door',
        promptPlaceholder:
          '[Author’s Entry Section I — Write your opening section analyzing Woolf’s materialist thesis that intellectual freedom depends upon material things (~200–250 words). Edit in src/content/essays/03-room-of-ones-own-digital.md]',
        guidingPoints: [
          'Discuss how Woolf demystifies Romantic "genius" by foregrounding property laws, Oxbridge gatekeeping, and unpaid domestic labor.',
          'Explain the significance of a lock on the door as boundary protection against constant social interruption.',
        ],
        suggestedWords: '200–250 words',
      },
      {
        numeral: 'II',
        heading: 'Judith Shakespeare & the Archive of the Unwritten',
        promptPlaceholder:
          '[Author’s Entry Section II — Examine Woolf’s thought experiment of Judith Shakespeare and why "Anonymous was often a woman" (~250 words). Edit in src/content/essays/03-room-of-ones-own-digital.md]',
        guidingPoints: [
          'Trace how an equally gifted sister in sixteenth-century London is thwarted not by lack of talent, but by structural exclusion from schooling, stage, and capital.',
          'Connect Woolf’s archival recovery to the overarching metaphor of "Jane’s Diary."',
        ],
        suggestedWords: '250 words',
      },
      {
        numeral: 'III',
        heading: 'The Digital Room: Algorithmic Rent & Attention Extraction',
        promptPlaceholder:
          '[Author’s Entry Section III — Extend Woolf’s 1929 materialist critique to contemporary digital platforms and the algorithm economy (~250 words). Edit in src/content/essays/03-room-of-ones-own-digital.md]',
        guidingPoints: [
          'Ask whether the internet provides a democratized "room of one’s own" or a glass room without a lock where attention and data are continuously extracted.',
          'Compare £500 a year (unconditional creative autonomy) with precarious creator monetization driven by engagement metrics.',
        ],
        suggestedWords: '250 words',
      },
    ],
    criticalLensPassages: [
      {
        id: 'woolf-01',
        passageNumber: '01',
        workTitle: "A Room of One's Own",
        author: 'Virginia Woolf',
        year: 1929,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot (Chapter 1 / Thesis)',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation from Virginia Woolf’s A Room of One’s Own (1929) regarding money and a room of one’s own with page citation here]',
        surfaceCitation: 'Woolf, Virginia. A Room of One’s Own. Hogarth Press, 1929.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Woolf’s fictional persona ("Mary Beton") disarms patriarchal academic authority through irony before delivering a sharp materialist critique.]',
        guidingQuestion:
          'Why does Woolf adopt a semi-fictional narrative persona rather than delivering a conventional academic treatise on women and fiction?',
      },
      {
        id: 'woolf-02',
        passageNumber: '02',
        workTitle: "A Room of One's Own",
        author: 'Virginia Woolf',
        year: 1929,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot (Chapter 3 / Judith Shakespeare)',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation from Virginia Woolf’s A Room of One’s Own (1929) on Judith Shakespeare or "Anon" with page citation here]',
        surfaceCitation: 'Woolf, Virginia. A Room of One’s Own. Hogarth Press, 1929.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Woolf exposes the silence of official historiography regarding working- and middle-class women’s lives.]',
        guidingQuestion:
          'How does filling in the blank shelves of the British Museum library become an act of feminist speculative historiography?',
      },
    ],
    worksCitedMLA: [
      'Woolf, Virginia. A Room of One’s Own. Hogarth Press, 1929.',
      'Marcus, Jane. Virginia Woolf and the Languages of Patriarchy. Indiana UP, 1987.',
    ],
  },
  {
    number: '04',
    slug: '04-speculative-wombs-utopia',
    title: 'Speculative Wombs & Dystopian Blueprints',
    subtitle:
      'Spatial inversions of purdah and reproductive totalitarianism in Rokeya Sakhawat Hossain’s Sultana’s Dream and Margaret Atwood’s The Handmaid’s Tale.',
    era: 'Feminist Speculative Fiction',
    orb: 'sky',
    readingTime: '8 min read',
    publishedAt: '2026-10-19',
    subsection: 'Speculative Utopias & Dystopian Biopolitics',
    subsectionSlug: 'speculative-dystopias',
    subsectionDescription: 'Alternative female political governance, anti-colonial science, and theocratic reproductive control.',
    archivalImage: {
      src: '/images/archival/kolkata-0.jpg',
      alt: 'Kolkata collotype postcard c. 1900',
      caption: 'Colonial Bengal at the turn of the twentieth century, the world Begum Rokeya Sakhawat Hossain inverted in Sultana\'s Dream (Madras, 1905).',
      credit: 'W. Roessler, Kolkata, CC BY 4.0, via Wikimedia Commons',
    },
    primaryWorks: [
      {
        title: "Sultana's Dream",
        author: 'Rokeya Sakhawat Hossain',
        year: 1905,
        copyrightStatus: 'Public Domain',
      },
      {
        title: "The Handmaid's Tale",
        author: 'Margaret Atwood',
        year: 1985,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 04 pairs Begum Rokeya Sakhawat Hossain’s 1905 anti-colonial feminist utopia Ladyland—where men are placed in mardana while women harness solar energy and botanical science—with Margaret Atwood’s 1985 dystopian Republic of Gilead.',
    sections: [
      {
        numeral: 'I',
        heading: 'From Zenana to Mardana: Satirical Inversion in Ladyland',
        promptPlaceholder:
          '[Author’s Entry Section I — Write your analysis of Rokeya Sakhawat Hossain’s 1905 feminist utopia Sultana’s Dream (~200–250 words). Edit in src/content/essays/04-speculative-wombs-utopia.md]',
        guidingPoints: [
          'Examine how Sister Sara exposes the illogic of strict purdah (zenana seclusion) by comparing men to unchecked lunatics.',
          'Highlight Hossain’s pioneering vision of eco-feminist science: solar concentrators, cloud condensers, and bloodless defense.',
        ],
        suggestedWords: '200–250 words',
      },
      {
        numeral: 'II',
        heading: 'Gilead’s Theocratic Architecture & Reproductive Extraction',
        promptPlaceholder:
          '[Author’s Entry Section II — Contrast Ladyland’s scientific liberation with Margaret Atwood’s Republic of Gilead in The Handmaid’s Tale (~250 words). Edit in src/content/essays/04-speculative-wombs-utopia.md]',
        guidingPoints: [
          'Analyze how Gilead reduces women to color-coded biological castes (Handmaids, Wives, Marthas, Unwomen) and outlaws female literacy.',
          'Discuss Atwood’s rule of "speculative fiction" that every atrocity in Gilead had a historical precedent.',
        ],
        suggestedWords: '250 words',
      },
      {
        numeral: 'III',
        heading: 'Utopia and Dystopia as Twin Critical Mirrors',
        promptPlaceholder:
          '[Author’s Entry Section III — Synthesize how feminist utopian and dystopian blueprints work together as political critique (~250 words). Edit in src/content/essays/04-speculative-wombs-utopia.md]',
        guidingPoints: [
          'Compare how both Sultana’s Dream and Offred’s taped testimony use framing devices to destabilize patriarchal normalcy.',
          'Conclude on why control over spatial mobility, education, and bodily autonomy defines the boundary between utopia and dystopia.',
        ],
        suggestedWords: '250 words',
      },
    ],
    criticalLensPassages: [
      {
        id: 'hossain-01',
        passageNumber: '01',
        workTitle: "Sultana's Dream",
        author: 'Rokeya Sakhawat Hossain',
        year: 1905,
        isPublicDomain: true,
        contextLabel: 'Public-Domain Primary Text · Inversion of Purdah',
        surfaceQuote:
          '“Suppose some lunatics escape from the asylum and begin to do all sorts of mischief to men, horses and other creatures; in that case what will your countrymen do?” “They will try to capture them and put them back into their asylum.” “Thank you! And do you think it is wise to keep sane people inside an asylum and let loose the insane?”',
        surfaceCitation:
          'Hossain, Rokeya Sakhawat. "Sultana’s Dream." The Indian Ladies’ Magazine, Madras, 1905.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Sister Sara uses Socratic irony to dismantle the patriarchal "protection" argument for female seclusion.]',
        guidingQuestion:
          'How does Hossain turn the colonial and patriarchal trope of female fragility on its head through logical reductio ad absurdum?',
      },
      {
        id: 'hossain-02',
        passageNumber: '02',
        workTitle: "Sultana's Dream",
        author: 'Rokeya Sakhawat Hossain',
        year: 1905,
        isPublicDomain: true,
        contextLabel: 'Public-Domain Primary Text · Feminist Technoscience',
        surfaceQuote:
          '“While the men were engaged in framing laws and making debates about the solar heat, the women in the Universities were actually manufacturing the instruments by which they could collect and store up the sunbeams.”',
        surfaceCitation:
          'Hossain, Rokeya Sakhawat. "Sultana’s Dream." The Indian Ladies’ Magazine, Madras, 1905.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading contrasting performative male militarism/bureaucracy with collaborative female scientific innovation in Ladyland.]',
        guidingQuestion:
          'Why is women’s access to universities and scientific laboratories central to Hossain’s real-world educational activism in Bengal?',
      },
      {
        id: 'atwood-01',
        passageNumber: '03',
        workTitle: "The Handmaid's Tale",
        author: 'Margaret Atwood',
        year: 1985,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation from Margaret Atwood’s The Handmaid’s Tale (1985) with page citation here]',
        surfaceCitation: 'Atwood, Margaret. The Handmaid’s Tale. McClelland and Stewart, 1985.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Offred’s secret reclamation of language ("Nolite te bastardes carborundorum" / Scrabble) resists state erasure.]',
        guidingQuestion:
          'How does the "Historical Notes" epilogue complicate our reading of Offred’s recorded voice?',
      },
    ],
    worksCitedMLA: [
      'Atwood, Margaret. The Handmaid’s Tale. McClelland and Stewart, 1985.',
      'Hossain, Rokeya Sakhawat. "Sultana’s Dream." The Indian Ladies’ Magazine, 1905. Reprinted in Sultana’s Dream and Padmarag: Two Feminist Utopias, translated by Roushan Jahan, Penguin Classics, 2005.',
    ],
  },
  {
    number: '05',
    slug: '05-reclaiming-the-monster',
    title: 'Reclaiming the Monster: Creation Anxiety & Female Autonomy',
    subtitle:
      'Patriarchal usurpation of birth, monstrous voice, and confessional resurrection in Mary Shelley’s Frankenstein and Sylvia Plath’s Ariel.',
    era: 'Romantic Proto-Feminism & Confessional Poetics',
    orb: 'rose',
    readingTime: '8 min read',
    publishedAt: '2026-10-19',
    subsection: 'Romantic Monstrosity & Confessional Poetics',
    subsectionSlug: 'romantic-monstrosity',
    subsectionDescription: 'Creation anxiety, maternal bereavement, and poetic rebellion from nineteenth-century Geneva to twentieth-century confessional verse.',
    archivalImage: {
      src: '/images/archival/mary-wollstonecraft-shelley.jpg',
      alt: 'Mary Wollstonecraft Shelley 1840 portrait by Richard Rothwell',
      caption: 'Mary Wollstonecraft Shelley (Richard Rothwell, 1840, National Portrait Gallery, public domain), who wrote Frankenstein at eighteen.',
      credit: 'Richard Rothwell, public domain, via Wikimedia Commons',
      secondarySrc: '/images/archival/frankenstein-1818-edition-title-page.jpg',
      secondaryAlt: 'Frankenstein first edition title page (1818)',
      secondaryCaption: 'Original 1818 anonymous title page of Frankenstein; or, The Modern Prometheus, published by Lackington, Hughes, Harding.',
    },
    primaryWorks: [
      {
        title: 'Frankenstein; or, The Modern Prometheus',
        author: 'Mary Shelley',
        year: 1818,
        copyrightStatus: 'Public Domain',
      },
      {
        title: 'Ariel',
        author: 'Sylvia Plath',
        year: 1965,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 05 traces the figure of the "monster" from Mary Shelley’s 1818 Romantic Gothic critique of solitary male procreation—particularly Victor Frankenstein’s violent destruction of the unfinished female creature—to Sylvia Plath’s fierce 1965 confessional self-resurrection.',
    sections: [
      {
        numeral: 'I',
        heading: 'Birth Without Women: Victor’s Workshop of Filthy Creation',
        promptPlaceholder:
          '[Author’s Entry Section I — Write your opening analysis of Mary Shelley’s Frankenstein as a feminist critique of Romantic Prometheanism (~200–250 words). Edit in src/content/essays/05-reclaiming-the-monster.md]',
        guidingPoints: [
          'Examine Ellen Moers’s and Anne K. Mellor’s readings of Frankenstein as a birth myth written by an eighteen-year-old daughter of Mary Wollstonecraft.',
          'Analyze how Victor bypasses maternal gestation only to abandon his newborn creature in horror.',
        ],
        suggestedWords: '200–250 words',
      },
      {
        numeral: 'II',
        heading: 'The Aborted Female Creature: Fear of Autonomous Female Desire',
        promptPlaceholder:
          '[Author’s Entry Section II — Analyze Volume III, Chapter 3 of Frankenstein, where Victor tears apart the unfinished female companion (~250 words). Edit in src/content/essays/05-reclaiming-the-monster.md]',
        guidingPoints: [
          'Examine Victor’s specific anxieties: that the female creature might possess an independent will, refuse the pact made before her creation, or birth a new lineage.',
          'Discuss why the silenced, dismembered female creature is the submerged feminist center of Shelley’s novel.',
        ],
        suggestedWords: '250 words',
      },
      {
        numeral: 'III',
        heading: 'Confessional Resurrection: Plath’s Ariel & Reclaiming the Monstrous Voice',
        promptPlaceholder:
          '[Author’s Entry Section III — Connect Shelley’s silenced female creature to Sylvia Plath’s confessional speakers in Ariel (~250 words). Edit in src/content/essays/05-reclaiming-the-monster.md]',
        guidingPoints: [
          'Trace how Plath transforms female rage, domestic containment, and bodily trauma into incandescent poetic authority.',
          'Conclude the 5-entry arc by showing how feminist literature reclaims the label of "monster" as an emblem of uncontained agency.',
        ],
        suggestedWords: '250 words',
      },
    ],
    criticalLensPassages: [
      {
        id: 'shelley-01',
        passageNumber: '01',
        workTitle: 'Frankenstein (1818 Edition)',
        author: 'Mary Shelley',
        year: 1818,
        isPublicDomain: true,
        contextLabel: 'Public-Domain Primary Text · Fear of Female Autonomy (Vol. III, Ch. 3)',
        surfaceQuote:
          '“She also might turn with disgust from him to the superior beauty of man; she might quit him, and he be again alone, exasperated by the fresh provocation of being deserted by one of his own species. Even if they were to leave Europe, and inhabit the deserts of the new world, yet one of the first results of those sympathies for which the daemon thirsted would be children, and a race of devils would be propagated upon the earth...”',
        surfaceCitation:
          'Shelley, Mary Wollstonecraft. Frankenstein; or, The Modern Prometheus. Lackington, Hughes, Harding, Mavor, & Jones, 1818, vol. 3, ch. 3.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of why Victor’s terror centers specifically on female free will, sexual choice, and reproductive autonomy.]',
        guidingQuestion:
          'Why does Victor fear the female creature’s independent contract violation even more than the male creature’s physical strength?',
      },
      {
        id: 'shelley-02',
        passageNumber: '02',
        workTitle: 'Frankenstein (1818 Edition)',
        author: 'Mary Shelley',
        year: 1818,
        isPublicDomain: true,
        contextLabel: 'Public-Domain Primary Text · Destruction of the Female Body (Vol. III, Ch. 3)',
        surfaceQuote:
          '“I trembled, and my heart failed within me; when, on looking up, I saw, by the light of the moon, the daemon at the casement. A ghastly grin wrinkled his lips as he gazed on me, where I sat fulfilling the task which he had allotted to me... trembling with passion, tore to pieces the thing on which I was engaged.”',
        surfaceCitation:
          'Shelley, Mary Wollstonecraft. Frankenstein; or, The Modern Prometheus. Lackington, Hughes, Harding, Mavor, & Jones, 1818, vol. 3, ch. 3.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Victor’s violent dismemberment of the female body preempts female subjectivity before she can draw breath.]',
        guidingQuestion:
          'How does the moonlight at the casement echo across Gothic feminist texts (such as Gilman’s The Yellow Wallpaper)?',
      },
      {
        id: 'plath-01',
        passageNumber: '03',
        workTitle: 'Ariel',
        author: 'Sylvia Plath',
        year: 1965,
        isPublicDomain: false,
        contextLabel: 'Copyrighted Text · Fair-Use Quotation Slot',
        surfaceQuote:
          '[Primary Quote Placeholder — Insert brief fair-use quotation (1–3 lines) from Sylvia Plath’s Ariel (1965) with line/page citation here]',
        surfaceCitation: 'Plath, Sylvia. Ariel. Faber and Faber, 1965.',
        criticalLensPrompt:
          '[Critical Lens Analysis Placeholder — Write your subtextual reading of how Plath’s speaker reclaims the demonized/monstrous female voice as an instrument of rebirth.]',
        guidingQuestion:
          'How does Plath invert the spectacle of male clinical/voyeuristic scrutiny into defiant self-authorship?',
      },
    ],
    worksCitedMLA: [
      'Mellor, Anne K. Mary Shelley: Her Life, Her Fiction, Her Monsters. Methuen, 1988.',
      'Plath, Sylvia. Ariel. Faber and Faber, 1965.',
      'Shelley, Mary Wollstonecraft. Frankenstein; or, The Modern Prometheus. 1818. Edited by J. Paul Hunter, W. W. Norton, 2012.',
    ],
  },
  {
    number: '06',
    slug: '06-womanist-poetics-somatic-memory',
    title: 'The Master’s Tools & The Flesh of Memory',
    subtitle:
      'Audre Lorde’s erotic lifeforce and Toni Morrison’s rememory confronting the racialized archive of slavery and maternal trauma.',
    era: 'Black Feminist Thought & Womanist Poetics',
    orb: 'lavender',
    readingTime: '8 min read',
    publishedAt: '2026-10-20',
    subsection: 'Black Feminist Thought & Somatic Archiving',
    subsectionSlug: 'black-feminism-somatic',
    subsectionDescription:
      'Interlocking oppressions, the erotic as an epistemological instrument, and reclaiming the wounded Black maternal body.',
    archivalImage: {
      src: '/images/archival/audre-lorde.jpg',
      alt: 'Audre Lorde portrait circa 1980 by K. Kendall',
      caption: 'Audre Lorde (circa 1980), poet, essayist, and warrior who theorized the erotic as power and exposed the limits of institutional white feminism.',
      credit: 'K. Kendall, CC BY-SA 3.0, via Wikimedia Commons',
      secondarySrc: '/images/archival/toni-morrison.jpg',
      secondaryAlt: 'Toni Morrison photograph by John Mathew Smith',
      secondaryCaption: 'Toni Morrison (photo by John Mathew Smith, 1986), Nobel laureate whose novel Beloved inscribed the unspeakable trauma of the enslaved maternal body.',
    },
    primaryWorks: [
      {
        title: 'Sister Outsider: Essays and Speeches',
        author: 'Audre Lorde',
        year: 1984,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
      {
        title: 'Beloved',
        author: 'Toni Morrison',
        year: 1987,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 06 bridges Audre Lorde’s 1979 warning that the master’s tools will never dismantle the master’s house with Toni Morrison’s profound excavation of chattel slavery in Beloved. Tracing how Schoolteacher’s pseudo-scientific ledger reduces the maternal body to livestock, the essay explores Baby Suggs’s sermon at the Clearing as the supreme reclamation of the sacred flesh.',
    worksCitedMLA: [
      'Lorde, Audre. Sister Outsider: Essays and Speeches. Crossing Press, 1984.',
      'Morrison, Toni. Beloved. Alfred A. Knopf, 1987.',
      'Sharpe, Christina. In the Wake: On Blackness and Being. Duke University Press, 2016.',
    ],
  },
  {
    number: '07',
    slug: '07-carrier-bag-ecofeminist-commons',
    title: 'The Carrier Bag vs. The Spear: Collecting the Earth',
    subtitle:
      'Ursula K. Le Guin’s narrative gathering vessel and Vandana Shiva’s seed sovereignty dismantling the patriarchal conqueror.',
    era: 'Ecofeminist Theory & Narrative Materialism',
    orb: 'mint',
    readingTime: '8 min read',
    publishedAt: '2026-10-20',
    subsection: 'Ecofeminism & The Carrier Bag Theory',
    subsectionSlug: 'ecofeminism-carrier-bag',
    subsectionDescription:
      'Rejecting the phallocentric hero-weapon narrative in favor of communal gathering, soil ecology, and living seed biodiversity.',
    archivalImage: {
      src: '/images/archival/ursula-le-guin.jpg',
      alt: 'Ursula K. Le Guin portrait by Marian Wood Kolisch',
      caption: 'Ursula K. Le Guin (Oregon State University, CC BY-SA 2.0), whose Carrier Bag Theory re-imagined literature as an unheroic vessel of sustenance.',
      credit: 'Marian Wood Kolisch / Oregon State University, CC BY-SA 2.0, via Wikimedia Commons',
      secondarySrc: '/images/archival/vandana-shiva.jpg',
      secondaryAlt: 'Dr. Vandana Shiva portrait by Daniel Schwen',
      secondaryCaption: 'Dr. Vandana Shiva (photo by Daniel Schwen, 2007), environmental activist and philosopher who mobilized rural women for seed sovereignty and bio-commons.',
    },
    primaryWorks: [
      {
        title: 'The Carrier Bag Theory of Fiction',
        author: 'Ursula K. Le Guin',
        year: 1986,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
      {
        title: 'Staying Alive: Women, Ecology and Development',
        author: 'Vandana Shiva',
        year: 1988,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 07 investigates the structural link between the techno-heroic conqueror narrative and planetary ecological crisis. Pairing Ursula K. Le Guin’s Carrier Bag Theory of Fiction with Vandana Shiva’s ecofeminist critique of industrial seed monopolies, the essay examines how peasant women in the Chipko movement embodied a radical politics of holding and sustenance against the spear of corporate extraction.',
    worksCitedMLA: [
      'Le Guin, Ursula K. "The Carrier Bag Theory of Fiction." 1986. Dancing at the Edge of the World, Grove Press, 1989, pp. 165–170.',
      'Mies, Maria, and Vandana Shiva. Ecofeminism. Fernwood Publications / Zed Books, 1993.',
      'Shiva, Vandana. Staying Alive: Women, Ecology and Development. Zed Books, 1988.',
    ],
  },
  {
    number: '08',
    slug: '08-borderlands-queer-mestiza',
    title: 'La Facultad at the Edge of Empire',
    subtitle:
      'Gloria Anzaldúa’s border wound and Cherríe Moraga’s theory in the flesh establishing mestiza consciousness and queer decolonial defiance.',
    era: 'Chicana & Decolonial Queer Feminism',
    orb: 'peach',
    readingTime: '8 min read',
    publishedAt: '2026-10-20',
    subsection: 'Borderlands & Queer Mestiza Consciousness',
    subsectionSlug: 'borderlands-mestiza',
    subsectionDescription:
      'Linguistic code-switching, nepantla, somatic queer resistance, and refusing colonial cartographies.',
    archivalImage: {
      src: '/images/archival/gloria-anzaldua.jpg',
      alt: 'Gloria Anzaldúa archival portrait',
      caption: 'Gloria Anzaldúa (circa 1987), Chicana tejana theorist who redefined borders as bleeding somatic wounds and theorized the new mestiza consciousness.',
      credit: 'Archival documentation plate, educational fair use',
    },
    primaryWorks: [
      {
        title: 'Borderlands / La Frontera: The New Mestiza',
        author: 'Gloria Anzaldúa',
        year: 1987,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
      {
        title: 'Loving in the War Years: Lo Que Nunca Pasó Por Sus Labios',
        author: 'Cherríe Moraga',
        year: 1983,
        copyrightStatus: 'Copyrighted (Fair-Use Citation)',
      },
    ],
    editorialAbstract:
      'Entry 08 examines the 1,950-mile US-Mexico border as a somatic laceration in Gloria Anzaldúa’s Borderlands and Cherríe Moraga’s theory in the flesh. Analyzing the transformative state of nepantla and the refusal to tame the wild bilingual tongue, the essay charts how queer Chicana writers transformed geographic exclusion into a liberating counter-cartography.',
    worksCitedMLA: [
      'Anzaldúa, Gloria. Borderlands / La Frontera: The New Mestiza. Spinsters / Aunt Lute, 1987.',
      'Moraga, Cherríe. Loving in the War Years: Lo Que Nunca Pasó Por Sus Labios. South End Press, 1983.',
      'Moraga, Cherríe, and Gloria Anzaldúa, editors. This Bridge Called My Back: Writings by Radical Women of Color. Persephone Press, 1981.',
    ],
  },
];

export function getEntryBySlug(slug: string): EssayEntry | undefined {
  return ESSAY_ENTRIES.find((entry) => entry.slug === slug);
}
