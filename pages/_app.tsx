import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Nav from '../components/NavBar/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
  {/* <Nav/> */}
  <Component {...pageProps} />
   {/* <Footer /> */}
  </>
  )
}

export default MyApp
