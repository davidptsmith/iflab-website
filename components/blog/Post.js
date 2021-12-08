import Link from 'next/link'

export default function Post({ post }) {
  return (
    <Link href={`/Insights/${post.slug}`} passHref  >
      <div className='flex flex-col  '>



        <img src={post.frontmatter.cover_image} alt='' className="h-40  md:h-72 min-w-full align-bottom object-cover opacity-90" />

        {/* <div className='m-4 text- font-thin'>Posted on {post.frontmatter.date}</div> */}


        <h3 className='mx-4 md:pt-4 pt-2 font-semibold md:text-lg '>
          {post.frontmatter.title}
        </h3>


        <p className='md:text-sm  text-xs text-gray-600  text-justify font-normal mx-4 m-2 '>
          {post.frontmatter.excerpt}
        </p>


        <div className="sm:block hidden md:mt-4 mt-2 p-8">
          <div className="p-2 w-full h-32 md:h-10"></div>
        </div>

        <div className=" sm:absolute inset-x-0 bottom-0 ">

          <div className='flex flex-wrap gap-2 m-4 pb-4 '>
            {showTags(post)}
          </div>

        </div>



      </div>
    </Link>

  )
}




function showTags(post) {
  return (
    post.frontmatter.tags.map(tag => (
      <div key={tag} className=''>
        <p className='text-xs text-gray-400 font-light underline lowercase  truncate'>
          {tag}
        </p>
      </div>
    )

    ))
}