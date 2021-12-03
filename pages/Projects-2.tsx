// @ts-ignore
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardPresenter from '../components/CardPresenter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PinterestPresenter from '../components/PinterestPresenter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className=" mx-auto">
        <PinterestPresenter />
      </div>
    </div>
  )
}

export default Home
