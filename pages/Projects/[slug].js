// @ts-ignore 
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import ProjectTable from '../../components/Projects/ProjectTable'

export default function ProjectPage({
  frontmatter: { title, date, cover_image, aside_image, tables },
  slug,
  content,
}) {
  console.log(tables)
  return (
    <>
      <Link href='/Projects'>
        <a className=' font-light'> {"<--"} Go Back</a>
      </Link>

      {/* image removed? it does look cleaner? */}
      <img src={cover_image} className="modalheroimage w-full  object-cover " alt="This is a project" />



      <div className=' prose max-w-none mt-24  mx-auto sm:w-2/3 w-11/12 '>

        <h1>{title}</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-14 gap-8'>

          <ProjectTable items={tables.items} />

          <img src={aside_image} />

        </div>

        <br />
        <div className=''>
          {/* <div className='prose mb-8'>Posted on {date}</div> */}
          {/* <img src={cover_image} alt={title} /> */}

          <div className='prose  max-w-none  mx-auto' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          {/* <div className='prose prose mx-auto' dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}

        </div>


        <div className='text-right   mt-14'>
          <Link href='/Projects'>
            <a className=' font-light '>  See More Projects {"-->"} </a>
          </Link>
        </div>
      </div>

    </>
  )
}




export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
