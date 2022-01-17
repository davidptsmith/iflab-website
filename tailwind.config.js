module.exports = {
  content: [
       // Example content paths...
       './pages/**/*.{tsx,ts,jsx,js}',
    './components/**/*.{tsx,ts,jsx,js}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/typography'), 
  require('@tailwindcss/aspect-ratio'), 
],

}
