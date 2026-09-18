import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E8DFD5',
          300: '#D7C7B7',
          400: '#C2AA94',
          500: '#A98D74',
          600: '#8E735B',
          700: '#725B47',
          800: '#5A4738',
          900: '#433429',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E6EDE6',
          200: '#CFDDCF',
          300: '#ABC3AB',
          400: '#83A383',
          500: '#648564',
          600: '#4E6A4E',
          700: '#3E543E',
          800: '#334433',
          900: '#2A372A',
        },
        clay: {
          50: '#FCF7F6',
          100: '#F9EEEB',
          200: '#F1D9D3',
          300: '#E4BAB0',
          400: '#D29283',
          500: '#BF6E5C',
          600: '#AB5442',
          700: '#8D4333',
          800: '#73392D',
          900: '#5F3229',
        },
        noir: {
          950: '#141312',
          900: '#1C1A18',
          800: '#2B2825',
          700: '#44403B',
          600: '#666159',
          500: '#8C857B',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
