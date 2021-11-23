
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
<div>
  <Navbar/>
    <div>
        Contact 
    </div>
  <Footer/>
</div>
  )
}

export default Home
