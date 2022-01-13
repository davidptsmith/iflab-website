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

  <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory ScrollingLayer">
    <div className="absolute w-screen pb-1 pr-8 ">
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





    <div className=" snap snap-y snap-start  h-full snap-mandatory " />

    <div id="Home" className=" snap snap-y snap-start  h-full snap-mandatory ">

      {/* 
      <Nav /> */}



      <div className=' bg-white prose max-w-none pt-24 '>


        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-auto w-10/12  lg:px-4 lg:h-screen py-12'>
          <div>

            <h1>
              Some Big Lofty Statement about if/lab
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid debitis, maxime alias in esse similique itaque? Nobis corrupti blanditiis sequi neque. Cumque itaque porro cum cupiditate quibusdam natus. Rem perspiciatis ut illo placeat nostrum, aliquid amet quisquam voluptate tempora, ad ab fuga obcaecati iste eveniet dolor rerum? Asperiores, illo.
            </p>
          </div>
          <div className='h-full object-cover'>
            <img className='h-full w-full' alt='Precinct Computational Art Project' src=".\images\HomePageImages\06.jpg" />
          </div>
        </div>


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

      <div className="snap-end">
        <Footer />
      </div>
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

