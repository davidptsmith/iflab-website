import Link from 'next/link'

export default function Post({ post }) {
  return (
    <Link href={`/Insights/${post.slug}`} passHref  >
      <div className='flex flex-col po '>



        <img src={post.frontmatter.cover_image} alt='' className=" h-72   min-w-full align-bottom object-cover opacity-90" />

        {/* <div className='m-4 text- font-thin'>Posted on {post.frontmatter.date}</div> */}


        <h3 className='m-4  text-lg '>
          {post.frontmatter.title}
        </h3>


        <p className='text-sm  text-justify font-thin mx-4 '>
          {post.frontmatter.excerpt}
        </p>


        <div className="block mt-4 p-8">
          <div className="p-2 w-full h-10"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 ">

          <div className='flex flex-wrap   text-xs gap-2 m-4 '>
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
      <div key={tag} className='bg-gray-100 h-8 p-2'>
        <p className='text-xs font-light text-gray-500 h-auto truncate'>
          {tag}
        </p>
      </div>
    )

    ))
}