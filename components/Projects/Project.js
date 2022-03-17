import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className="  overflow-hidden  rounded-lg shadow-sm hover:shadow-xl transition duration-500 ease-in-out transform group  ">
      <Link href={`/Projects/${project.slug}`} passHref>
        <img
          alt="iflab Project Image"
          className="max-h-full h-32 md:h-72    min-w-full align-bottom object-cover opacity-90"
          src={project.frontmatter.cover_image}
        />

        <div
          className="flex items-center shadow-lg justify-center h-full w-full top-0 absolute z-20 sm:opacity-0 bg-opacity-50  bg-black sm:bg-transparent
        hover:opacity-100   hover:bg-black hover:bg-opacity-50 hover:scale-105 hover:shadow-lg"
        >
          <h3 className="xl:text-4xl   sm:text-6xl text-3xl p-2  font-bold  text-white z-50 text-center  uppercase">
            {project.frontmatter.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
