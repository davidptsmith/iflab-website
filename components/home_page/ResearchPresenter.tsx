import Link from "next/dist/client/link"
import KeyProjectsCard from "./KeyProjectsCard"
import NavigationText from "../Utilities/NavigationText"
const ResearchPresenter  = () => {
    return (
        <div  id="KeyProjects" className="md:py-16 pt-8 md:h-screen min-h-[800px] mx-auto h-full my-12">
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

            <div className=" flex flex-col-reverse lg:grid  lg:col  lg:grid-cols-3  w-10/12  2xl:space-x-8 gap-8 mx-auto pt-4">


                <KeyProjectsCard
                    projectName={"Shop Drawing Automation"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/posts/BLOG_Drawing From CSV _1/1.jpg"}
                    link_path={"no_path"}
                    />

                <KeyProjectsCard
                    projectName={"Creative Design Workflows"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"/images/posts/BLOG_LIV - FORM FINDING/1.jpg"}
                    link_path={"no_path"}
                />

<div className=" m-auto w-10/12   lg:pl-8">
                <h1 >
                    Creating Value
                    <br/>
                     Through Applied Research
                </h1>
                <p className="">
Research is at the heart of if/lab's processes. We are never happy with "what is" but rather challenge the status quo by asking <b>"what if?"</b>
                </p>
                    <p className="">
                    Projects provide numerous challenges and opportunities to do better. We are constantly learning and adapting to changing technologies and challenge. 
                    </p>
                <NavigationText text={"See a selection of our project insights"} url={"/Projects"}/>
            </div>


            </div>
        
       </div>

    


    )
}

export default ResearchPresenter 