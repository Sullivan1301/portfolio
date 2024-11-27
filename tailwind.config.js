/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryBg: {
          light: '#EDF2F6',
          dark: '#494953',
        },
        primaryText: {
          light: '#494953',
          dark: '#EDF2F6',
        },
        interactive: '#6A7EFC',
        accent: '#FF5656',
      },
    },
  },
  plugins: [],
};
