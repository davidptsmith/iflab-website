
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/contact_page/ContactMap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
<div>
  <Navbar/>

   <ContactForm/>
   

  <Footer/>
</div>
  )
}

export default Home
