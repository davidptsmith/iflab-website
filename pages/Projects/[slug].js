// @ts-ignore
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ProjectTable from "../../components/Projects/ProjectTable";
import ImagesCarousel from "../../components/Projects/ImagesCarousel";
import Nav from "../../components/NavBar/Nav";
import Footer from "../../components/Footer";
import {AltTextFromImage} from "../../components/Utilities/Helpers"

export default function ProjectPage({
  frontmatter: { title, date, cover_image, aside_image, tables },
  slug,
  content,
  imagePaths,
}) {
  const coverObj = { cover_image };

  return (
    <main>
      <Head>
        <title>if/Lab | {title}</title>
        <meta name="description" content="if/lab Projects" />
      </Head>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>

      {/* <Link href='/Projects'>
        <a className=' font-light'> {"<--"} Go Back</a>
      </Link>
 */}

      <div>
        <div className=" prose max-w-none lg:mt-12 mx-auto md:w-10/12 w-11/12 ">
          <div className=" flex flex-col-reverse md:grid md:grid-cols-5 mt-14 gap-8">
            <div className="h-full md:col-span-3 overflow-hidden md:pr-4">
              <img
                className="w-full object-cover hidden md:visible "
                src={cover_image}
                alt={`If/lab Project Image ${title}`}
              />

              {/* <ImagesCarousel CarouselData={imagePaths} /> */}
              <div className="container  w-full flex flex-wrap  m-auto">
                {imageGrid(imagePaths)}
              </div>
            </div>
            <div className="md:border-l-2 md:col-span-2  prose max-w-none md:pl-16 md:pt-8 w-full">
              {/* image is hidden on larger screens */}
              <div className="-mt-20 mx-auto mb-12 h-96 visible md:hidden ">
                <img
                  className="  mx-auto object-cover  h-full visible md:hidden "
                  src={cover_image}
                />
              </div>
              <h1>{title}</h1>
              <ProjectTable items={tables.items} />
              {/* Images referenced in the text will not be visible on the larger screens. These however will be filtered throughout on small screens to break up the post */}
              <div className=" hidden  md:inline ">
                {/* Project text */}
                <div
                  className="prose  text-justify mt-24 prose-img:md:inline prose-img:hidden 
            prose-h2:text-3xl 
            prose-h2:border-b
            prose-h2:py-2
            prose-h2:Accordion"
                  dangerouslySetInnerHTML={{ __html: marked(content) }}
                ></div>
              </div>
            </div>
          </div>

          <br />
          <div className="w-full "></div>
        </div>

        <div className="text-right m-24 sm:w-2/3 w-11/12 mx-auto  mt-14">
          <Link href="/Projects">
            <a className=" font-light underline"> See More Projects </a>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

const imageGrid = (imagePaths) => {
  return new Array(
    imagePaths
      .filter((images) => images.image.includes("cover_image.jpg"))
      .map((images, index) => (
        <motion.div
          key={index}
          className="w-full overflow-hidden m-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            alt="iflab Project Image"
            className="object-cover   md:w-full opacity-90"
            src={images.image}
          />
        </motion.div>
      )),
    imagePaths
      .filter((images) => !images.image.includes("cover_image.jpg"))
      .map((images, index) => (
        <motion.div
          key={index}
          className="w-full overflow-hidden m-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            // alt="iflab Project Image"
            className="object-cover   md:w-full opacity-90"
            src={images.image}
            alt={AltTextFromImage(images.image)}
          />
        </motion.div>
      ))
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // get markdown content

  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  //create image path
  const imagePath = path.join("public/images/projects/", frontmatter.title);

  //get files from post dir
  const images = fs.readdirSync(imagePath);

  const imagePaths = images.map((image) => {
    return {
      image: "/images/projects/" + frontmatter.title + "/" + image,
    };
  });

  return {
    props: {
      frontmatter,
      slug,
      content,
      imagePaths,
    },
  };
}
