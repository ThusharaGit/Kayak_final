/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        niramit: ['Niramit', 'sans-serif'],
      },
    },
    colors: {
      'main-text-light': 'var(--main-text-light)',
      'main-text-dark': 'var(--main-text-dark)',
      'link-hover': 'var(--link-hover)',
      'accent-green': 'var(--accent-green)',
      'banner-yellow': 'var(--banner-yellow)',
      'footer-bg': 'var(--footer-bg)',
      'bg-color': 'var(--bg-color)',
      'bg-mobil-menu': 'var(--bg-mobil-menu)',
      'red': 'red',
    },
  },
  plugins: [],
}
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         niramit: ['Niramit', 'sans-serif'],
//       },
//     },
//   },
//   // ...
// }
