// @ts-ignore 
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/contact_page/ContactMap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Nav from '../components/NavBar/Nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>

      <Nav />
      <ContactForm />
      <div className="snap-end">
        <Footer />
      </div>
    </div>
  )
}

export default Home
