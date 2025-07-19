/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#111520',
        'card-bg': '#242B40',
        'card-hover': '#3C4869',
        'text-muted': '#8D9AAE',
        'text-date': '#5D687A',
      },
      fontFamily: {
        'sans': ['Prompt', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(0deg, rgba(17,21,32,1), rgba(17,21,32,0))',
      },
      height: {
        '74p': '74%',
      },
      width: {
        'calc-100-24': 'calc(100% - 24px)',
      },
    },
  },
  plugins: [],
}