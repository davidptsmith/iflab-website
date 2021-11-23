import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import Footer from '../components/Footer'
import ProjectPresenter from '../components/ProjectPresenter'




const Home: NextPage = () => {
  return (
<div>
  <Navbar/>
  <div>

  
  hello 
  <div >


    <ProjectPresenter/>
                
    </div>


  </div>
  <Footer/>
</div>
  )
}

export default Home
