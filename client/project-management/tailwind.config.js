/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d6b526",
          "secondary": "#c7a1f4",
          "accent": "#cce8ff",
          "neutral": "#221424",
          "base-100": "#4b4b4e",
          "info": "#5685d7",
          "success": "#78deca",
          "warning": "#f6b346",
          "error": "#fa3872",
        },
      },
    ],
  },
}
