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
import Services from '../components/home_page/Services'
import Nav from "../components/NavBar/Nav"

// @ts-ignore 
import fs from 'fs'
import path from 'path'
import HeroCarousel from '../components/home_page/HeroCarousel'
import ParallaxImageBreak from '../components/home_page/ParallaxImageBreak'
import ValueStatement from '../components/home_page/ValueStatement'



const Home: NextPage = ({ imagePaths }) => (

  <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory ScrollingLayer">
    <div className="absolute w-screen pb-1  pr-4 ">
      <div className=' bg-white'>
        <Nav />
      </div>
    </div>


    <section className=" h-screen snap snap-y snap-start  snap-mandatory relative  ">

      <header className=' h-screen w-full flex z-50  absolute'>
        <HeroCarousel CarouselData={imagePaths} />
      </header>

      <div className='h-screen' />
    </section>



    <div className=" snap snap-y snap-start  h-full snap-mandatory w-full" />

    <div id="Home" className=" snap snap-y snap-start w-full h-full snap-mandatory ">



      <div className=' bg-white prose full max-w-none pt-24  '>
        <ValueStatement />


        <ParallaxImageBreak imageNumber={3} />

        {/* <section className='w-full h-full snap-mandatory snap-start ' > */}
        <KeyProjectsPresenter />
        {/* </section> */}

        <ParallaxImageBreak imageNumber={4} />

        {/* <section className='w-full h-full snap-mandatory snap-start ' > */}
        <TestimonialPresenter />
        {/* </section> */}


        <ParallaxImageBreak imageNumber={1} />


        {/* <section className='w-full h-full snap-mandatory snap-start ' > */}
        <Services />
        {/* </section> */}

        <ParallaxImageBreak imageNumber={2} />

        {/* <section className='w-full h-full snap-mandatory snap-start ' > */}
        <ContactUs />
        {/* </section> */}


      </div>
      <section className='snap-end' >
      <Footer />
      </section>

      </div>

    


   
  </main>



)

export default Home


export async function getStaticProps() {

  // Get the hero image paths 
  const testFolder = 'public/images/HomeHeroImages';

  const imagePaths = fs.readdirSync(testFolder).map(image => {
    return (
      {
        image: "/images/HomeHeroImages/" + "/" + image
      }
    )
  })

  //pass them as props 
  return {
    props: {
      imagePaths
    },
  }
}

