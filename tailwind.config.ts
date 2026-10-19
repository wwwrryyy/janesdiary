import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f5f5f5',
        'canvas-soft': '#fafafa',
        'canvas-deep': '#0c0a09',
        ink: '#0c0a09',
        primary: {
          DEFAULT: '#292524',
          active: '#0c0a09',
        },
        surface: {
          card: '#ffffff',
          strong: '#f0efed',
          dark: '#0c0a09',
          'dark-elevated': '#1c1917',
        },
        body: {
          DEFAULT: '#4e4e4e',
          strong: '#292524',
        },
        muted: {
          DEFAULT: '#777169',
          soft: '#a8a29e',
        },
        hairline: {
          DEFAULT: '#e7e5e4',
          soft: '#f0efed',
          strong: '#d6d3d1',
        },
        gradient: {
          mint: '#a7e5d3',
          peach: '#f4c5a8',
          lavender: '#c8b8e0',
          sky: '#a8c8e8',
          rose: '#e8b8c4',
        },
      },
      fontFamily: {
        serif: ['var(--font-eb-garamond)', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(0, 0, 0, 0.04)',
        elevated: '0 12px 32px rgba(12, 10, 9, 0.08)',
        modal: '0 24px 48px -12px rgba(12, 10, 9, 0.16)',
      },
      spacing: {
        section: '96px',
      },
      letterSpacing: {
        'tight-mega': '-1.92px',
        'tight-xl': '-0.96px',
        'tight-lg': '-0.36px',
        'tight-md': '-0.32px',
        editorial: '0.16px',
        'badge-upper': '0.96px',
      },
    },
  },
  plugins: [],
};

export default config;
