/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SNS Berlin Corporate Colors
        'digital-blue': '#005DA8',
        'berlin-orange': '#F36F21',
        'neutral-light': '#F5F5F5',
        'neutral-mid': '#E0E0E0',
        'neutral-dark': '#333333',
      },
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
        'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      }
    },
  },
  plugins: [],
}
