/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {  
    extend: {
      colors: {
        'clr-1': '#XXXXX',
        'clr-2': '#XXXXX',
        'clr-3': '#XXXXX',
        'clr-4': '#XXXXX',
        'clr-5': '#XXXXX',
        'neutral-1': '#XXXXX',
        'neutral-2': '#XXXXX',
        'neutral-3': '#XXXXX',
        'neutral-4': '#XXXXX',
        'neutral-5': '#XXXXX',      
      },
      fontSize: {
        '14': '.875rem',
        '15': '.9375rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
        '72': '4.5rem',
      },
      screens: {
        'md': '650px',
        'lg': '1000px',
      },  
    },
  },
  plugins: [],
}
