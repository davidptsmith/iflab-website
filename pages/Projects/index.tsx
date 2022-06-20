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
    <div>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>

      <Head>
        <title>Iflab Projects</title>
        <meta name="description" content="Iflab Insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3 lg:mt-24  w-5/6 relative my-4 lg:my-0 mx-auto flex flex-row ">
        <h2 className="text-2xl ">Find Something That Interests You...</h2>
      </div>
    
      <div className="md:w-2/3 lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mb-6 mx-auto mt-4  pt-0 lg:mb-12 flex ">
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
          </div>
        </button>
      </div>

      <ul className="container lg:mt-24   flex flex-wrap  w-10/12 m-auto">
        {searchBlog(projects, text)}
      </ul>

      <div className="snap-end">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

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
        className="  flex-col flex   m-auto w-2/3  p-4"
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
        className="  flex-col flex  m-auto w-2/3 p-4"
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
    return filteredPosts.map((projects, index) => (
      // <div key={index} className='  ' >

      <motion.li key={index} className=" flex-grow  m-auto p-2 md:p-2" layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Project project={projects} key={index} />
        </motion.div>
      </motion.li>
      // </div>
    ));
  }
};

function applyFiler(setText, text) {
  setText("");
  setText(text);
}

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
      projects: projects.sort(sortByDate),
    },
  };
}
