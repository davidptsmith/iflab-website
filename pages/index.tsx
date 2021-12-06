// @ts-ignore 
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
import Nav from "../components/NavBar/Nav"




const Home: NextPage = () => (

    <div className=' bg-white '>
  
  <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory ScrollingLayer">

<div className=' bg-white absolute z-50 w-full'>
  <Nav/>
</div>

      <section className='w-full h-screen pt-8 snap-mandatory snap-start' >
        <HeroSection />
      </section>

      <section className='w-full  snap-mandatory snap-start pt-8' >
        <KeyProjectsPresenter />
      </section>
      <section className='w-full  bg-blue-100 snap-mandatory snap-start pt-8' >

        <TestimonialPresenter />
      </section>
 
      <section className='w-full  bg-blue-100 snap-mandatory snap-start pt-8' >
        <FAQ />
      </section>
      <section className='w-full  snap-mandatory snap-start pt-8' >
        <ContactUs />
      </section>
      <section className='w-full  bg-blue-100 snap-mandatory snap-start pt-8' >
        <KeyProjectsPresenter />
      </section>

      <section className='w-full  bg-blue-100 snap-mandatory snap-end  pt-8' >
    <h2 className='font-semibold text-xl mt-12'>Contact Us </h2>

      <Footer />
      </section>
  </div>
  </div>

)

export default Home
