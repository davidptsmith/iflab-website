// @ts-ignore 
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/about_page/AboutSection'
import Mission from '../components/about_page/Mission'
import Values from '../components/about_page/Values'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Nav from '../components/NavBar/Nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <div className='w-4/6 md:w-2/3 lg:mt-14 mt-8  mx-auto'>

        <AboutSection />

        <Values />

        <Mission />


      </div>
    </div>
  )
}

export default Home
