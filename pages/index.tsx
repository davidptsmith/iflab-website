import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import Footer from '../components/Footer'
import ProjectPresenter from '../components/ProjectPresenter'
import KeyProjectsPresenter from '../components/home_page/KeyProjectsPresenter'
import TestimonialPresenter from '../components/home_page/TestimonialPresenter'
import HeroSection from '../components/home_page/HeroSection'
import ContactUs from '../components/home_page/ContactUs'
import FAQ from '../components/home_page/FAQ'




const Home: NextPage = () => (
  <div>
    <div className=' bg-white w-full z-50 h-36'>

    </div>

    {/* <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory ScrollingLayer"> */}
      {/* <section className='w-full h-screen snap-start' > */}
        <HeroSection />
      {/* </section> */}

      {/* <section className='w-full h-screen snap-start' > */}
        <KeyProjectsPresenter />
      {/* </section>
      <section className='w-full h-screen bg-blue-100 snap-start' > */}

        <TestimonialPresenter />
      {/* </section>
      <section className='w-full h-screen snap-start ' > */}

      {/* </section>
      <section className='w-full h-screen bg-blue-100 snap-start' > */}
        <FAQ />
      {/* </section>
      <section className='w-full h-screen snap-start' > */}
        <ContactUs />
      {/* </section>
      <section className='w-full h-screen bg-blue-100 snap-start' > */}
        <KeyProjectsPresenter />
      {/* </section> */}
{/* 
    </div> */}



  </div>
)

export default Home
