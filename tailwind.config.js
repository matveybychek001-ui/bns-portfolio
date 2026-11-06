/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'sans-serif'],
        display: ['Unbounded', 'Manrope', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pageIn: {
          '0%, 100%': { transform: 'translateY(10px)', opacity: '0.45' },
          '45%, 70%': { transform: 'translateY(0)', opacity: '1' },
        },
        barRise: {
          '0%, 100%': { transform: 'scaleY(0.28)' },
          '50%': { transform: 'scaleY(1)' },
        },
        cursorMove: {
          '0%, 100%': { transform: 'translate(8px, 58px)' },
          '35%': { transform: 'translate(92px, 18px)' },
          '70%': { transform: 'translate(48px, 36px)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.72)', opacity: '0.7' },
          '100%': { transform: 'scale(1.35)', opacity: '0' },
        },
        cell: {
          '0%, 100%': { backgroundColor: 'rgba(255,255,255,0.06)' },
          '40%': { backgroundColor: 'rgba(255,255,255,0.85)' },
        },
        frameShift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-18%)' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        page: 'pageIn 3.6s ease-in-out infinite',
        'page-late': 'pageIn 3.6s ease-in-out 0.45s infinite',
        'bar-rise': 'barRise 1.8s ease-in-out infinite',
        cursor: 'cursorMove 4.2s ease-in-out infinite',
        orbit: 'orbit 7s linear infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
        cell: 'cell 2.6s ease-in-out infinite',
        frames: 'frameShift 6s ease-in-out infinite',
        'grid-fade': 'gridFade 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
