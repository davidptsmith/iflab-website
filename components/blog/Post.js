import Link from 'next/link'

export default function Post({ post }) {
  return (
    <Link href={`/Insights/${post.slug}`} passHref  >
      <div className='flex flex-col '>



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


{/* <Link href={`/Insights/${post.slug}`}  passHref  >

      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
        <img className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={post.frontmatter.cover_image} alt=""/>
          <div className="p-4 flex flex-col justify-between leading-normal">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white"> {post.frontmatter.title}</h5>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post.frontmatter.excerpt}</p>
          </div>

       
      </div>

</Link> */}


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