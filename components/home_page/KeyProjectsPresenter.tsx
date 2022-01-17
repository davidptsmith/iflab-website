import Link from "next/dist/client/link"
import KeyProjectsCard from "./KeyProjectsCard"
const KeyProjectsPresenter = () => {
    return (
        <div  id="KeyProjects" className="py-16 md:h-screen   mx-auto mb-24 md:mb-24">
            {/* key Projects - three cards, link to projects and contact - 2 buttons  */}
            <div className=" m-auto w-10/12 pt-14 ">
                <h1 >
                    Key Projects 
                </h1>
            </div>

            <div className="grid h-3/4  lg:grid-cols-3  w-10/12  2xl:space-x-8 gap-8 mx-auto pt-4">

          

                <KeyProjectsCard
                    projectName={"Public Art: Esplanade"}
                    projectType={"Concept Design"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/projects/Esplanade/cover_image.jpg"}
                    link_path={"no_path"}
                    />

                <KeyProjectsCard
                    projectName={"Teaching & Fabrication: Curtin Student Pavilions"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/projects/Curtin Timber Pavilions/cover_image.jpg"}
                    link_path={"no_path"}
                    />

                <KeyProjectsCard
                    projectName={"Public Art: Yanchep"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/HomeHeroImages/12.jpg"}
                    link_path={"no_path"}
                />

            </div>
        
       </div>

    


    )
}

export default KeyProjectsPresenter