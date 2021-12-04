import Link from 'next/link'

export default function Project({ project }) {
  return (
    <div className=" overflow-hidden  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 ">

    <a href={`/Projects/${project.slug}`} className="">

        <img alt="iflab Project Image" className="max-h-full h-72  min-w-full align-bottom object-cover opacity-90" src={project.frontmatter.cover_image} />

        <div className="flex items-center shadow-lg justify-center h-full w-full top-0 absolute z-20 opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-50 hover:scale-105 hover:shadow-lg">
            <h3 className="lg:text-2xl xl:text-2xl 2xl:text-3xl md:text-2xl text-2xl p-2  font-bold  text-white z-50 text-center   uppercase">  {project.frontmatter.title}</h3>
        </div>

    </a>

</div>

    // <Link href={`/Projects/${project.slug}`} passHref  >
    //   <div className='flex flex-col '>

    //     <img src={project.frontmatter.cover_image} alt='' className=" h-72  min-w-full align-bottom object-cover opacity-90" />

    //     <h3 className='m-4  text-lg '>
    //       {project.frontmatter.title}
    //     </h3>

    //     <p className='text-sm  text-justify font-thin mx-4 '>
    //       {project.frontmatter.excerpt}
    //     </p>

    //     <div className="block mt-4 p-8">
    //       <div className="p-2 w-full h-10"></div>
    //     </div>

    //     <div className="absolute inset-x-0 bottom-0 ">
    //       <div className='flex flex-wrap   text-xs gap-2 m-4 '>
    //         {showTags(project)}
    //       </div>
    //     </div>

    //   </div>
    // </Link>

  )
}




function showTags(post) {
  return (
    post.frontmatter.tags.map(tag => (
      <div key={tag} className='bg-gray-100 h-8 p-2'>
        <p className='text-xs font-light text-gray-500 h-auto truncate'>
          {tag}
        </p>
      </div>
    )

    ))
}