/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'side-scroll': 'sideScroll 30s linear infinite',
      },
      keyframes: {
        sideScroll: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        blender: ['Blender Pro'],
      },
      cursor: {
        default: 'url(./assets/cursor.svg) 11 11, default',
      },
      colors: {
        'cp-text': '#CDD788',
        'cp-overlay': '#5FA5A9',
        'cp-header-bg': '#2F2F21',
        'cp-bg': '#111417',
        'cp-border': '#6A6A55',
        'cp-light-border': '#41403A',
        'cp-yellow': '#D6EF64',
        'horizontal-hl': '#292824',
        'vertical-hl': '#333846',
      },
    },
  },
};
