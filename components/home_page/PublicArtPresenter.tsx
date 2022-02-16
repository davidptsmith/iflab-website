import Link from "next/dist/client/link"
import KeyProjectsCard from "./KeyProjectsCard"
import NavigationText from "../Utilities/NavigationText"
const PublicArtPresenter = () => {
    return (
        <div  id="KeyProjects" className="py-16 lg:h-screen min-h-[800px] mx-auto mb-24 md:mb-24">
            {/* key Projects - three cards, link to projects and contact - 2 buttons  */}
            {/* <div className=" m-auto w-10/12 pt-14 ">
                <h1 >
                    Key Projects: Public Art
                </h1>
                <p className="lg:w-1/3 mr-4 ">
                    We use public art as a way of giving back to the community and a testing bed for innovation. We work alongside architects, fabricators, and clients to ensure that the solutions we provide are fit for purpose add value. 
                    <br/>
                    Our projects work with new fabrication techniques to realise complex geometry and ensure that we minimize the wastage of our designs to ensure they align with our core sustainability goals.
                </p>
                <NavigationText text={""} url={""}/>
            </div> */}

            <div className="grid  lg:grid-cols-3  w-10/12  2xl:space-x-8 gap-8 mx-auto pt-4">

            <div className=" m-auto w-10/12 pt-14 ">
                <h1 >
                    Key Projects:
                    <br/>
                     Public Art
                </h1>
                <p className="">
                    We use public art as a way of giving back to the community and a testing bed for innovation. We work alongside architects, fabricators, and clients to ensure that the solutions we provide are fit for purpose add value. 
                    <br/>
                    Our projects work with new fabrication techniques to realise complex geometry and ensure that we minimize the wastage of our designs to ensure they align with our core sustainability goals.
                </p>
                <NavigationText text={"See our other projects here"} url={"./Projects"}/>
            </div>
{/*           

                <KeyProjectsCard
                    projectName={"Precinct"}
                    projectType={"Concept Design"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/HomeHeroImages/02.jpg"}
                    link_path={"no_path"}
                    /> */}

                <KeyProjectsCard
                    projectName={"Anemoi"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/HomeHeroImages/01.jpg"}
                    link_path={"no_path"}
                    />

                <KeyProjectsCard
                    projectName={"Yanchep SHS"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/HomeHeroImages/12.jpg"}
                    link_path={"no_path"}
                />

            </div>
        
       </div>

    


    )
}

export default PublicArtPresenter