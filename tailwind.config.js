/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground, 210 40% 98%))',
        },
        'scm-green': 'hsl(var(--scm-green))', // Special highlight color
      },
      fontFamily: {
        'alan-sans': ['Alan Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
