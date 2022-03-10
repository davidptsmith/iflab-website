import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Nav from '../components/NavBar/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
  
  <Component {...pageProps} />

  </>
  )
}

export default MyApp
