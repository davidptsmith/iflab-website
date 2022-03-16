import Link from "next/dist/client/link"
import KeyProjectsCard from "./KeyProjectsCard"
import NavigationText from "../Utilities/NavigationText"
const WhatWeDoPresenter = () => {
    return (
        <div  id="KeyProjects" className=" md:min-h-[800px] py-24 md:p-0 md:py-12 lg:px-4 md:w-11/12 w-11/12 my-auto h-full place-items-center grid  mx-auto">
        {/* <div  id="KeyProjects" className="  min-h-[600px] mx-auto my-12 "> */}
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
            <div className=" ">

            <h1 className="w-10/12 pb-12 ">
                What We Do. 
            </h1>
            {/* <p className="prose light">
            We are experts in data, design, technology, research, strategy, sustainability, and modern methods of construction utilising prefabrication and advanced manufacturing.
            </p> */}

          
            <div className="grid  lg:grid-cols-3  w-full h-full md:min-h-[600px]  2xl:space-x-8 gap-8 mx-auto ">

                <KeyProjectsCard
                    projectName={"Precinct"}
                    projectType={"Concept Design"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/HomeHeroImages/02.jpg"}
                    link_path={"no_path"}
                    />

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
       </div>

    


    )
}

export default WhatWeDoPresenter