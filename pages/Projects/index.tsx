// @ts-ignore 
import type { NextPage } from 'next'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

import Project from "../../components/Projects/Project"

import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

import { sortByDate } from "../../utils"
import { useState } from 'react'
import { motion } from 'framer-motion';
import NoImagesCard from '../../components/NoResultsCard'
import Nav from '../../components/NavBar/Nav'

const Home: NextPage = ({ projects }) => {

  const [text, setText] = useState("");

  return (
    <div>
    <Nav />
      <Head>
        <title>Iflab Projects</title>
        <meta name="description" content="Iflab Insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className=" md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3 lg:mt-24  w-5/6 relative my-4 lg:my-0 mx-auto flex flex-row ">
        <h2 className="text-2xl ">
          Find Something That Interests You...
        </h2>

      </div>
      {/* 

      <div className="flex m-auto content-center justify-items-start ">

        <div className="pt-2  md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mx-auto text-gray-600 shadow-md shadow-inner-md ">
          <input className="border-2  font-medium font-mono w-full border-gray-300 bg-white 
                    h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none 
                    focus:ring-2 focus:scale-105 group-hover::ring-offset-blue-400  focus:ring-offset-blue-400 "
            type="search" onChange={e => setText(e.target.value)} name="search" placeholder="Search" />
          <div className="absolute right-0 top-0 mt-6 mr-4">
            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
              version="1.1" id="Capa_1" x="0px" y="0px"
              viewBox="0 0 56.966 56.966" xmlSpace="preserve"
              width="512px" height="512px">
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </div>
        </div>
      </div> */}


      <div className="md:w-2/3 lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mb-6 mx-auto mt-4  pt-0 lg:mb-12 flex " >
        <button
          className="insightsFilterButton"
          onClick={() => applyFiler(setText, "Architecture")}
        >
          Architecture
        </button>
        <button
          className="insightsFilterButton"
          onClick={() => applyFiler(setText, "Public Art")}
        >
          Public Art
        </button>
        <button
          className="insightsFilterButton"
          onClick={() => applyFiler(setText, "Fabrication")}
        >
          Fabrication
        </button>
        <button
          className="insightsFilterButton"
          onClick={() => applyFiler(setText, "")}
        >
          All
          <div className="absolute right-0 top-0 align-middle mt-3 mr-4">

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 12 12">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg> */}
          </div>
        </button>
      </div>


      <ul className="container lg:mt-24   flex flex-wrap  w-10/12 m-auto">
        {searchBlog(projects, text)}
      </ul>



    </div>
  )
}

export default Home



const searchBlog = (projects, text) => {

  //filter projects by title, then by tags, then by description
  const filteredPosts = projects.filter(projects => projects.frontmatter.title.toLowerCase().includes(text.toLowerCase()) ||
    projects.frontmatter.tags.some((tag) => {
      return tag.toLowerCase().includes(text.toLowerCase())
    }
    ) ||
    projects.frontmatter.excerpt.toLowerCase().includes(text.toLowerCase())
  )

  if (filteredPosts.length == 0) {
    return (
      <motion.li className="  flex-col flex   m-auto w-2/3  p-4" key="999" layout >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {/* <h3>{doc.FullName}</h3>
        <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
          < NoImagesCard />
        </motion.div>

      </motion.li>
    )
  }
  if (filteredPosts.length === 1) {
    return filteredPosts.map((projects, index) => (

      <motion.li className="  flex-col flex  m-auto w-2/3 p-4" key={index} layout >

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>

          <Project project={projects} key={index} />

          {/* <h3>{doc.FullName}</h3>
                  <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
        </motion.div>
      </motion.li>
    ))
  }
  else {
    return filteredPosts.map((projects, index) => (
      // <div key={index} className='  ' >

      <motion.li key={index} className=" flex-grow  m-auto p-2 md:p-4" layout >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Project project={projects} key={index} />

        </motion.div>
      </motion.li>
      // </div>

    )



    )
  }
}


function applyFiler(setText, text) {
  setText("")
  setText(text)
}


export async function getStaticProps() {

  //get files from post dir 
  const files = fs.readdirSync(path.join('projects'))

  //get slug and front matter from projects 
  const projects = files.map(filename => {

    //create slug
    const slug = filename.replace('.md', "")

    const markdownWithMeta = fs.readFileSync(path.join('projects', filename,), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      projects: projects.sort(sortByDate),
    }
  }
}