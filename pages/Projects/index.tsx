// @ts-ignore
import type { NextPage } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Image from "next/image";

import Project from "../../components/Projects/Project";


import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { sortByDate } from "../../utils";
import { useState } from "react";
import { motion } from "framer-motion";
import NoImagesCard from "../../components/NoResultsCard";
import Nav from "../../components/NavBar/Nav";

const Home: NextPage = ({ projects }) => {
  const [text, setText] = useState("");

  return (
    <main>
      <Head>
        <title>if/Lab | Projects</title>
        <meta name="description" content="if/lab Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>


      <div className=" md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3 lg:mt-24  w-5/6 relative my-4 lg:my-0 mx-auto flex flex-row ">
        <h2 className="text-3xl mb-4 w-full mx-auto text-center">
          if/Lab Projects
        </h2>
      </div>

      <div className="md:w-2/3 lg:w-2/3 xl:w-1/3 2xl:w-1/3 w-5/6 relative mb-6 mx-auto mt-4  pt-0 lg:mb-12 h-full">
        {FilterButtons(setText)}
      </div>

      <ul className="container lg:mt-24   flex flex-wrap  w-10/12 m-auto">
        {searchBlog(projects, text)}
      </ul>

      <div className="snap-end pt-12 lg:pt-24" >
        <Footer />
      </div>
    </main>
  );
};

export default Home;


function returnCards(filteredPosts) {
  return filteredPosts.map((projects, index) => (
    // <div key={index} className='  ' >
    <motion.div
      key={index} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Project project={projects} key={index} />
    </motion.div>

    // </div>
  ));
}

const searchBlog = (projects, text) => {
  //filter projects by title, then by tags, then by description
  const filteredPosts = projects.filter(
    (projects) =>
      projects.frontmatter.title.toLowerCase().includes(text.toLowerCase()) ||
      projects.frontmatter.tags.some((tag) => {
        return tag.toLowerCase().includes(text.toLowerCase());
      }) ||
      projects.frontmatter.excerpt.toLowerCase().includes(text.toLowerCase())
  );

  if (filteredPosts.length == 0) {
    return (
      <motion.li
        className="  flex-col flex   m-auto w-full md:w-2/3 xl:w-1/3  p-4"
        key="999"
        layout
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* <h3>{doc.FullName}</h3>
        <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
          <NoImagesCard />
        </motion.div>
      </motion.li>
    );
  }
  if (filteredPosts.length === 1) {
    return filteredPosts.map((projects, index) => (
      <motion.li
        className="  flex-col flex  m-auto w-full md:w-2/3 xl:w-1/3 p-4"
        key={index}
        layout
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Project project={projects} key={index} />

          {/* <h3>{doc.FullName}</h3>
                  <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
        </motion.div>
      </motion.li>
    ));
  } else {
    filteredPosts.sort(compareStrings);
    return (
      <motion.div
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-auto w-full gap-2  md:gap-2"
        // layout
        // transition={{ delay: 0.1, duration: 0.5 }}
      >
        {returnCards(filteredPosts)}
      </motion.div>
    );
  }
};


export async function getStaticProps() {
  //get files from post dir
  const files = fs.readdirSync(path.join("projects"));

  //get slug and front matter from projects
  const projects = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    
    return {
      slug,
      frontmatter,
    };
  });
  
  return {
    props: {
      // projects: projects 
      projects: projects.filter(checkShowProject).sort(),
    },
  };
}

function compareStrings( a, b ) {
  if ( a.frontmatter.date.padStart(2, "0") < b.frontmatter.date.padStart(2, "0") ){
    return -1;
  }
  if ( a.frontmatter.date.padStart(2, "0") > b.frontmatter.date.padStart(2, "0") ){
    return 1;
  }
  return 0;
}


function checkShowProject(project){
  return project.frontmatter.ShowProject == true ? true : false
}


const tags = [
  "Architecture",
  "Public Art",
  "Urban Design",
  "Education",
  "Digital Fabrication",
  "Automation",
  "Research",
  "Timber",
];

function FilterButtons(setText) {
  return <div className="flex flex-wrap  ">{returnButtons(setText)}</div>;
}

function returnButtons(setText) {
  let arr = [];
  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index];
    arr.push(
      <button
        key={index}
        className="insightsFilterButton"
        onClick={() => applyFiler(setText, tag)}
      >
        {tag}
      </button>
    );
  }
  arr.push(
    <button
      className="insightsFilterButton grow max-w-[400px] "
      key={999}
      onClick={() => applyFiler(setText, "All")}
    >
      All Projects
    </button>
  );

  arr.push(<div key={9999} className="grow lg:grow-0 lg:hidden" />);
  return arr;
}

function applyFiler(setText, text) {
  setText("");
  if (text == "All") {
    setText("");
  } else {
    setText(text);
  }
}
