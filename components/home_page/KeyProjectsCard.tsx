import Link from "next/dist/client/link"
const KeyProjectsCard = ({ projectName, projectType, imageUrl, projectDescription, link_path }) => {
    return (

  

        <Link className="h-full w-full m-auto"  href={link_path} passHref>
        <div className="h-full w-full relative m-auto rounded mx-auto min-h-[200px]  overflow-hidden shadow-md  hover:shadow-2xl cursor-pointer " >
           
{/*                 
                    <img className="h-full absolute  object-cover  " src={imageUrl} alt="Project Image" />

                    <h2 className="absolute m-auto">{projectName}</h2> */}
               
                    <a href={`/Projects/${projectName}`} className="">

                    <img alt="iflab Project Image" className="min-h-full  h-72   h-full  min-w-full m-auto object-cover opacity-90"
                        src={imageUrl} />

                    <div className="flex items-center shadow-lg justify-center h-full w-full top-0 absolute  bg-opacity-30  bg-black 
hover:opacity-100   hover:bg-black hover:bg-opacity-50 hover:scale-105 hover:shadow-lg">
                        <h3 className="xl:text-4xl   sm:text-3xl text-3xl p-2  font-bold  text-white z-50 text-center  uppercase">
                            {projectName}</h3>
                    </div>

                </a>

            </div>
        </Link>

    )
}

export default KeyProjectsCard


// <Link className="h-full w-full"  href={link_path} passHref>
// <div className="h-full rounded mx-auto  overflow-hidden shadow-md  hover:shadow-2xl cursor-pointer " >
   
//         <div className="md:h-5/6 ">
//             <img className="h-full w-full object-cover my-0 " src={imageUrl} alt="Project Image" />
//         </div>
//         <div className="px-6 py-6 mb-4 ">
//             <h3 className="font-bold my-auto no-underline">{projectName}</h3>
//         </div>
   
//     </div>
// </Link>
