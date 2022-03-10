module.exports = {
  content: [
    './pages/index.tsx',
    './pages_app.tsx',
    './components/**/*.{html,js,jsx,tsx}',
    './pages/**/*.{html,js,jsx,tsx}',
    './pages/index.tsx', 
    './pages/_app.tsx',
    './index.html',
    './**/*.{html,jsx,tsx}',
    './styles/globals.css',
    './styles/Home.module.css'


  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
