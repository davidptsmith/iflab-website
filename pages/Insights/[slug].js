// @ts-ignore
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import ImagesCarousel from "../../components/Projects/ImagesCarousel";
import Nav from "../../components/NavBar/Nav";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Nav />

      <div className="mx-auto sm:w-6/12 w-11/12 prose">
        <Link href="/Insights">
          <a className=" font-light"> {"<--"} Go Back</a>
        </Link>

        <br />
        <div className="mt-8">
          <h1 className="text-xl  ">{title}</h1>
          <div className="font-light">Posted on {date}</div>
          {/* <img src={cover_image} alt={title} /> */}

          <div
            className="prose max-w-none mx-auto "
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>

          <br />

          <Link href="/Insights">
            <a className=" font-light mt-8 pt-8 text-right">
              {" "}
              See More {"-->"}{" "}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

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
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
