// @ts-ignore
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/about_page/AboutSection";
import Mission from "../components/about_page/Mission";
import Values from "../components/about_page/Values";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Nav from "../components/NavBar/Nav";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>if/Lab | About </title>
      <meta name="description" content="About if/lab"/>
    </Head>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>

      {/* <div className='w-4/6 md:w-2/3 lg:mt-14 mt-8  mx-auto'> */}

      <AboutSection />

      {/* <Mission /> */}
      {/* 
        <div className='bg-slate-100 w-screen mx-auto'>

                <Values />

        </div>
       */}

      {/* </div> */}
      <div className="snap-end">
        <Footer />
      </div>
    </>
  );
};

export default Home;
