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

// @ts-ignore 
import fs from 'fs'
import path from 'path'
import HeroCarousel from '../components/home_page/HeroCarousel'



const Home: NextPage = ({ imagePaths }) => (
  <>
    <div className="max-h-screen snap snap-y snap-start snap-mandatory ScrollingLayer">

      <header className=' h-screen w-full flex z-50  absolute'>
        <HeroCarousel CarouselData={imagePaths} />
      </header>

      <div className='h-screen' />
    </div>




    <a  id="Home" className="max-h-screen snap-start snap snap-y snap-mandatory relative ScrollingLayer">

      <Nav />

    </a>
    <div className=' bg-white prose max-w-none '>





      {/* <section className='w-full lg:h-screen  snap-mandatory snap-start pt-8' > */}
      <section id='Key-Projects'>
        
      <KeyProjectsPresenter />
      </section>
      {/* </section> */}
      {/* <section className='w-full  bg-blue-100 snap-mandatory snap-start pt-8' > */}

      <TestimonialPresenter />
      {/* </section> */}

      {/* <section className='w-full  bg-blue-100 snap-mandatory snap-start pt-8' > */}
      <FAQ />
      {/* </section> */}
      {/* <section className='w-full  snap-mandatory snap-start pt-8' > */}
      <ContactUs />
      {/* </section> */}


      {/* <section className='w-full  bg-blue-100 snap-mandatory snap-end  pt-8' > */}


      {/* <Footer /> */}
      {/* </section> */}
      {/* </div> */}
    </div>
  </>


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

