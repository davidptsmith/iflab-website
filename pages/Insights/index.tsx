// @ts-ignore
import type { NextPage } from "next";
import Footer from "../../components/Footer";
import Head from "next/head";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Post from "../../components/blog/Post";
import { sortByDate } from "../../utils";
import { useState } from "react";
import { motion } from "framer-motion";
import NoImagesCard from "../../components/NoResultsCard";

import Nav from "../../components/NavBar/Nav";

const Home: NextPage = ({ posts }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>

      <Head>
        <title>Iflab Insights</title>
        <meta name="description" content="Iflab Insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3 lg:mt-24  w-5/6 relative my-4 lg:my-0 mx-auto flex flex-row ">
        <h2 className="text-2xl font-">Find Something That Interests You...</h2>
      </div>

      <div className="sm:flex m-auto content-center hidden sm:visible justify-items-start ">
        <div className="pt-2  md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mx-auto text-gray-600 shadow-md shadow-inner-md ">
          <input
            className="border-2  font-medium font-mono w-full border-gray-300 bg-white 
                    h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none 
                    focus:ring-2 focus:scale-105 group-hover::ring-offset-blue-400  focus:ring-offset-blue-400 "
            type="search"
            onChange={(e) => setText(e.target.value)}
            name="search"
            placeholder="Search"
          />
          <div className="absolute right-0 top-0 mt-6 mr-4">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mb-6 mx-auto mt-4 pt-0 lg:mb-12 flex ">
        <button
          className="mx-auto text-center font-light 
                       text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                       p-2 w-1/4  text-gray-600 
                       shadow-md 
                       hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                       "
          onClick={() => applyFiler(setText, "Architecture")}
        >
          Architecture
        </button>
        <button
          className="mx-auto text-center font-light 
                        text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                        p-2 w-1/4  text-gray-600 
                        shadow-md 
                        hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                        "
          onClick={() => applyFiler(setText, "Public Art")}
        >
          Public Art
        </button>
        <button
          className="mx-auto text-center font-light 
                        text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                        p-2 w-1/4  text-gray-600 
                        shadow-md shadow-inner-md 
                        hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                        "
          onClick={() => applyFiler(setText, "Fabrication")}
        >
          Fabrication
        </button>
        <button
          className="mx-auto text-center font-light 
                        text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                        p-2 w-1/4  text-gray-600 
                        shadow-md shadow-inner-md 
                        hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                        "
          onClick={() => applyFiler(setText, "")}
        >
          All
          <div className="absolute right-0 top-0  align-middle mt-3 mr-4"></div>
        </button>
      </div>

      <div className="lg:mt-24 ">{searchBlog(posts, text)}</div>

      <div className="snap-end">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

const searchBlog = (posts, text) => {
  //filter post by title, then by tags, then by description
  const filteredPosts = posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(text.toLowerCase()) ||
      post.frontmatter.tags.some((tag) => {
        return tag.toLowerCase().includes(text.toLowerCase());
      }) ||
      post.frontmatter.excerpt.toLowerCase().includes(text.toLowerCase())
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
          <NoImagesCard />
        </motion.div>
      </motion.li>
    );
  }
  if (filteredPosts.length === 1) {
    return (
      <ul className="container w-1/3   gap-x-8 gap-y-8 m-auto">
        {/* <ul className="container sm:w-10/12 w-11/12  gap-2 m-auto"> */}
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className=" overflow-hidden cursor-pointer h-full rounded-lg shadow-lg transition duration-500 ease-in-out transform  hover:shadow-2xl "
          >
            <motion.li className="m-auto " layout>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Post post={post} key={index} />
              </motion.div>
            </motion.li>
          </div>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="container sm:w-10/12 w-10/12  grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8 m-auto">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className=" overflow-hidden cursor-pointer h-full rounded-lg shadow-lg transition duration-500 ease-in-out transform  hover:shadow-2xl "
          >
            <motion.li className="m-auto "  transition={{delay:0.2 , duration: 0.5 }} layout>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Post post={post} key={index} />
              </motion.div>
            </motion.li>
          </div>
        ))}
      </ul>
    );
    // }
  }
};

function applyFiler(setText, text) {
  setText("");
  setText(text);
}

export async function getStaticProps() {
  //get files from post dir
  const files = fs.readdirSync(path.join("posts"));

  //get slug and front matter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
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
      posts: posts.sort(sortByDate),
    },
  };
}
