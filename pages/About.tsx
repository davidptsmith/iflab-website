
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
         <div className="w-2/3 m-auto justify-items-center">
              <h1 className="font-semibold text-2xl tracking-widest m-4 tracking-tight text-black md:px-12 px-2  mx-auto lg:text-center text-left  lg:my-8">About if/Lab</h1>

              {/* about paragraph text */}
              <div className=" lg:text-justify md:text-justify text-left  font-medium text-gray-600 mx-auto sm:overflow-x-auto  xs:h-48 px-2 lg:mt-8 md:px-12">
              <p>
              If/LAB is a multidisciplinary design and consultancy company with a focus on the use of software for the purposes of design, manufacture and building. if/LAB currently focuses on art and architecture, and aim to continually be at the forefront of innovation.
              </p>
              <br/>
              <p>
              We see artwork as an opportunity to develop our computational design and digital fabrication research practices. Public artworks are an ideal scale for research and development. 
              </p>
              <br/>
              <p>
              If/LAB’s goals are to work across project types of all scales to create innovative spaces that transform experience. Our core values reflect a strong commitment to innovation and collaboration.
              </p>
                <br/>
                <p>
                We are a young, innovative office intent on creating transformative spaces, whilst being committed towards sustainable development, and always seeking to improve the working and living conditions of people with our design solutions. 
                </p>
                <br/>
                <p>
                Our complex and unique approach allows us as designers to create the unimaginable. Traditional design tools limit designers in terms of conceptual thinking and representation. Design coding, on the other hand, allows the designer to explore processes by which new and coherent structures, patterns and properties ‘emerge’ from within complex systems.
                </p>
                <br/>
                <p>
                Digital tools bring new and unique approaches to design, allowing our team to embed intelligence into our proposals - both conceptually and technically. In the world of mass customisation, algorithmic design provides opportunities to explore and realise complex doubly curved surfaces, unique complex joints and thousands of unique pieces digitally, with the ability to easily translate the digital model to the physical world through digital fabrication techniques. 
                </p>

              </div>
                <div>

                </div>
         </div>
         </div>
  <Footer/>
  </div>
  )
}

export default Home
