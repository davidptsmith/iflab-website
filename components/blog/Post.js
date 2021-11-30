import Link from 'next/link'

export default function Post({ post }) {
  return (
    <Link href={`/Insights/${post.slug}`}  passHref  >
      <div className='max-w-full'>

      <div className=" overflow-hidden cursor-pointer  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 ">

        <img src={post.frontmatter.cover_image} alt='' className=" h-96  min-w-full align-bottom object-cover opacity-90" />

        {/* <div className='m-4 text- font-thin'>Posted on {post.frontmatter.date}</div> */}

        <h3 className='m-4 text-lg font-'>
          {post.frontmatter.title}
        </h3>

        <p className='m-4 text-sm text-justify font-thin '>
          {post.frontmatter.excerpt}
        </p>

        <div className='flex flex-wrap gap-2 m-4 '>
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
      <div key={tag} className='bg-gray-100 p-2'>
        <p className='text-xs font-light text-gray-500 truncate'>
          {tag}
        </p>
      </div>
    )

    ))
}